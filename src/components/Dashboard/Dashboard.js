import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

        deleteProduct = id => {
            axios.delete(`/api/product/${id}`)
            .then(this.props.getInventory())
        }

    render(){
        const products = this.props.inventory.map(element => {
            return <Product key={this.props.inventory.id} inventory={this.props.inventory}
            deleteProduct={this.deleteProduct}/>
        })
    return (
        
        <div >
            {products}
        </div>
    )
    }
}

export default Dashboard