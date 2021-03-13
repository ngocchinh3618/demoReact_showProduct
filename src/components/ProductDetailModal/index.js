import React, { Component } from "react";

export default class index extends Component {
  render() {
    let phone = this.props.phone;
    return (
      <div className="text-dark">
        {/* Button trigger modal */}

        {/* Modal */}
        <div
          className="modal fade"
          id={phone.name}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={phone.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{phone.name}</h5>
                        <p className="card-text">
                          <p>{phone.price}</p>
                          <p>{phone.guarantee}</p>
                          <p>{phone.system}</p>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
