import React from 'react'
import { PanelMenu } from 'primereact/panelmenu';
// import { Button } from 'primereact/button';

export default function Sidebar() {

    const Topitems = [
        {
            label: 'Stock Search',
            icon: 'pi pi-fw pi-chart-line',
        },
        {
            label: 'Purchase',
            icon: 'pi pi-fw pi-shopping-cart',
        },
        {
            label: 'Sale',
            icon: 'pi pi-fw pi-shopping-cart',

        },
        {
            label: 'Stock Transfer',
            icon: 'pi pi-fw pi-refresh',

        },
        {
            label: 'Memo',
            icon: 'pi pi-fw pi-file',

        },
        {
            label: 'Payment',
            icon: 'pi pi-fw pi-paypal',

        },
        {
            label: 'Expense',
            icon: 'pi pi-fw pi-wallet',

        }
    ];
    const items = [

        // {
        //     label: 'Advance',
        //     items: [
        //         {
        //             label: 'Left',
        //             icon: 'pi pi-fw pi-align-left'
        //         },
        //         {
        //             label: 'Right',
        //             icon: 'pi pi-fw pi-align-right'
        //         },
        //         {
        //             label: 'Center',
        //             icon: 'pi pi-fw pi-align-center'
        //         },
        //         {
        //             label: 'Justify',
        //             icon: 'pi pi-fw pi-align-justify'
        //         }
        //     ]
        // },
        {
            label: 'Advance Report',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
            ]
        },
        {
            label: 'Transaction',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times'
                }
            ]
        },
        {
            label: 'Master',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <div className='sidebar-menu'>
            <span className='top-menu'>
                <PanelMenu model={Topitems} />
            </span>
            <PanelMenu model={items} />
        </div>
    );
}
