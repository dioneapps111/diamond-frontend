import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const DataTableGridLinesDemo = () => {
    const [products, setProducts] = useState([
        {
            "NO.": "1",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "2",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "3",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "4",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "5",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "6",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "7",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
        {
            "NO.": "8",
            "REF NO": "A1",
            "LOT NO": "FANCY YELLOW VS1 CUSHION",
            "PCS": "1",
            "CARAT": "black-watch.jpg",
            "RATE": 72,
            "AMOUNT": "Accessories",
            "L1": "INSTOCK",
            "L2": 4,
            "NET AMOUNT": "1950",
            "KAPAN": "S1",
            "REMARK": "OK",
            "ASKING": "1000",
            "DELETE": ""
        },
    ]);
    const columns = [
        { field: 'NO.', header: 'NO.' },
        { field: 'REF NO', header: 'REF NO' },
        { field: 'LOT NO', header: 'LOT NO' },
        { field: 'PCS', header: 'PCS' },
        { field: 'CARAT', header: 'CARAT' },
        { field: 'RATE', header: 'RATE' },
        { field: 'AMOUNT', header: 'AMOUNT' },
        { field: 'L1', header: 'L1' },
        { field: 'L2', header: 'L2' },
        { field: 'NET AMOUNT', header: 'NET AMOUNT' },
        { field: 'KAPAN', header: 'KAPAN' },
        { field: 'REMARK', header: 'REMARK' },
        { field: 'ASKING', header: 'ASKING' },
        { field: 'DELETE', header: 'DELETE' }
    ];
    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }
    const textEditor = (options) => {
        return <InputText style={{ width: "100px" }} type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }
    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }
    const cellEditor = (options) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }
    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    return (
        <div className="col-12 tbl m-0 p-0 py-2 p-fluid">
            <DataTable value={products} editMode="cell" showGridlines scrollable scrollHeight="276px" className="editable-cells-table" responsiveLayout="scroll" >
                {
                    columns.map(({ field, header }) => {
                        return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
                            editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                    })
                }
            </DataTable>
        </div>
    )
}

export default DataTableGridLinesDemo;