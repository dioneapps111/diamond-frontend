// import React, { useState, useEffect } from "react";
import React from "react";

const DataTableGridLinesDemo = () => {

  return (
    <div className="col-12 tbl m-0 p-0 py-2 p-fluid">
      <table className="data-table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>REF NO</th>
            <th>LOT NO</th>
            <th>PCS</th>
            <th>CARAT</th>
            <th>RATE</th>
            <th>AMOUNT</th>
            <th>L1</th>
            <th>L2</th>
            <th>NET AMOUNT</th>
            <th>KAPAN</th>
            <th>REMARK</th>
            <th>ASKING</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50mt</td>
            <td>9mm</td>
            <td>1/2"</td>
            <td>Kangal / Coil</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTableGridLinesDemo;
