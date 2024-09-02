import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const allProfiles = await Profile.find({ published: true }).select(
      "-userId"
    );
    return NextResponse.json({ data: allProfiles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    //connect to DB
    await connectDB();

    //get data from client
    const body = await req.json();

    const {
      title,
      description,
      location,
      phone,
      province ,
      city ,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    //check that user was authorized

    const session = await getServerSession(req);


    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }

    //check data that not null
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !province ||
      !city ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا مقادیر را وارد کنید" },
        { status: 400 }
      );
    }

    //save data
    const profile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      province ,
      city ,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json({ message: "آگهی ثبت شد" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(req) {
  try {
    //connect to DB
    await connectDB();

    //get data from client
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      province ,
      city ,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    // check that user was authorized

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }

    //check data not null

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !province ||
      !city || 
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا مقادیر را وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    // update profile

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.price = price;
    profile.province = province ;
    profile.city = city ;
    profile.realState = realState;
    profile.constructionDate = constructionDate;
    profile.category = category;
    profile.rules = rules;
    profile.amenities = amenities;

    profile.save();

    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است ." },
      { status: 500 }
    );
  }
}
