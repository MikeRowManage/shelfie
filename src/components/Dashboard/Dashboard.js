import React from 'react'
import Product from '../Product/Product'

function Dashboard(props) {

        const products = props.inventory.map(element => {
            return <Product inventory={props.inventory}/>
        })
    return (
        
        <div style={{ height: "100px", width: "200px"}}>
            {products}
        </div>
    )
}

export default Dashboard