import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            error: ""
        };
    }

    componentDidMount() {
        axios
            .get("/api/products")
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            });
    }
    // edit = (e) => {
    //     e.preventDefault();
    //     <Link to={`/form/${student.id}`} ></Link>
   //      <Link to={"/api/products/{this.state.products[0].id}}"></Link>
    // }


    render() {
        return (
            <>
                <ul>
                {this.state.products.map(prod => (
                       <li key={prod.id}>
                            
                            {console.log(prod)}
                            
                            <img src={prod.url} alt="" height="200" width="200"/>
                            <h2>{prod.name}  <br/> {prod.price}</h2>
                            
                            <button onClick={console.log("deleted")}>Delete</button>
                            
                           //<button onClick={this.edit}>Edit</button>

                           {/* <Link to={ "/api/products/{this.state.products[0].id}"}>
                           <button >Edit</button>
                            </Link> */}
                           
                        </li>
                ))}
                </ul>
            </>
        )
    }
}
export default Dashboard;
     
         