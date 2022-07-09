import { Button } from 'primereact/button'
import React from 'react'

export default function Downbtn() {
    return (
        <div className='grid col-12 downbtn my-1'>
            <Button className='btns mr-3' label="DELETE" />
            <Button className='btns mr-3' label="EXIT" />
            <Button className='btns mr-3' label="PRINT" />
            <Button className='btns mr-3' label="CANCLE" />
            <Button className='btns mr-3' label="SAVE" />
        </div>
    )
}