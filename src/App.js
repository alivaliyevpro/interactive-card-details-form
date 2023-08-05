import { useState } from "react";
import logo from "./images/card-logo.svg";
import icon from "./images/icon-complete.svg";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [noName, setNoName] = useState(null);
  const [noNumber, setNoNumber] = useState(null);
  const [noMonth, setNoMonth] = useState(null);
  const [noYear, setNoYear] = useState(null);
  const [noCvc, setNoCvc] = useState(null);

  const [isConfirmed, setIsConfirmed] = useState(false);

  let temp = cardNumber
    .slice(0, 4)
    .concat(" ", cardNumber.slice(4, 8))
    .concat(" ", cardNumber.slice(8, 12))
    .concat(" ", cardNumber.slice(12));

  const handleConfirm = e => {
    if (!name || name.length < 3 || !/^[A-Za-z]( ?[A-Za-z] ?)*$/g.test(name)) {
      setNoName(true);
    } else {
      setNoName(false);
    }

    if (!cardNumber || cardNumber.length !== 16) {
      setNoNumber(true);
    } else if (isNaN(cardNumber)) {
      setNoNumber(true);
    } else if (/\s/.test(cardNumber)) {
      setNoNumber(true);
    } else {
      setNoNumber(false);
    }

    if (!month || !year || isNaN(month) || isNaN(year)) {
      setNoMonth(true);
      setNoYear(true);
    } else if (Number(month) > 12 || Number(month) < 1) {
      setNoMonth(true);
    } else if (Number(year) < 1) {
      setNoYear(true);
    } else {
      setNoMonth(false);
      setNoYear(false);
    }

    if (!cvc || cvc.length < 3 || isNaN(cvc) || cvc.includes(" ")) {
      setNoCvc(true);
    } else {
      setNoCvc(false);
    }

    if (
      noName === false &&
      noNumber === false &&
      noMonth === false &&
      noYear === false &&
      noCvc === false
    ) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="cards-container">
          <div className="card front">
            <div className="card-info">
              <img
                src={logo}
                alt="logo"
                className="logo"
              />
              <div className="numbers">
                {" "}
                {cardNumber ? temp : "0000 0000 0000 0000"}{" "}
              </div>
              <div className="card-footer">
                <p className="name">
                  {name ? name.toUpperCase() : "JANE APPLESEED"}{" "}
                </p>
                <span className="exp-date">{`${month > 0 ? month : "00"}/${
                  year > 0 ? year : "00"
                }`}</span>
              </div>
            </div>
          </div>
          <div className="card back">
            <span className="cvc">{cvc ? cvc : "000"}</span>
          </div>
        </div>

        <div className={isConfirmed ? "form-hide" : "form-visible"}>
          <div className="wrapper">
            <label>CARDHOLDER NAME</label>
            <input
              onChange={e => setName(e.target.value)}
              maxLength="22"
              value={name}
              id={noName ? "name" : ""}
              type="text"
              placeholder="e.g. Jane Appleseed"
            />

            <span className="alert">
              {noName ? "Please enter your name properly" : ""}
            </span>
          </div>

          <div className="wrapper">
            <label>CARD NUMBER</label>
            <input
              onChange={e => setCardNumber(e.target.value)}
              value={cardNumber}
              maxLength="16"
              id={noNumber ? "number" : ""}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span className="alert">
              {noNumber ? "Please enter 16-digits of your card number" : ""}
            </span>
          </div>

          <div className="form-flex">
            <div className="wrapper wrap">
              <label>EXP. DATE (MM/YY)</label>
              <div className="input-flex">
                <input
                  onChange={e => setMonth(e.target.value)}
                  maxLength="2"
                  className="input-date"
                  id={noMonth ? "month" : ""}
                  type="text"
                  placeholder="MM"
                />
                <input
                  onChange={e => setYear(e.target.value)}
                  maxLength="2"
                  className="input-date"
                  id={noYear ? "year" : ""}
                  type="text"
                  placeholder="YY"
                />
              </div>
              <span className="alert">
                {noMonth || noYear ? "Invalid date" : ""}
              </span>{" "}
            </div>

            <div className="wrapper">
              <label>CVC</label>
              <input
                onChange={e => setCvc(e.target.value)}
                type="text"
                maxLength="3"
                id={noCvc ? "cvc" : ""}
                placeholder="e.g. 123"
              />
              <span className="alert">{noCvc ? "Invalid format" : ""}</span>
            </div>
          </div>

          <button
            className="submit"
            onClick={handleConfirm}>
            Confirm
          </button>
        </div>

        <div className={isConfirmed ? "confirm-visible" : "confirm-hide"}>
          <img
            className="icon"
            src={icon}
            alt="icon"
          />
          <h2 className="thank-text">THANK YOU</h2>
          <p className="text">We've added your card details</p>
          <button className="continue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
