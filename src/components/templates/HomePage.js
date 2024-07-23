"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./HomePage.module.css";
import Image from "next/image";
import imgcarousel1 from "../../../public/carousel-1.jpg";
import imgcarousel2 from "../../../public/carousel-2.jpg";
import Buttons from "../modules/Buttons";
import { Icon } from "@iconify-icon/react";
import SearchBarPage from "./SearchBarPage";

function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: "rtl",
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={`embla ${styles.embla}`}>
            <div className="embla__viewport" ref={emblaRef}>
              <div className={`embla__container ${styles.emblaContainer}`}>
                <div className={`embla__slide ${styles.item}`}>
                  <Image src={imgcarousel1} alt="عکس 1" />
                </div>
                <div className={`embla__slide ${styles.item}`}>
                  <Image src={imgcarousel2} alt="عکس 2" />
                </div>
              </div>
            </div>
            <div className={styles.prevNext}>
              <button
                className={`embla__prev ${styles.emblaPrev}`}
                onClick={scrollPrev}
              >
                <Icon
                  icon="mingcute:right-line"
                  width="1.5rem"
                  height="1.5rem"
                />
              </button>
              <button
                className={`embla__next ${styles.emblaNext}`}
                onClick={scrollNext}
              >
                <Icon
                  icon="mingcute:left-line"
                  width="1.5rem"
                  height="1.5rem"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h1>
            <span>خانه ای عالی</span> برای زندگی با خانواده خود پیدا کنید.
          </h1>
          <Buttons text="تمام آگهی ها" bgcolor="#00B98E" color="#fff" />
        </div>
      </div>
      <div>
        <SearchBarPage/>
      </div>
    </div>
  );
}

export default HomePage;
