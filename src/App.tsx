import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import TipsDefault from "./helpers/TipsDefault";

function App() {
    const [bill, setBill] = useState<number>(0);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  return (
    <div className="tip-calculator">
      <div className="container">
        <div className="title">
          <img src={logo} className="title-logo" alt="Website logo"/>
        </div>
        <div className="content">
            <div className="bill">
              <label htmlFor="bill" className="label-bill">Bill</label>
              <input type="text" name="bill" id="bill" value={bill} onChange={(e) => {setBill(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)}}/>
            </div>
            <div className="tip">
                <label>Select Tip %</label>
              {TipsDefault.map((tip, index, array) => (
                  <button key={index} type="button" className="btn-tip">{`${tip.value}%`}</button>
              ))}
              <input type="text" name="tip-custom" placeholder="Custom" className="input-tip-custom"/>
            </div>
            <div className="number-of-people">
              <label htmlFor="number-of-people" className="label-number-of-people">Number of People</label>
              <input type="text" name="number-of-people" id="number-of-people" value={numberOfPeople} onChange={(e) => {setNumberOfPeople(e.target.value.length > 0 ? parseFloat(e.target.value) : 0)}}/>
            </div>
            <div className="results">
              <div className="results-values">
                  <div className="tip-per-person">
                      <div className="title-tip-per-person">
                          <h3>Tip Amount</h3>
                      </div>
                      <p className="value-tip-per-person">$4.27</p>
                  </div>
                  <div className="total-per-person">
                      <div className="title-total-per-person">
                          <h3>Total</h3>
                      </div>
                      <p className="value-total-per-person">$32.79</p>
                  </div>
              </div>
                <button className="results-reset">RESET</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
