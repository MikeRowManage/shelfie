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
      .then(() => this.props.getInventory()
        .then(() => this.clearInputs()))
      .catch(err => console.log(err));
  };

  clearInputs = event => {
    this.setState({
      imgUrl: "",
      name: "",
      price: 0
    });
  };

  render() {
    return (
      <div>
        <img 
        value={this.state.imgUrl} 
        alt="" 
        style={{ height: "200px", width: "300px", backgroundSize: "cover"}}
        />
        <section>
          <div>
            <label>Image URL:</label>
            <input 
            type="url"
            onChange={this.addImage}
            />
            <label>Product Name:</label>
            <input
            value={this.state.name}
            type="text"
            onChange={this.addName}
             />
            <label>Price:</label>
            <input 
            value={this.state.price}
            type="number"
            onChange={this.addPrice}
            />
            <span>
              <button onClick={this.clearInputs}>Cancel</button>
              <button onClick={this.addToInventory}>Add to Inventory</button>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
