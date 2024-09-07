

import React from "react";
import PortfolioDetail from "../../../components/ProtfolioDetails";

import { DataArray } from "@/app/data";

const Portfolio = (props) => {
    const id = parseInt(props.params.id);
  //  console.log(id - 511)
  // console.log(DataArray[id - 511]);

  return (
    <div className="">
      <PortfolioDetail
        data={DataArray[id - 511]}
        id={id - 511}
        DataArray={DataArray}
      />
    </div>
  );
};

export default Portfolio;
