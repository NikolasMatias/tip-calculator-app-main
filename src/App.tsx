import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import TipsDefault from "./helpers/TipsDefault";

function App() {
    const [bill, setBill] = useState<number>(0);
    const [tip, setTip] = useState<number>(0);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(0);
    const [tipPerPerson, setTipPerPerson] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        if (bill != 0 && numberOfPeople != 0 && tip != 0) {
            setTipPerPerson(bill*(tip/100)/numberOfPeople);
            setTotal(bill/numberOfPeople+bill*(tip/100)/numberOfPeople);
        }
    }, [bill, tip, numberOfPeople]);

    const clearCalculator = () => {
        setBill(0);
        setTip(0);
        setNumberOfPeople(0);
    }

  return (
    <div className="tip-calculator">
      <div className="container">
        <div className="title">
          <img src={logo} className="title-logo" alt="Website logo"/>
        </div>
        <div className="content">
            <div className="bill">
              <label htmlFor="bill" className="label-bill">Bill</label>
              <input type="text" name="bill" id="bill" className={(bill != 0 || numberOfPeople != 0 || tip != 0) && bill != 0 ? 'success' : 'error'} value={bill != 0 ? bill.toFixed(2) : '0'} onChange={(e) => {setBill(e.target.value.length > 0 && /^\d*\.?\d*$/.test(e.target.value) ? parseFloat(e.target.value) : 0)}}/>
            </div>
            <div className="tip">
                <label>Select Tip %</label>
              {TipsDefault.map((tipDefault, index, array) => (
                  <button key={index} type="button" className={tip == tipDefault.value ? 'btn-tip clicked' : 'btn-tip'} onClick={() => setTip(tipDefault.value)}>{`${tipDefault.value}%`}</button>
              ))}
              <input type="text" name="tip-custom" placeholder="Custom" className={(bill != 0 || numberOfPeople != 0 || tip != 0) && tip != 0 ? 'input-tip-custom success' : 'input-tip-custom error'} onChange={(e) => setTip(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)}/>
            </div>
            <div className="number-of-people">
              <label htmlFor="number-of-people" className="label-number-of-people">Number of People</label>
              <input type="text" name="number-of-people" id="number-of-people" className={(bill != 0 || numberOfPeople != 0 || tip != 0) && numberOfPeople != 0 ? 'success' : 'error'}
                     value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)}/>
            </div>
            <div className="results">
              <div className="results-values">
                  <div className="tip-per-person">
                      <div className="title-tip-per-person">
                          <h3>Tip Amount</h3>
                      </div>
                      <p className="value-tip-per-person">${bill != 0 && numberOfPeople != 0 && tip != 0 ? tipPerPerson.toFixed(2) : '0.00'}</p>
                  </div>
                  <div className="total-per-person">
                      <div className="title-total-per-person">
                          <h3>Total</h3>
                      </div>
                      <p className="value-total-per-person">${bill != 0 && numberOfPeople != 0 && tip != 0 ? total.toFixed(2) : '0.00'}</p>
                  </div>
              </div>
                <button className={bill == 0 && numberOfPeople == 0 && tip == 0 ? 'results-reset desactive' : 'results-reset'} onClick={clearCalculator}>RESET</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
