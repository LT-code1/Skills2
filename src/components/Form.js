import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     id: 0,                 
        //     name: "",
        //     price: 0,
        //     url: ""
        // };
        this.state={          ////this way is stupid.......
        products:[]
        }
    }

    componentDidMount() {
        
        return axios
        .get(`http://localhost:3000/api/products/${this.props.match.params.id}`)
            .then(res => {this.setState({products : res.data })
                console.log(res.data)
                console.log(this.state.products)
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            });
    }
  






    handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
    e.preventDefault();
    axios.post("/api/products/",this.state).then(res => {     /////this adds to database
                                               // console.log(res.data); //array of objects
                                               // this.props.updateOrders(res.data);
                                                 })
          };

    render() {
        return (
            <>
            <img src={this.state.url} alt="" height="200" width="200"/>
            <form className="form" >
                <input
                  name="name"
                  placeholder={this.state.name}
                  onChange={this.handleChange}
                  value={this.state.cust}
                />
                <input
                  name="price"
                  placeholder={this.state.price}
                  onChange={this.handleChange}
                  value={this.state.item}
                />
                <input
                  name="url"
                  placeholder={this.state.url}
                  onChange={this.handleChange}
                  value={this.state.weight}
                />

              <button type="submit" onClick={this.handleClick}>Add To Inventory</button>
              </form>
            </>
        )
    }
}
export default Form;



