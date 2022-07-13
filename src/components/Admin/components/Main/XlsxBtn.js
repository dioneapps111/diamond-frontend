import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import temp from "./temp";
import { Dropdown } from 'primereact/dropdown';

export const XlsxBtn = () => {
  const [displayResponsive, setDisplayResponsive] = useState(true);
  // const [position, setPosition] = useState('center');
  const [selectedCity2, setSelectedCity2] = useState(null);
  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    // if (position) {
    //     setPosition(position);
    // }
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = (name) => {
    return (
      <div className="grid col-12 downbtnlot">
        <Button className="btns mr-3" label="RESET" />
        <Button className="btns mr-3" label="DELETE" />
        <Button className="btns mr-3" label="SAVE" />
      </div>
    );
  };
  const renderHeader = (name) => {
    return (
      <div>
        <Button
          className="btns mr-3"
          label="DEMO"
          onClick={() => onClick("displayResponsive")}
        />
        <Button
          className="btns mr-3"
          label="IMPORT"
          onClick={() => onClick("displayResponsive")}
        />
      </div>
    );
  };
  const [data, setData] = useState(temp);
  useEffect(() => {
    let cnt = data.length - 1;
    console.log(cnt);
    if (cnt > 10) {
      if (
        data[cnt].type !== "" ||
        data[cnt].kapan !== "" ||
        data[cnt].refno !== "" ||
        data[cnt].clarity !== "" ||
        data[cnt].shape !== "" ||
        data[cnt].size !== "" ||
        data[cnt].lotno !== "" ||
        data[cnt].certno !== "" ||
        data[cnt].remark !== ""
      ) {
        let newData = [
          ...data,
          {
            type: "",
            kapan: "",
            refno: "",
            clarity: "",
            shape: "",
            size: "",
            lotno: "",
            certno: "",
            remark: "",
          },
        ];
        setData(newData);
      }
    }
  }, [data]);
  const setDataOnChange = (feild, index, value) => {
    let mg = data;
    console.log();
    if (feild === "type") {
      mg[index].type = value;
    }
    if (feild === "kapan") {
      mg[index].kapan = value;
    }
    if (feild === "refno") {
      mg[index].refno = value;
    }
    if (feild === "color") {
      mg[index].color = value;
    }
    if (feild === "clarity") {
      mg[index].clarity = value;
    }
    if (feild === "shape") {
      mg[index].shape = value;
    }
    if (feild === "size") {
      mg[index].size = value;
    }
    if (feild === "lotno") {
      mg[index].lotno = value;
    }
    if (feild === "certno") {
      mg[index].certno = value;
    }
    if (feild === "remark") {
      mg[index].remark = value;
    }
    setData([...mg]);
  };
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const onCityChange2 = (e) => {
    setSelectedCity2(e.value);
  };
  return (
    <div className="grid col-12 btnparent my-1">
      <Button
        className="btns mr-3"
        label="ADD LOT"
        onClick={() => onClick("displayResponsive")}
      />
      <Dialog
        header={renderHeader("displayResponsive")}
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "73%" }}
        footer={renderFooter("displayResponsive")}
      >
        <div className="col-12 model-tbl pb-0 p-0 p-fluid">
          <table className="data-table ">
            <thead>
              <tr>
                <th>type</th>
                <th>kapan</th>
                <th>refno</th>
                <th>color</th>
                <th>clarity</th>
                <th>shape</th>
                <th>size</th>
                <th>lotno</th>
                <th>certno</th>
                <th>remark</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eliment, index) => {
                return (
                  <tr key={"lot" + index}>
                    <td>
                      <Dropdown
                        value={selectedCity2}
                        options={cities}
                        onChange={onCityChange2}
                        optionLabel="name"
                        editable
                      />
                    </td>
                    {/* <td>
                      <input
                        type="text"
                        name="type"
                        onChange={(e) => {
                          setDataOnChange("type", index, e.target.value);
                        }}
                        value={eliment.type}
                      ></input>
                    </td> */}
                    <td>
                      <input
                        type="text"
                        name="kapan"
                        onChange={(e) => {
                          setDataOnChange("kapan", index, e.target.value);
                        }}
                        value={eliment.kapan}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="refno"
                        onChange={(e) => {
                          setDataOnChange("refno", index, e.target.value);
                        }}
                        value={eliment.refno}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="color"
                        onChange={(e) => {
                          setDataOnChange("color", index, e.target.value);
                        }}
                        value={eliment.color}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="clarity"
                        onChange={(e) => {
                          setDataOnChange("clarity", index, e.target.value);
                        }}
                        value={eliment.clarity}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="shape"
                        onChange={(e) => {
                          setDataOnChange("shape", index, e.target.value);
                        }}
                        value={eliment.shape}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="size"
                        onChange={(e) => {
                          setDataOnChange("size", index, e.target.value);
                        }}
                        value={eliment.size}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="lotno"
                        onChange={(e) => {
                          setDataOnChange("lotno", index, e.target.value);
                        }}
                        value={eliment.lotno}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="certno"
                        onChange={(e) => {
                          setDataOnChange("certno", index, e.target.value);
                        }}
                        value={eliment.certno}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="remark"
                        onChange={(e) => {
                          setDataOnChange("remark", index, e.target.value);
                        }}
                        value={eliment.remark}
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Dialog>
      <Button className="btns mr-3" label="DEMO" />
      <Button className="btns mr-3" label="IMPORT" />
    </div>
  );
};
