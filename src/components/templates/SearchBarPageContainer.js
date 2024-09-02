import React from "react";
import SearchBarPage from "../modules/SearchBarPage";

async function SearchBarPageContainer() {
  const res = await fetch("https://iran-locations-api.ir/api/v1/fa/states");
  const data = await res.json();
  const provinces = data.map((item) => item.name);

  return <SearchBarPage provinces={provinces} />;
}

export default SearchBarPageContainer;
