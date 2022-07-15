import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useEffect, useState, useCallback } from "react";
import Axios from "axios";

export default function Downbar() {
  const [data, setdata] = useState({
    total_carat: "",
    amount: "",
    remark: "",
    tax_per: "",
    tax_amount: "",
    curr_amount: "",
    broker_per: "",
    brok_amount: "",
    final_amount: "",
  });
  const [total_carat, setTotal_carat] = useState(data.total_carat);
  const [amount, setAmount] = useState(data.amount);
  const [remark, setRemark] = useState(data.remark);
  const [tax_per, setTax_per] = useState(data.tax_per);
  const [tax_amount, setTax_amount] = useState(data.tax_amount);
  const [curr_amount, setCurr_amount] = useState(data.curr_amount);
  const [broker_per, setBroker_per] = useState(data.broker_per);
  const [brok_amount, setBrok_amount] = useState(data.brok_amount);
  const [final_amount, setFinal_amount] = useState(data.final_amount);
  const onLoadingClick2 = useCallback(() => {
    Axios({
      // Endpoint to send files
      method: "get",
      url: "http://13.233.194.118:3004/pur_sale/pur_saleEntry",
      headers: {
        // Add any auth token here
        data_authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRGlvbmUiLCJwYXNzd29yZCI6IkRpb25lJjE2OSIsImlhdCI6MTY1NzUyMTc4NH0.8eV7s5OBV6RXWNeM3EKa5jIHrFu1JuJkw8jklVIOr0A",
      },
    })
      .then((data) => {
        // console.log(data.data.data);
        setdata(data.data.data);
        setTotal_carat(data.data.data.total_carat);
        setAmount(data.data.data.amount);
        setRemark(data.data.data.remark);
        setTax_per(data.data.data.tax_per);
        setTax_amount(data.data.data.tax_amount);
        setCurr_amount(data.data.data.curr_amount);
        setBroker_per(data.data.data.broker_per);
        setBrok_amount(data.data.data.brok_amount);
        setFinal_amount(data.data.data.final_amount);
      })
      .catch((error) => console.log(error));

    return false;
  }, []);
  useEffect(() => {
    onLoadingClick2();
  }, [onLoadingClick2]);
  return (
    <div className="grid col-12 card m-0 mt-3 p-0 py-2">
      <div className="grid col-4 ml-0 pl-0 algn">
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Date" className="input-label mr-2">
              Carat
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={total_carat}
              className="sm-input"
              onChange={(e) => setTotal_carat(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Purchase" className="input-label mr-2">
              Amount
            </label>
          </div>
          <div className="col-8 py-0 my-1">
            <InputText
              value={amount}
              className="sm-input"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 mkg pt-0 pr-0 p-d-flex">
          <div className="col-2 bkg">
            <label htmlFor="Party" className="input-label">
              Remark
            </label>
          </div>
          <div className="col-10 py-0 my-1">
            <InputTextarea
              rows={10}
              cols={30}
              value={remark}
              className="sm-input"
              onChange={(e) => setRemark(e.target.value)}
              autoResize
            />
          </div>
        </div>
      </div>

      <div className="grid col-4 ml-0 pl-0 algn">
        <div className="col-12 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Type" className="input-label mr-2">
              TAX%
            </label>
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={tax_per}
              className="sm-input"
              onChange={(e) => setTax_per(e.target.value)}
            />
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={tax_amount}
              className="sm-input"
              onChange={(e) => setTax_amount(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Adat" className="input-label mr-2">
              +/- Amt
            </label>
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={curr_amount}
              className="sm-input"
              onChange={(e) => setCurr_amount(e.target.value)}
            />
          </div>
          <div className="col-4 mkg py-0 pr-0 p-d-flex" />
        </div>
      </div>

      <div className="grid col-4 ml-0 pl-0 algn downbr">
        <div className="col-12 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Type" className="input-label mr-2">
              Broker Amt%
            </label>
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={broker_per}
              className="sm-input"
              onChange={(e) => setBroker_per(e.target.value)}
            />
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={brok_amount}
              className="sm-input"
              onChange={(e) => setBrok_amount(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 mkg py-0 pr-0 p-d-flex">
          <div className="col-4 p-0 bkg">
            <label htmlFor="Adat" className="input-label mr-2">
              Final Amount
            </label>
          </div>
          <div className="col-4 py-0 my-1">
            <InputText
              value={final_amount}
              className="sm-input"
              onChange={(e) => setFinal_amount(e.target.value)}
            />
          </div>
          <div className="col-4 mkg py-0 pr-0 p-d-flex" />
        </div>
      </div>
    </div>
  );
}
