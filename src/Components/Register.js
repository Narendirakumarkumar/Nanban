import React from "react";
import "./Register.css";
const Register = (props) => {
  console.log(props);
  const onsubmitHandle = () => {
    props.history.push("/volunteer");
  };
  return (
    <div>
      <form className="form-register">
        <h1>Be a Nanban to your community</h1>
        <h4>Be Safe and Help your people </h4>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlfor="txtMobNo">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtMobNo"
                  placeholder="9002003000"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlfor="ddlAge">Interested to</label>
                <select className="form-control" id="ddlAge">
                  <option>Contribute</option>
                  <option>Volunteer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlfor="ddlAge">
                  Do you suffer from any of the below health issues for the last
                  15 days?
                </label>
                <select className="form-control" id="ddlAge">
                  <option>fever</option>
                  <option>cough</option>
                  <option>cold</option>
                  <option>shortness of breath</option>
                  <option>tiredness</option>
                  <option>nothing</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlfor="ddlAge">
                  Did you had close relationship with the recently positive
                  coronna affected person?
                </label>
                <select className="form-control" id="ddlAge">
                  <option>Yes</option>
                  <option>No</option>
                  <option>Don't Know</option>
                </select>
              </div>
            </div>
          </div>
          <div className="dvButton">
            <input type="button" value="Send OTP" className="btn btn-primary" />
            <input
              type="button"
              value="Submit"
              onClick={onsubmitHandle}
              className="btn btn-dark"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
