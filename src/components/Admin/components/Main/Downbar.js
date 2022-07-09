import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';

export default function Downbar() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    return (
        <div className='grid col-12 card m-0 p-0 py-2'>

            <div className='grid col-4 ml-0 pl-0 algn'>

                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Date" className="input-label mr-2">Carat</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>
                <div className='col-6 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Purchase" className="input-label mr-2">Amount</label>
                    </div>
                    <div className='col-8 py-0 my-1'>
                        <InputText value={value2} className="sm-input" onChange={(e) => setValue2(e.target.value2)} />
                    </div>
                </div>

                <div className='col-12 mkg pt-0 pr-0 p-d-flex'>
                    <div className='col-2 bkg'>
                        <label htmlFor="Party" className="input-label">Remark</label>
                    </div>
                    <div className='col-10 py-0 my-1'>
                        <InputTextarea rows={10} cols={30} value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} autoResize />
                    </div>
                </div>

            </div>

            <div className='grid col-4 ml-0 pl-0 algn'>

                <div className='col-12 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg' >
                        <label htmlFor="Type" className="input-label mr-2">TAX%</label>
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>

                <div className='col-12 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Adat" className="input-label mr-2">+/- Amt</label>
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='col-4 mkg py-0 pr-0 p-d-flex' />
                </div>

            </div>

            <div className='grid col-4 ml-0 pl-0 algn downbr'>

                <div className='col-12 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg' >
                        <label htmlFor="Type" className="input-label mr-2">Broker Amt%</label>
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                </div>

                <div className='col-12 mkg py-0 pr-0 p-d-flex'>
                    <div className='col-4 p-0 bkg'>
                        <label htmlFor="Adat" className="input-label mr-2">Final Amount</label>
                    </div>
                    <div className='col-4 py-0 my-1'>
                        <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='col-4 mkg py-0 pr-0 p-d-flex' />
                </div>

            </div>

        </div>
    )
}