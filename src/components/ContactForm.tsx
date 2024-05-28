import SuccessMessage from "./SuccessMessage";
import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    qtype: "",
    message: "",
    consent: false,
  });

  return (
    <div className="contact-form container p-4 rounded-4 my-5">
      <h2>Contact Us</h2>

      <div className="fullname d-sm-flex gap-3">
        <div className="fname">
          <label htmlFor="fname" className="required">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={data.fname}
            onChange={(e) => {
              setData((pendingData) => ({
                ...pendingData,
                fname: e.target.value,
              }));
            }}
          />
          This field is required
        </div>
        <div className="lname">
          <label htmlFor="lname" className="required">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={data.lname}
            onChange={(e) => {
              setData((pendingData) => ({
                ...pendingData,
                lname: e.target.value,
              }));
            }}
          />
          This field is required
        </div>
      </div>

      <div className="email">
        <label htmlFor="email" className="required">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={(e) => {
            setData((pendingData) => ({
              ...pendingData,
              email: e.target.value,
            }));
          }}
        />
        Please enter a valid email address This field is required
      </div>

      <div className="query-type">
        <label htmlFor="query_type" className="required">Query Type</label>
        <div className="d-sm-flex gap-3">
          <div className="radio-btn w-100 border border-dark p-2 my-1">
            <input
              type="radio"
              name="query_type"
              id="general_query"
              value="General Enquiry"
              onChange={(e) => {
                setData((pendingData) => ({
                  ...pendingData,
                  qtype: e.target.value,
                }));
              }}
            />
            <label htmlFor="general_query">General Enquiry</label>
          </div>
          <div className="radio-btn w-100 border border-dark p-2 my-1">
            <input
              type="radio"
              name="query_type"
              id="support_query"
              value="Support Request"
              onChange={(e) => {
                setData((pendingData) => ({
                  ...pendingData,
                  qtype: e.target.value,
                }));
              }}
            />
            <label htmlFor="support_query">Support Request</label>
          </div>
        </div>
        Please select a query type
      </div>

      <div className="message">
        <label htmlFor="message" className="required">Message</label>
        <textarea
          className="w-100"
          name="message"
          id="message"
          onChange={(e) => {
            setData((pendingData) => ({
              ...pendingData,
              message: e.target.value,
            }));
          }}
        ></textarea>
        This field is required
      </div>

      <div className="consent">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={data.consent}
          onChange={() => {
            setData((pendingData) => ({
              ...pendingData,
              consent: !pendingData.consent,
            }));
          }}
        />
        <label htmlFor="consent" className="required">
          I consent to being contacted by the team
        </label>
        To submit this form, please consent to being contacted
      </div>

      <button className="btn w-100">Submit</button>

      {false && <SuccessMessage />}
    </div>
  );
}
