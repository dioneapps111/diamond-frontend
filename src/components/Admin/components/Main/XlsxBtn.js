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
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
    return (
        <div className='grid col-12 btnparent my-1'>
            <Button className='btns mr-3' label="ADD LOT" onClick={() => onClick('displayResponsive')} />
            <Dialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Dialog>
            <Button className='btns mr-3' label="DEMO" />
            <Button className='btns mr-3' label="IMPORT" />
        </div>
    )
}
