import SuccessMessage from "./SuccessMessage";
import checkbox from "../assets/images/icon-checkbox-check.svg"
import radiobtn from "../assets/images/icon-radio-selected.svg"
import { useState } from "react";

function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
}

export default function ContactForm() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    qtype: "",
    message: "",
    consent: false,
  });

  const [messages, setMessages] = useState({
    fname: "",
    lname: "",
    email: "",
    qtype: "",
    message: "",
    consent: "",
  })

  const [successMessage, setSuccessMessage] = useState(false)

  function sumbitForm(): void {
    let tmpMessages = {
      fname: "",
      lname: "",
      email: "",
      qtype: "",
      message: "",
      consent: "",
    }
    tmpMessages.fname = data.fname? "" : "This field is required"
    tmpMessages.lname = data.lname? "" : "This field is required"
    
    if (data.email) {
      tmpMessages.email = validateEmail(data.email)? "" : "Please enter a vaild email address"
    } else {
      tmpMessages.email = "This field is required"
    }
    tmpMessages.qtype = data.qtype? "" : "Please select a query type"
    tmpMessages.message = data.message? "" : "This field is required"
    tmpMessages.consent = data.consent? "" : "To submit this form, please consent to being contacted"

    let tmpSuccessMessage = true
    for (const value of Object.values(tmpMessages)) {
      if (value) {
        tmpSuccessMessage = false
      }
    }
    setSuccessMessage(tmpSuccessMessage)
    setTimeout(() => {setSuccessMessage(false)}, 10000)

    setMessages(tmpMessages)
  }

  return (
    <div className="contact-form container p-4 rounded-4">
      <h2>Contact Us</h2>

      <div className="fullname d-sm-flex gap-3">
        <div className="fname w-100">
          <label htmlFor="fname" className="required">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={data.fname}
            className={`${messages.fname && "error"}`}
            onChange={(e) => {
              setData((pendingData) => ({
                ...pendingData,
                fname: e.target.value,
              }));
            }}
          />
          <p className="error">{messages.fname}</p>
        </div>
        <div className="lname w-100">
          <label htmlFor="lname" className="required">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={data.lname}
            className={`${messages.lname && "error"}`}
            onChange={(e) => {
              setData((pendingData) => ({
                ...pendingData,
                lname: e.target.value,
              }));
            }}
          />
          <p className="error">{messages.lname}</p>
        </div>
      </div>

      <div className="email">
        <label htmlFor="email" className="required">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          className={`${messages.email && "error"}`}
          onChange={(e) => {
            setData((pendingData) => ({
              ...pendingData,
              email: e.target.value,
            }));
          }}
        />
        <p className="error">{messages.email}</p>
      </div>

      <div className="query-type">
        <label htmlFor="query_type" className="required">Query Type</label>
        <div className="d-sm-flex gap-3">
          <div className="radio-btn w-100 my-1 d-flex">
            <div className="radio-select">
              { data.qtype == "General Enquiry" && <img src={radiobtn} alt="radio-btn" className="radio-icon" /> }
            </div>
            <input
                type="radio"
                name="query_type"
                id="general_query"
                value="General Enquiry"
                className="me-1 align-middle"
                onChange={(e) => {
                  setData((pendingData) => ({
                    ...pendingData,
                    qtype: e.target.value,
                  }));
                }}
              />
            <label htmlFor="general_query">General Enquiry</label>
          </div>
          <div className="radio-btn w-100 my-1 d-flex">
            <div className="radio-select">
              { data.qtype == "Support Request" && <img src={radiobtn} alt="radio-btn" className="radio-icon" /> }
            </div>
            <input
                type="radio"
                name="query_type"
                id="support_query"
                value="Support Request"
                className="me-1 align-middle"
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
        <p className="error">{messages.qtype}</p>
      </div>

      <div className="message">
        <label htmlFor="message" className="required">Message</label>
        <textarea
          name="message"
          id="message"
          className={`${messages.message && "error"}`}
          onChange={(e) => {
            setData((pendingData) => ({
              ...pendingData,
              message: e.target.value,
            }));
          }}
        ></textarea>
        <p className="error">{messages.message}</p>
      </div>

      <div className="consent d-flex d-sm-block">
        <div className="checkmark d-inline-block">
          { data.consent && <img src={checkbox} alt="checked" className="checkbox" />}
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={data.consent}
            className="me-1"
            onChange={() => {
              setData((pendingData) => ({
                ...pendingData,
                consent: !pendingData.consent,
              }));
            }}
          />
        </div>
        <label htmlFor="consent" className="required ms-4 consent-label">
          I consent to being contacted by the team
        </label>
      </div>
      <p className="error">{messages.consent}</p>

      <button className="btn w-100" onClick={sumbitForm} disabled={successMessage}>Submit</button>

      <SuccessMessage show={successMessage}/>
    </div>
  );
}
