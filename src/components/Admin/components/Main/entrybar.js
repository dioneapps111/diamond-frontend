import React, {  useState } from "react";
import { InputText } from "primereact/inputtext";
// import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
// import Axios from "axios";

export default function Entrybar() {
  const data =
    {
      _id: "62cd42d023099471325773ad",
      inv_type: true,
      type: "LOCAL",
      inv_no: "",
      bill_no: "1",
      party: "HIMESH",
      due_days: "30",
      due_date: "2022-08-04T00:00:00.000Z",
      over_due: "10",
      over_due_date: "2022-08-04T00:00:00.000Z",
      name: "",
      remark: "",
      total_carat: "76789",
      amount: "",
      tax_per: "",
      tax_amount: "",
      curr_amount: "123",
      final_amount: "",
      currency: "USD",
      rate: "",
      final_amount_local: "",
      paid_amount: "",
      paid_amount_local: "",
      remain_amount: "",
      remain_amount_local: "",
      cursor_amount: "",
      broker: "fancy11",
      broker_per: "",
      brok_amount: "",
      p_r_type: "POLISH",
      adat: "None",
      adat_per: "",
      adat_amt: "1",
      c_u_id: "",
      current_date: null,
      current_time: null,
      u_u_id: "",
      u_date: null,
      u_time: null,
      status: "",
      Branch_id: "",
      master_country_id: "",
      date: "2022-07-12T09:45:52.093Z",
      __v: 0,
    }
;
  const [date, setdate] = useState(data.date);
  const [inv_type, setinv_type] = useState(data.inv_type);
  const [currency, setcurrency] = useState(data.currency);
  const [rate, setrate] = useState(data.rate);
  const [bill_no, setbill_no] = useState(data.bill_no);
  const [inv_no, setinv_no] = useState(data.inv_no);
  const [party, setparty] = useState(data.party);
  const [broker, setbroker] = useState(data.broker);
  const [due_days, setdue_days] = useState(data.due_days);
  const [due_date, setdue_date] = useState(data.due_date);
  const [over_due, setover_due] = useState(data.over_due);
  const [over_due_date, setover_due_date] = useState(data.over_due_date);
  const [type, settype] = useState(data.type);
  const [p_r_type, setp_r_type] = useState(data.p_r_type);
  const [adat, setadat] = useState(data.adat);
  const [adat_per, setadat_per] = useState(data.adat_per);
  const [adat_amt, setadat_amt] = useState(data.adat_amt);
  // const onLoadingClick2 = useCallback(() => {
  //   mg = ;
  //   console.log(data.data.data);
  //   setdata(data.data.data);
  //   setdate(data.data.data.date);
  //   setinv_type(data.data.data.inv_type);
  //   setcurrency(data.data.data.currency);
  //   setrate(data.data.data.rate);
  //   setbill_no(data.data.data.bill_no);
  //   setinv_no(data.data.data.inv_no);
  //   setparty(data.data.data.party);
  //   setbroker(data.data.data.broker);
  //   setdue_days(data.data.data.due_days);
  //   setdue_date(data.data.data.due_date);
  //   setover_due(data.data.data.over_due);
  //   setover_due_date(data.data.data.over_due_date);
  //   settype(data.data.data.type);
  //   setp_r_type(data.data.data.p_r_type);
  //   setadat(data.data.data.adat);
  //   setadat_per(data.data.data.adat_per);
  //   setadat_amt(data.data.data.adat_amt);
  // }, [mg]);
  // useEffect(() => {
  //   onLoadingClick2();
  // }, [onLoadingClick2]);
  const citySelectItems = [
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
    { label: "USD", value: "USD" },
  ];
  return (
    <div className="grid col-12 card m-0 p-0 py-2">
      <div className="grid col-6 mr-0 pr-0">
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-2 p-0 bkg">
            <label htmlFor="Date" className="input-label">
              Date
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={date}
              className="sm-input"
              onChange={(e) => setdate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Purchase" className="input-label">
              Purchase
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={inv_type}
              className="sm-input"
              onChange={(e) => setinv_type(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-2 p-0 bkg">
            <label htmlFor="Currency" className="input-label">
              Currency
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <Dropdown
              value={currency}
              options={citySelectItems}
              className="sm-input"
              onChange={(e) => setcurrency(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Curr.date" className="input-label">
              Curr.rate
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={rate}
              className="sm-input"
              onChange={(e) => setrate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-3 p-0 bkg">
            <label htmlFor="Bill No." className="input-label">
              Bill No.
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={bill_no}
              className="sm-input"
              onChange={(e) => setbill_no(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Invoice no" className="input-label">
              Invoice no
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={inv_no}
              className="sm-input"
              onChange={(e) => setinv_no(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 mkg pt-0 pr-0 p-d-flex">
          <div className="col-2 p-0 bkg">
            <label htmlFor="Party" className="input-label">
              Party
            </label>
          </div>
          <div className="col-10 py-0 my-1">
            <InputText
              value={party}
              className="sm-input"
              onChange={(e) => setparty(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 mkg pt-0 pr-0 p-d-flex">
          <div className="col-2 p-0 bkg">
            <label htmlFor="Broker" className="input-label">
              Broker
            </label>
          </div>
          <div className="col-10 py-0 my-1">
            <InputText
              value={broker}
              className="sm-input"
              onChange={(e) => setbroker(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Due Days" className="input-label">
              Due Days
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={due_days}
              className="sm-input"
              onChange={(e) => setdue_days(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Due Date" className="input-label">
              Due Date
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={due_date}
              className="sm-input"
              onChange={(e) => setdue_date(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Over Due" className="input-label">
              Over Due
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={over_due}
              className="sm-input"
              onChange={(e) => setover_due(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Over Due Date" className="input-label">
              Over Due Date
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={over_due_date}
              className="sm-input"
              onChange={(e) => setover_due_date(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid col-4 mr-3 ml-0 pl-0 algn">
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Type" className="input-label">
              Type
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={type}
              className="sm-input"
              onChange={(e) => settype(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-3 p-0 bkg">
            <label htmlFor="P/R" className="input-label">
              P/R
            </label>
          </div>
          <div className="col-9 py-0 my-1">
            <InputText
              value={p_r_type}
              className="sm-input"
              onChange={(e) => setp_r_type(e.target.value)}
            />
          </div>
        </div>

        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Adat" className="input-label">
              Adat
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={adat}
              className="sm-input"
              onChange={(e) => setadat(e.target.value)}
            />
          </div>
        </div>

        <div className="col-6 mkg py-0 pr-0 p-d-flex" />

        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            {/* <label htmlFor="Adat" className="input-label">Adat</label> */}
            <label htmlFor="Type" className="input-label">
              Adat Amt
            </label>
          </div>
          <div className="col-8 py-0 ">
            <InputNumber
              inputId="percent"
              value={adat_per}
              className="sm-input"
              onValueChange={(e) => setadat_per(e.value)}
              suffix="%"
            />
            {/* <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} /> */}
            {/* <InputText value={value1} className="sm-input" onChange={(e) => setValue1(e.target.value)} /> */}
          </div>
        </div>
        <div className="col-6 mkg">
          <InputText
            value={adat_amt}
            className="sm-input"
            onChange={(e) => setadat_amt(e.target.value)}
          />
        </div>
      </div>
      <div className="grid col-2 algn">
        <div className="grid col-12 card m-0 py-0 px-0 search-box">
          <div className="col-12 pt-0 search p-d-flex">
            <div className="col-6">
              <label htmlFor="Search" className="input-label">
                Search
              </label>
            </div>
          </div>
          <Divider className="p-0 m-0" />
          <div className="col-12 mkg mt-1 pt-0 px-0 p-d-flex">
            <div className="col-5 bkg">
              <label htmlFor="Inv no." className="input-label">
                Inv no.
              </label>
            </div>
            <div className="col-7 pl-1 py-0 my-1">
              <InputText
                // value={}
                className="sm-input"
                // onChange={(e) => setValue1(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 mkg mb-1 pt-0 px-0 p-d-flex ">
            <div className="col-5 bkg">
              <label htmlFor="Bill no." className="input-label">
                Bill no.
              </label>
            </div>
            <div className="col-7 pl-1 py-0 my-1">
              <InputText
                // value={value1}
                className="sm-input"
                // onChange={(e) => setValue1(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
