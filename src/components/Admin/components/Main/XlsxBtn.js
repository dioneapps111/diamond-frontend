import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from 'primereact/dropdown';
import Axios from "axios";
import { AutoComplete } from 'primereact/autocomplete';

export const XlsxBtn = () => {
    let temp = [{
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
    }];
    const [cities, setCities] = useState([]);

    const onLoadingClick2 = () => {
        Axios({
            // Endpoint to send files
            method: "get",
            url: "http://13.233.194.118:3004/types/gettypes",
            headers: {
                // Add any auth token here
                data_authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRGlvbmUiLCJwYXNzd29yZCI6IkRpb25lJjE2OSIsImlhdCI6MTY1NzUyMTc4NH0.8eV7s5OBV6RXWNeM3EKa5jIHrFu1JuJkw8jklVIOr0A",
            },
        })
            .then((data) => {
                console.log(data.data.Primery_arry);
                let type = data.data.Primery_arry[0].TYPE;
                let empty = [];
                type.map((e, i) => {
                    empty.push({ name: e.name, value: e.name })
                    console.log(e.name);
                    return false;
                })
                setCities(empty);
                // setCities()

            })
            .catch((error) => console.log(error));
        return false;
    };
    useEffect(() => {
        onLoadingClick2();
    }, [])
    const [displayResponsive, setDisplayResponsive] = useState(false);
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
    // const [cities, setcities] = useState([]);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [filteredcities, setFilteredcities] = useState(null);
    const searchCountry = (event) => {
        let _filteredcities;
        if (!event.query.trim().length) {
            _filteredcities = [...cities];
        }
        else {
            _filteredcities = cities.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }

        setFilteredcities(_filteredcities);

    }
    const itemTemplate = (item) => {
        return (
            <div className="country-item">

                <div>{item.name}</div>
            </div>
        );
    }
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
                style={{ "min-width": "73%" }}
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
                                            {/* <Dropdown
                        value={selectedCity2}
                        options={cities}
                        onChange={onCityChange2}
                        optionLabel="name"
                        editable
                      /> */}
                                            <AutoComplete value={selectedCountry2}
                                                suggestions={filteredcities}
                                                completeMethod={searchCountry}
                                                field="name" dropdown dropdownbtn forceSelection
                                                itemTemplate={itemTemplate}
                                                onChange={(e) => setSelectedCountry2(e.value)}
                                                aria-label="cities" />

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
