import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

export default function Entrybar() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    return (
        <div className='grid col-12 card m-0 p-0 py-2'>
            <div className='grid col-6 mr-0 pr-0' >
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Date" className="input-label">Date</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Purchase" className="input-label">Purchase</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value2} className="sm-input" onChange={(e) => setValue2(e.target.value2)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Currency" className="input-label">Currency</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Curr.date" className="input-label">Curr.date</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Bill No." className="input-label">Bill No.</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Invoice no" className="input-label">Invoice no</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-12 mkg pt-0 pr-0 p-d-flex'>
                    <div className='col-2 bkg'>
                        <label htmlFor="Party" className="input-label">Party</label>
                    </div>
                    <div className='col-10 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-12 mkg pt-0 pr-0 p-d-flex'>
                    <div className='col-2 bkg'>
                        <label htmlFor="Broker" className="input-label">Broker</label>
                    </div>
                    <div className='col-10 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Due Days" className="input-label">Due Days</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Due Date" className="input-label">Due Date</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Over Due" className="input-label">Over Due</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Over Due Date" className="input-label">Over Due Date</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
            </div >
            <div className='grid col-4 mr-3 ml-0 pl-0 algn'>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 ml-4 p-0 bkg' >
                        <label htmlFor="Type" className="input-label">Type</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-3 ml-4 p-0 bkg'>
                        <label htmlFor="P/R" className="input-label">P/R</label>
                    </div>
                    <div className='col-9 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>

                <div className='col-6 mkg ml-4 py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Adat" className="input-label">Adat</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>

                <div className='col-6 mkg py-0 pr-0 p-d-flex' />

                <div className='col-12 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-2 p-0 bkg' style={{ width: "23%" }}>
                        <label htmlFor="Type" className="input-label">Adat Amt</label>
                    </div>
                    <div className='col-5 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='col-5 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className='grid col-2 algn'>
                <div className='grid col-12 card m-0 py-0 px-0 search-box'>
                    <div className='col-12 pt-0 search p-d-flex'>
                        <div className='col-6'>
                            <label htmlFor="Search" className="input-label">Search</label>
                        </div>
                    </div>
                    <Divider className='p-0 m-0' />
                    <div className='col-12 mkg mt-1 pt-0 px-0 p-d-flex'>
                        <div className='col-5 bkg'>
                            <label htmlFor="Inv no." className="input-label">Inv no.</label>
                        </div>
                        <div className='col-7 pl-1 py-0 my-1'>
                            <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                        </div>
                    </div>
                    <div className='col-12 mkg mb-1 pt-0 px-0 p-d-flex '>
                        <div className='col-5 bkg'>
                            <label htmlFor="Bill no." className="input-label">Bill no.</label>
                        </div>
                        <div className='col-7 pl-1 py-0 my-1'>
                            <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
