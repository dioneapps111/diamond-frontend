import React, { useEffect, useState } from "react";
const DataTableGridLinesDemo = () => {
  const [data, setData] = useState([
    {
      refno: "A1",
      lotno: "FANCY YELLOW VS1 CUSHION",
      pcs: "1",
      carat: "10.2",
      rate: "200",
      amount: "2040",
      l1: "1",
      l2: "2",
      net_amount: "1950",
      kapan: "S1",
      remark: "ok",
      asking_rate: "1000",
    },
    {
      refno: "A1",
      lotno: "FANCY YELLOW VS1 CUSHION",
      pcs: "1",
      carat: "10.2",
      rate: "200",
      amount: "2040",
      l1: "1",
      l2: "2",
      net_amount: "1950",
      kapan: "S1",
      remark: "ok",
      asking_rate: "1000",
    },
  ]);
  useEffect(() => {
    let cnt = data.length - 1;
    if (
      data[cnt].refno !== "" ||
      data[cnt].lotno !== "" ||
      data[cnt].pcs !== "" ||
      data[cnt].carat !== "" ||
      data[cnt].rate !== "" ||
      data[cnt].amount !== "" ||
      data[cnt].l1 !== "" ||
      data[cnt].l2 !== "" ||
      data[cnt].net_amount !== "" ||
      data[cnt].kapan !== "" ||
      data[cnt].remark !== "" ||
      data[cnt].asking_rate !== ""
    ) {
      let newData = [
        ...data,
        {
          refno: "",
          lotno: "",
          pcs: "",
          carat: "",
          rate: "",
          amount: "",
          l1: "",
          l2: "",
          net_amount: "",
          kapan: "",
          remark: "",
          asking_rate: "",
        },
      ];
      setData(newData);
    }
  }, [data]);
  const setDataOnChange = (feild, index, value) => {
    let mg = data;
    console.log();
    if (feild === "refno") {
      mg[index].refno = value;
    }
    if (feild === "lotno") {
      mg[index].lotno = value;
    }
    if (feild === "pcs") {
      mg[index].pcs = value;
    }
    if (feild === "carat") {
      mg[index].carat = value;
    }
    if (feild === "rate") {
      mg[index].rate = value;
    }
    if (feild === "amount") {
      mg[index].amount = value;
    }
    if (feild === "l1") {
      mg[index].l1 = value;
    }
    if (feild === "l2") {
      mg[index].l2 = value;
    }
    if (feild === "net_amount") {
      mg[index].net_amount = value;
    }
    if (feild === "kapan") {
      mg[index].kapan = value;
    }
    if (feild === "remark") {
      mg[index].remark = value;
    }
    if (feild === "asking_rate") {
      mg[index].asking_rate = value;
    }
    setData([...mg]);
  };
  return (
    <div className="col-12 tbl p-0 my-3 p-fluid">
      <table className="data-table ">
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
          {data.map((eliment, index) => {
            return (
              <tr key={"lot" + index}>
                <td>{index + 1}</td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="refno"
                    onChange={(e) => {
                      setDataOnChange("refno", index, e.target.value);
                    }}
                    value={eliment.refno}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="lotno"
                    onChange={(e) => {
                      setDataOnChange("lotno", index, e.target.value);
                    }}
                    value={eliment.lotno}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="pcs"
                    onChange={(e) => {
                      setDataOnChange("pcs", index, e.target.value);
                    }}
                    value={eliment.pcs}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="carat"
                    onChange={(e) => {
                      setDataOnChange("carat", index, e.target.value);
                    }}
                    value={eliment.carat}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="rate"
                    onChange={(e) => {
                      setDataOnChange("rate", index, e.target.value);
                    }}
                    value={eliment.rate}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="amount"
                    onChange={(e) => {
                      setDataOnChange("amount", index, e.target.value);
                    }}
                    value={eliment.amount}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="l1"
                    onChange={(e) => {
                      setDataOnChange("l1", index, e.target.value);
                    }}
                    value={eliment.l1}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="l2"
                    onChange={(e) => {
                      setDataOnChange("l2", index, e.target.value);
                    }}
                    value={eliment.l2}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="net_amount"
                    onChange={(e) => {
                      setDataOnChange("net_amount", index, e.target.value);
                    }}
                    value={eliment.net_amount}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="kapan"
                    onChange={(e) => {
                      setDataOnChange("kapan", index, e.target.value);
                    }}
                    value={eliment.kapan}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="remark"
                    onChange={(e) => {
                      setDataOnChange("remark", index, e.target.value);
                    }}
                    value={eliment.remark}
                  ></input>
                </td>
                <td >
                  <input
                    className="input"
                    type="text"
                    name="asking_rate"
                    onChange={(e) => {
                      setDataOnChange("asking_rate", index, e.target.value);
                    }}
                    value={eliment.asking_rate}
                  ></input>
                </td>
                <td >DELETE</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableGridLinesDemo;
