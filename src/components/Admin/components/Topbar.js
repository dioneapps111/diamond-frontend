import React from "react";
import { Button } from 'primereact/button';

export default function Topbar() {
  return (
    <div className='grid'>
      <div className='col-2 Logo'>
        <img alt='' src='./logo.png'></img>
      </div>
      <div className='col-9 tabs'>
        <span className="tab-btn">
          <Button label="Submit" aria-label="Submit" />
          <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text p-button-sm" aria-label="Cancel" />
        </span>
        <span className="tab-btn">
          <Button label="Submit" aria-label="Submit" />
          <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text p-button-sm" aria-label="Cancel" />
        </span>
      </div>
      <div className='col-1 account'></div>
    </div>
  );
}
