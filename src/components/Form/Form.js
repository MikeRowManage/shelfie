import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

            this.state = {
                name: "",
                price: 0,
                imgurl: ""
            }
    }

    render(){
        return (
            <div>Form</div>
        )
    }
}

export default Form