import React from "react";
import "./index.css";

const DataTable = ({ data = [] }) => {
  return (
    <div className="w-50 border-1">
      <table className="w-full">
        <thead>
          <tr>
            <th className="cell-Border">Name</th>
            <th className="cell-Border">Class</th>
            <th className="cell-Border">Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((student, idx) => {
            return (
              <tr key={idx}>
                <td className="table-cell cell-Border">{student.name}</td>
                <td className="table-cell cell-Border">{student.class}</td>
                <td className="table-cell cell-Border">{student.rollNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
