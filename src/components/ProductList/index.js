import React, { Component } from "react";
import Product from "./../Product";
import PhoneList from "./PhoneList";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Phones: PhoneList,
    };
  }

  // renderPhone() {
  //   return this.state.Phones.map((phone) => {
  //     return <Product phone={phone} />;
  //   });
  // }

  render() {
    return (
      <div className=" pt-4 bg-dark text-light">
        <h1>Product</h1>
        <div className="d-flex justify-content-around">
          {this.state.Phones.map((phone) => (
          <Product phone={phone} />
        ))}
        </div>
        
      </div>
    );
  }
}
