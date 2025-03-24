import React from "react";
import PortfolioDetail from "../../../components/ProtfolioDetails";
import { WebArray, DataArray } from "@/app/data";

const Portfolio = ({ params }) => {
  const projectId = params.id;
  const arrayType = projectId[0]; // '5' for web, '6' for data
  const projectNumber = parseInt(projectId.slice(1), 10);
  const index = projectNumber - 11; // Convert 511 → 0, 612 → 1, etc.
  const dataArray = arrayType === '5' ? WebArray : DataArray;

  if (index < 0 || index >= dataArray.length) {
    return <div>Project not found</div>;
  }

  return (
    <PortfolioDetail
      data={dataArray[index]}
      id={projectId}
      relatedProjects={dataArray}
    />
  );
};

export default Portfolio;