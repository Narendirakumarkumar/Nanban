import React from "react";

const Contributor = (props) => {
  console.log(props);
  return (
    <form className="form-volunteer">
      <h1 className="volunteer-header">
        Be a Contributor and save others life
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlfor="txtFullName">Full Name</label>
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
              <label htmlfor="txtEmail">Email</label>
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
              <label htmlfor="ddlAge">Age</label>
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
              <label htmlfor="txtAddress">Address</label>
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
              <label htmlfor="txtLandmark">Landmark</label>
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
              <label htmlfor="ddlServiceType">
                What you want to contribute to the needy
              </label>
              <select className="form-control" id="ddlServiceType">
                <option>Food</option>
                <option>Grocery</option>
                <option>Face Mask</option>
                <option>Gloves</option>
                <option>Medicines</option>
                <option>Spices</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlfor="txtItems">
                Please type the items that you want to contribute
              </label>
              <textarea
                className="form-control"
                id="txtItems"
                rows="6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Contributor;
