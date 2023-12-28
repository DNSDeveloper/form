import React, { ChangeEvent, FocusEvent, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Enquiry from "./Enquiry";
import Form from "./Form";

function App() {
  const [choice, setChoice] = useState(true);
  const selectedChoice = () => {
    setChoice(!choice);
  };
  return (
    <div className="App">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                id="bukan-kecelakaan"
                type="radio"
                onClick={selectedChoice}
                checked={choice}
              />
              <label className="form-check-label" htmlFor="bukan-kecelakaan">
                FORM
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                id="bukan-kecelakaan"
                type="radio"
                onClick={selectedChoice}
                checked={!choice}
              />
              <label className="form-check-label" htmlFor="bukan-kecelakaan">
                ENQUIRY
              </label>
            </div>
          </div>
        </div>
      </div>
      {choice === true ? <Form /> : <Enquiry />}
    </div>
  );
}

export default App;
