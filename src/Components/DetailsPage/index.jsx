import React from "react";
import "./index.css";

const DetailsPage = ({ data }) => {
  return (
    <div className="detailsWrapper">
      <table className="w-full">
        <thead className="tableHeader">
          <tr>
            <th className="tableData">Name</th>
            <th className="tableData">Class</th>
            <th className="tableData">Roll Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableData">{data?.name}</td>
            <td className="tableData">{data?.class}</td>
            <td className="tableData">{data?.rollNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
