import React from "react";
import "./Volunteer.css";
const Volunteer = () => {
  return (
    <form className="form-volunteer">
      <h1 className="volunteer-header">Be a Volunteer and serve your people</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="txtFullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="txtFullName"
                placeholder="Anandakrishnan Murugesan"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="txtEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="txtEmail"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="ddlAge">Age</label>
              <select className="form-control" id="ddlAge">
                <option>19-28</option>
                <option>29-36</option>
                <option>37-44</option>
                <option>45-50</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="txtAddress">Address</label>
              <textarea
                className="form-control"
                id="txtAddress"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="txtLandmark">Landmark</label>
              <input
                type="text"
                className="form-control"
                id="txtLandmark"
                placeholder="Near Ponmani Maaligai"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="ddlServiceType">Interested Service Type</label>
              <select className="form-control" id="ddlServiceType">
                <option>People Safety</option>
                <option>Road Safety</option>
                <option>Grocery Delivey</option>
                <option>Food Delivery</option>
                <option>Food,Grocery and Medicine Collection</option>
                <option>Collect Funds</option>
                <option>Medical Equipment Collection</option>
                <option>Customer Care Support</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="chkVehicle">
                Do you have your own vehicle?
                <span className="spnYes">Yes</span>
                <input
                  type="radio"
                  className="form-control"
                  id="chkVehicleYes"
                  value="Yes"
                  name="chkVehicleGroup"
                />
                <span className="spnNo">No</span>
                <input
                  type="radio"
                  className="form-control"
                  id="chkVehicleNo"
                  value="No"
                  name="chkVehicleGroup"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="dvButton">
          <input type="button" value="Submit" className="btn btn-primary" />
          <input type="button" value="Cancel" className="btn btn-danger" />
        </div>
      </div>
    </form>
  );
};

export default Volunteer;
