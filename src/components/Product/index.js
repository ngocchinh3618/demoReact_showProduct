import React, { Component } from "react";
import ProductDetailModal from "./../ProductDetailModal";

export default class Product extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    console.log("this: ", this);

    let { phone } = this.props;

    return (
      <div>
        
        <div className=" text-dark">
          <div className="card" style={{ width: "18rem" }}>
            <div className="mt-3" style={{ height: "150px" }}>
              <img
                className="card-img-top w-50 m-auto"
                src={phone.img}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.phone.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className="btn btn-primary "
                data-toggle="modal"
                data-target={"#"+phone.name}
              >
                Detail
              </button>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <ProductDetailModal phone={phone} />
      </div>
    );
  }
}
