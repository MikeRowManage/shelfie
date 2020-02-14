import React, {Component} from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [{
        imgUrl: "a;lskdjf",
        name: "laskjdf",
        price: 9
      }]
    }
  }

componentDidMount = () => {
  axios.get('/api/inventory').then(res => this.setState({
    inventory: res.data
    })
  )}

  render() {
    return(
    <div>
      <Header />
      <Dashboard 
      inventory={this.state.inventory}
      getInventory={this.getInventory}
       />
      <Form getInventory={this.getInventory}/>
    </div>
    )}
}

export default App;
