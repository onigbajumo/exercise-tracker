import React, {Component} from "react";
import "../index.css";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"




class CreateUser extends React.Component {


    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)


        this.state = {
            username:"Users",
        }

    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }


    handleSubmit(e){
        e.preventDefault();

        const user = {
            username : this.state.username,
         }

        console.log(user);
axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data))

        this.setState({
            username : ""
        })
    }




    render(){
        
    return(
        <div >
        <Navbar />
        <h3> Create New User</h3>   
        <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label >Username</label>
                <input type="text" value={this.state.username} onChange={this.onChangeUsername} required className="form-control"  />
                
            </div>
            <br />

            <div className="form-group">
                <input type="submit"  value="Create User" className="btn btn-primary" />

            </div>
        </form>

        </div>
    )
}
    }

export default CreateUser