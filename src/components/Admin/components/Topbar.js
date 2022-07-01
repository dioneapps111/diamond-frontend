import React from 'react'

export default function topbar() {
    return (
        <div className="grid">

            <div className="col-1 Logo">
                <img alt="" src="./logo.png"></img>
            </div>
            <div className="col-10 tabs"></div>
            <div className="col-1 account"></div>
        </div>
    );
}
