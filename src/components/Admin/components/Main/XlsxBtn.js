import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const XlsxBtn = () => {
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const renderFooter = (name) => {
        return (
            <div className='grid col-12 downbtnlot'>
                <Button className='btns mr-3' label="RESET" />
                <Button className='btns mr-3' label="DELETE" />
                <Button className='btns mr-3' label="SAVE" />
            </div>
        );
    }
    const renderHeader = (name) => {
        return (
            <div>
                <Button className='btns mr-3' label="DEMO" onClick={() => onClick('displayResponsive')} />
                <Button className='btns mr-3' label="IMPORT" onClick={() => onClick('displayResponsive')} />
            </div>
        );
    }
    return (
        <div className='grid col-12 btnparent my-1'>
            <Button className='btns mr-3' label="ADD LOT" onClick={() => onClick('displayResponsive')} />
            <Dialog header={renderHeader('displayResponsive')} visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '73vw' }} footer={renderFooter('displayResponsive')}>
                <div className="col-12 tbl m-0 p-0 p-fluid">
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>50mt</td>
                                <td>9mm</td>
                                <td>9mm</td>
                                <td>1/2"</td>
                                <td>1/2"</td>
                                <td>Kangal / Coil</td>
                                <td>Kangal / Coil</td>
                                <td>Kangal / Coil</td>
                                <td>Kangal / Coil</td>
                                <td>Kangal / Coil</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Dialog>
            <Button className='btns mr-3' label="DEMO" />
            <Button className='btns mr-3' label="IMPORT" />
        </div>
    )
}
