import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: "",
      name: "",
      price: 0
    };

    this.addPrice = this.addPrice.bind(this);
  }

  addImage = event => {
    this.setState({
      imgUrl: event.target.value
    });
  };
  addName = event => {
    this.setState({
      name: event.target.value
    });
  };
  addPrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  addToInventory = () => {
    const { imgUrl, name, price } = this.state;
    axios
      .post("/api/product", { newImg: imgUrl, newName: name, newPrice: price })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err));
  };

  clearInputs = event => {
    this.setState({
      imgUrl: null,
      name: null,
      price: null
    });
  };

  render() {
    return (
      <div>
        <img alt="" />
        <section>
          <div>
            <label>Image URL:</label>
            <input 
            value={this.state.imgUrl}
            type="url"
            onChange={this.addImage}
            />
            <label>Product Name:</label>
            <input
            value={this.state.name}
            type="url"
            onChange={this.addName}
             />
            <label>Price:</label>
            <input 
            value={this.state.price}
            type="url"
            onChange={this.addPrice}
            />
            <span>
              <button onClick={this.clearInputs}>Cancel</button>
              <button>Add to Inventory</button>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
