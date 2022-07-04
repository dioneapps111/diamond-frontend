import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

export default function Main() {
    const [value1, setValue1] = useState('');
    return (
        // <div className="">
        <div className='grid col-12 card m-0'>
            <div className='grid col-5' >
                <div className='col-6 mkg p-d-flex'>
                    <label htmlFor="username2" className="input-label pr-2">Username</label>
                    <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                </div>
                <div className='col-6 mkg p-d-flex'>
                    <label htmlFor="username2" className="input-label pr-2">Username</label>
                    <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                </div>
            </div>
            <div className='col-4 '>

            </div>
            <div className='col-3 '>

            </div>
        </div >
        // </div>
    );
}
