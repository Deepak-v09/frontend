import React, { useRef, useState } from "react";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { user_actions } from "../../redux/user_slice";
import { Link } from "react-router-dom";
function Shipping() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_slice.user);
  const houseRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const stateRef = useRef();
  const pinRef = useRef();
  const phoneRef = useRef();
  function addressHandler(event) {
    event.preventDefault();
    const userInfo = {
      address: {
        house: houseRef.current.value,
        city: cityRef.current.value,
        coutry: countryRef.current.value,
        state: stateRef.current.value,
        pin: pinRef.current.value,
      },
      phone: phoneRef.current.value,
    };
    dispatch(user_actions.AddUserInfo(userInfo));
  }
  if (user.address) {
    console.log(user);
    return (
      <>
        <h1>{user.address.house}</h1>
        <Link to="/confirmorder">
          <button>Proceed With Address</button>
        </Link>
        <Link to="/edit-address">
          <button>Edit Address</button>
        </Link>
        <button>Add Address</button>
      </>
    );
  }
  return (
    <section className="shipping">
      (
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={addressHandler}>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No" ref={houseRef} />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" ref={cityRef} />
          </div>
          <div>
            <label>Country</label>
            <select ref={countryRef}>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select ref={stateRef}>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" ref={pinRef} />
          </div>
          <div>
            <label>phone No.</label>
            <input type="number" placeholder="Enter phone No" ref={phoneRef} />
          </div>
          <button type="submit">Confirm Address</button>
        </form>
      </main>
      )
    </section>
  );
}

export default Shipping;
