import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_actions } from "../../redux/user_slice";
import { Country, State } from "country-state-city";
import Buttons from "../ui/Buttons";
export default function EditShippingAddress() {
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
  console.log(user);
  return (
    <section className="shipping">
      (
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={addressHandler}>
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter House No"
              ref={houseRef}
              defaultValue={user.address && user.address.house}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              ref={cityRef}
              defaultValue={user.address && user.address.city}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              ref={countryRef}
              defaultValue={user.address && user.address.coutry}
            >
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
            <select
              ref={stateRef}
              defaultValue={user.address && user.address.state}
            >
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
            <input
              type="number"
              placeholder="Enter Pincode"
              ref={pinRef}
              defaultValue={user.address && user.address.pin}
            />
          </div>
          <div>
            <label>phone No.</label>
            <input
              type="number"
              placeholder="Enter phone No"
              ref={phoneRef}
              defaultValue={user.phone}
            />
          </div>
          <Buttons
            type="submit"
            name="Confirm Address"
            size="sm"
            link="/confirmorder"
          />
        </form>
      </main>
      )
    </section>
  );
}
