import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Axios from "axios";
import { AutoComplete } from "primereact/autocomplete";

export const XlsxBtn = () => {
    let temp = [
        {
            type: "",
            kapan: "",
            refno: "",
            color: "",
            clarity: "",
            shape: "",
            size: "",
            lotno: "",
            certno: "",
            remark: "",
        },
    ];
    const [type, setType] = useState([]);
    const [color, setColor] = useState([]);
    const [clarity, setClarity] = useState([]);
    const [shape, setShape] = useState([]);
    const [size, setSize] = useState([]);

    const onLoadingClick2 = () => {
        Axios({
            // Endpoint to send files
            method: "get",
            url: "http://13.233.194.118:3004/types/gettypes",
            headers: {
                // Add any auth token here
                data_authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRGlvbmUiLCJwYXNzd29yZCI6IkRpb25lJjE2OSIsImlhdCI6MTY1NzUyMTc4NH0.8eV7s5OBV6RXWNeM3EKa5jIHrFu1JuJkw8jklVIOr0A",
            },
        })
            .then((data) => {
                console.log(data.data.Primery_arry);
                let type = data.data.Primery_arry[0].TYPE;
                let empty = [];
                type.map((e, i) => {
                    empty.push({ name: e.name, value: e.name });
                    return false;
                });
                setType(empty);
                empty = [];
                let color = data.data.Primery_arry[0].COLOR;
                color.map((e, i) => {
                    empty.push({ name: e.name, value: e.name });
                    return false;
                });
                setColor(empty);
                empty = [];
                let clarity = data.data.Primery_arry[0].CLARITY;
                clarity.map((e, i) => {
                    empty.push({ name: e.name, value: e.name });
                    return false;
                });
                setClarity(empty);
                empty = [];
                let shape = data.data.Primery_arry[0].SHAPE;
                shape.map((e, i) => {
                    empty.push({ name: e.name, value: e.name });
                    return false;
                });
                setShape(empty);
                empty = [];
                let size = data.data.Primery_arry[0].SIZE;
                size.map((e, i) => {
                    empty.push({ name: e.name, value: e.name });
                    return false;
                });
                setSize(empty);
                // setType()
            })
            .catch((error) => console.log(error));
        return false;
    };
    useEffect(() => {
        onLoadingClick2();
    }, []);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    // const [position, setPosition] = useState('center');
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
                <Button className="btns mr-2" label="RESET" />
                {/* <Button className="btns mr-3" label="DELETE" /> */}
                <Button className="btns mr-2" label="SAVE" />
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
        // console.log(cnt);
        if (
            data[cnt].type !== "" ||
            data[cnt].kapan !== "" ||
            data[cnt].refno !== "" ||
            data[cnt].color !== "" ||
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
                    color: "",
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
    }, [data]);
    const setDataOnChange = (feild, index, value) => {
        let mg = data;
        console.log();
        if (feild === "type") {
            mg[index].type = value;
        }
        if (feild === "kapan") {
            mg[index].kapan = value.toUpperCase();
        }
        if (feild === "refno") {
            mg[index].refno = value.toUpperCase();
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
            mg[index].lotno = value.toUpperCase();
        }
        if (feild === "certno") {
            mg[index].certno = value.toUpperCase();
        }
        if (feild === "remark") {
            mg[index].remark = value.toUpperCase();
        }
        setData([...mg]);
    };
    // const [type, setType] = useState([]);
    const [filteredtype, setFilteredtype] = useState(null);
    const searchType = (event) => {
        let _filteredtype;
        if (!event.query.trim().length) {
            _filteredtype = [...type];
        } else {
            _filteredtype = type.filter((Type) => {
                return Type.name.toUpperCase().startsWith(event.query.toUpperCase());
            });
        }

        setFilteredtype(_filteredtype);
    };
    const [filteredColor, setFilteredColor] = useState(null);
    const searchColor = (event) => {
        let _filteredtype;
        if (!event.query.trim().length) {
            _filteredtype = [...color];
        } else {
            _filteredtype = color.filter((Color) => {
                return Color.name.toUpperCase().startsWith(event.query.toUpperCase());
            });
        }

        setFilteredColor(_filteredtype);
    };
    const [filteredClarity, setFilteredClarity] = useState(null);
    const searchClarity = (event) => {
        let _filteredtype;
        if (!event.query.trim().length) {
            _filteredtype = [...clarity];
        } else {
            _filteredtype = clarity.filter((Type) => {
                return Type.name.toUpperCase().startsWith(event.query.toUpperCase());
            });
        }

        setFilteredClarity(_filteredtype);
    };
    const [filteredShape, setFilteredShape] = useState(null);
    const searchShape = (event) => {
        let _filteredtype;
        if (!event.query.trim().length) {
            _filteredtype = [...shape];
        } else {
            _filteredtype = shape.filter((Type) => {
                return Type.name.toUpperCase().startsWith(event.query.toUpperCase());
            });
        }

        setFilteredShape(_filteredtype);
    };
    const [filteredSize, setFilteredSize] = useState(null);
    const searchSize = (event) => {
        let _filteredtype;
        if (!event.query.trim().length) {
            _filteredtype = [...size];
        } else {
            _filteredtype = size.filter((Size) => {
                return Size.name.toUpperCase().startsWith(event.query.toUpperCase());
            });
        }

        setFilteredSize(_filteredtype);
    };
    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <div>{item.name}</div>
            </div>
        );
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
                style={{ minWidth: "73%" }}
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
                                            <AutoComplete
                                                value={eliment.type}
                                                suggestions={filteredtype}
                                                completeMethod={searchType}
                                                field="name"
                                                dropdown
                                                forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) =>
                                                    setDataOnChange("type", index, e.target.value)
                                                }
                                                aria-label="type"
                                            />
                                        </td>

                                        <td>
                                            <input
                                                type="text"
                                                name="kapan"
                                                autoComplete=""
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
                                            <AutoComplete
                                                value={eliment.color}
                                                suggestions={filteredColor}
                                                completeMethod={searchColor}
                                                field="name"
                                                dropdown
                                                forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) =>
                                                    setDataOnChange("color", index, e.target.value)
                                                }
                                                aria-label="type"
                                            />
                                            {/* <input
                        type="text"
                        name="color"
                        onChange={(e) => {
                          setDataOnChange("color", index, e.target.value);
                        }}
                        value={eliment.color}
                      ></input> */}
                                        </td>
                                        <td>
                                            <AutoComplete
                                                value={eliment.clarity}
                                                suggestions={filteredClarity}
                                                completeMethod={searchClarity}
                                                field="name"
                                                dropdown
                                                forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) =>
                                                    setDataOnChange("clarity", index, e.target.value)
                                                }
                                                aria-label="type"
                                            />
                                            {/* <input
                        type="text"
                        name="clarity"
                        onChange={(e) => {
                          setDataOnChange("clarity", index, e.target.value);
                        }}
                        value={eliment.clarity}
                      ></input> */}
                                        </td>
                                        <td>
                                            <AutoComplete
                                                value={eliment.shape}
                                                suggestions={filteredShape}
                                                completeMethod={searchShape}
                                                field="name"
                                                dropdown
                                                forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) =>
                                                    setDataOnChange("shape", index, e.target.value)
                                                }
                                                aria-label="type"
                                            />
                                            {/* <input
                        type="text"
                        name="shape"
                        onChange={(e) => {
                          setDataOnChange("shape", index, e.target.value);
                        }}
                        value={eliment.shape}
                      ></input> */}
                                        </td>
                                        <td>
                                            <AutoComplete
                                                value={eliment.size}
                                                suggestions={filteredSize}
                                                completeMethod={searchSize}
                                                field="name"
                                                dropdown
                                                forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) =>
                                                    setDataOnChange("size", index, e.target.value)
                                                }
                                                aria-label="type"
                                            />
                                            {/* <input
                        type="text"
                        name="size"
                        onChange={(e) => {
                          setDataOnChange("size", index, e.target.value);
                        }}
                        value={eliment.size}
                      ></input> */}
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
