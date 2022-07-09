import React from 'react'
import { Button } from 'primereact/button';

export const XlsxBtn = () => {
    return (
        <div className='grid col-12 btnparent my-1'>
            <Button className='btns mr-3' label="ADD LOT" />
            <Button className='btns mr-3' label="DEMO" />
            <Button className='btns mr-3' label="IMPORT" />
        </div>
    )
}
