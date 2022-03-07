import React, { useEffect, useState } from "react";
import { validateInput } from "./form-validation";
import { v4 as uuidv4 } from "uuid";

export const AddressForm = ({ setAddresses, showForm }) => {
  const defaultAddress = {
    label: "",
    addresseeName: "",
    phoneNumber: "",
    pincode: "",
    fullAddress: "",
    city: "",
    state: ""
  }
  const [newAddress, setNewAddress] = useState({
    ...defaultAddress
  });

  const currAddress = newAddress;
  const [isInputValid, setIsInputValid] = useState({
    phoneNumber: {
      isValid: true,
      msg: ""
    },
    pincode: {
      isValid: true,
      msg: ""
    }
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let flag = true;
    Object.entries(isInputValid).forEach((i) => {
      console.log("value of i",i);
      if (!i[1].isValid) flag = false;
    });
    setIsFormValid(flag);
  }, [isInputValid]);

  useEffect(() => {
    const inputValidations = {};
    inputValidations.phoneNumber = validateInput(
      "phoneNumber",
      newAddress.phoneNumber
    );
    inputValidations.pincode = validateInput("pincode", newAddress.pincode);
    setIsInputValid(inputValidations);
  }, [newAddress]);

  const changeHandler = (e) => {
    const inputText = e.target.value;
    const inputName = e.target.name;
    setNewAddress((curr) => ({ ...curr, [inputName]: inputText }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAddresses((curr) => [...curr, { ...newAddress, id: uuidv4() }]);
    setNewAddress(defaultAddress);
  };

  const hideFormStyles = {
    height:"0",
    overflow:"hidden",
    transition:"all ease 0.3s"
  }

  const showFormStyles = {
    height:"600px",
    transition:"all ease 0.3s"
  }

  return (
    <div
      className="form-wrapper w-100"
      style={showForm ? showFormStyles : hideFormStyles }
    >
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-70 flex-col pd-md bs-lighter"
        style={{display: showForm ? "flex" : "none"}}
      >
        <h2>Add a New Address </h2>
        <div className="tr-input-group">
          <input
            required
            value={newAddress.addresseeName}
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="text"
            name="addresseeName"
            placeholder="Name"
          />
        </div>
        <div
          className={`tr-input-group ${
            isInputValid.phoneNumber.isValid ? "" : "input-error"
          }`}
        >
          <input
            required
            value={newAddress.phoneNumber}
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
          />
          {isInputValid.phoneNumber.isValid || (
            <div class="input-validation">
              <i class="far fa-check-circle"></i>
              <small>{isInputValid.phoneNumber.msg}</small>
            </div>
          )}
        </div>
        <div
          className={`tr-input-group ${
            isInputValid.pincode.isValid ? "" : "input-error"
          }`}
        >
          <input
            required
            value={newAddress.pincode}
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="text"
            name="pincode"
            placeholder="Pincode"
          />
          {isInputValid.pincode.isValid || (
            <div class="input-validation">
              <i class="far fa-check-circle"></i>
              <small>{isInputValid.pincode.msg}</small>
            </div>
          )}
        </div>
        <div className="tr-input-group">
          <textarea
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="text"
            name="fullAddress"
            placeholder="Full Address"
            rows="3"
            value={newAddress.fullAddress}
            required
          />
        </div>
        <div className="tr-input-group">
          <input
            required
            value={newAddress.city}
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="text"
            name="city"
            placeholder="City"
          />
        </div>
        <div className="tr-input-group">
          <input
            required
            value={newAddress.state}
            onChange={(e) => changeHandler(e)}
            className="tr-input-item"
            type="text"
            name="state"
            placeholder="State"
          />
        </div>

        <div className="d-flex gap-sm">
          <div className="d-flex align-i-center">
            <label htmlFor="labelHome">Home</label>
            <input
              required
              onChange={(e) => changeHandler(e)}
              id="labelHome"
              className="tr-input-radio"
              type="radio"
              name="label"
              value="home"
            />
          </div>
          <div className="d-flex align-i-center">
            <label htmlFor="labelWork">Work</label>
            <input
              required
              onChange={(e) => changeHandler(e)}
              id="labelWork"
              className="tr-input-radio"
              type="radio"
              name="label"
              value="work"
            />
          </div>
        </div>
        <div className="d-flex gap-sm">
          <button
            className={`tr-btn ${isFormValid && "tr-btn-primary"}`}
            type="submit"
            disabled={isFormValid ? false : true}
            style={{ cursor: isFormValid ? "unset" : "not-allowed" }}
          >
            Add
          </button>
          <button type="reset" className="tr-btn tr-btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
