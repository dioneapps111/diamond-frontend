import React from "react";
import Main from "./components/Main/main";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
// import { PanelMenu } from 'primereact/panelmenu';

const Admin = () => {
    return (
        <>
            <div className="grid">
                <div className="col-12 topbar">
                    <Topbar />
                </div>
                {/* <div className="grid col-12"> */}
                <div className="col-2 over ">
                    <Sidebar />
                    {/* <PanelMenu model={items} /> */}
                </div>
                <div className="col-10 main over">
                    <Main />
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Admin;
