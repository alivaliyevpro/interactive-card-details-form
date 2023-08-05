import { useState } from "react";
import logo from "./images/card-logo.svg";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("000");

  let temp = cardNumber
    .slice(0, 4)
    .concat(" ", cardNumber.slice(4, 8))
    .concat(" ", cardNumber.slice(8, 12))
    .concat(" ", cardNumber.slice(12));

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCardNumber = e => {
    e.preventDefault();
    // if (cardNumber.split("").length < 16) {}
    setCardNumber(e.target.value);
  };

  const handleMonth = e => {
    e.preventDefault();
    setMonth(e.target.value);
  };

  const handleYear = e => {
    e.preventDefault();
    setYear(e.target.value);
  };

  const handleCvc = e => {
    e.preventDefault();
    setCvc(e.target.value);
  };
  
  const handleConfirm = e => {
    e.preventDefault();

    // code goes here
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
            <span className="cvc">{cvc}</span>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="form">
          <div className="wrapper">
            <label>CARDHOLDER NAME</label>
            <input
              onChange={handleName}
              maxlength="22"
              value={name}
              className="input-long"
              type="text"
              placeholder="e.g. Jane Appleseed"
              required
            />
            <span>Can't be blank</span>
          </div>

          <div className="wrapper">
            <label>CARD NUMBER</label>
            <input
              onChange={handleCardNumber}
              value={cardNumber}
              maxlength="16"
              className="input-long"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              required
            />
            <span>Wrong format, numbers only</span>
          </div>

          <div className="form-flex">
            <div className="wrapper wrap">
              <label>EXP. DATE (MM/YY)</label>
              <div className="input-flex">
                <input
                  onChange={handleMonth}
                  maxLength="2"
                  className="input-date"
                  placeholder="MM"
                  required
                />
                <input
                  onChange={handleYear}
                  maxlength="2"
                  className="input-date"
                  type="text"
                  placeholder="YY"
                  required
                />
              </div>
              <span>Can't be blank</span>
            </div>

            <div className="wrapper">
              <label>CVC</label>
              <input
                onChange={handleCvc}
                type="text"
                maxLength="3"
                placeholder="e.g. 123"
                required
              />
              <span>Can't be blank</span>
            </div>
          </div>

          <button
            className="submit"
            onClick={handleConfirm}>
            Confirm
          </button>
        </div>

        {/* <div>Thank you</div> */}
      </div>
    </div>
  );
}

export default App;
