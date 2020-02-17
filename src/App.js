import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get("/api/inventory").then(res =>
      this.setState({
        inventory: res.data
      })
    );
  };

  render() {
    return (
      <div key={this.state.inventory.id}>
        <Header />
        <Dashboard
          key={this.state.inventory.id}
          inventory={this.state.inventory}
          getInventory={this.getInventory}
        />
        <Form key={this.state.inventory.id} getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
