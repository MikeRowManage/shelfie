import React, {Component} from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  render() {
    return(
    <div>
      App
      <Dashboard />
      <Form />
      <Header />
    </div>
    )}
}

export default App;
