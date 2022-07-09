import React from 'react'
import Entrybar from './entrybar'
import DataTableGridLinesDemo from './Mtable';
import { XlsxBtn } from './XlsxBtn';
import Downbar from './Downbar';
import Downbtn from './Downbtn';

const Main = () => {
    return (
        <div>
            <Entrybar />
            <XlsxBtn />
            <DataTableGridLinesDemo />
            <Downbar />
            <Downbtn />
        </div>
    )
}

export default Main;