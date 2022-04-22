import React, {Component} from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';



// const Props = props => (

//     {id} = useParams()
    
// )




class EditExercise extends React.Component {
    constructor(props){
        super(props);


        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
        
    }
    

    // const {id}: {id: string} = useParams()

    componentDidMount(){

        // axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        //     .then(res => {
        //         this.setState({
        //             usersname : res.data.username,
        //         description : res.data.description,
        //         duration : res.data.duration,
        //         date : Date(res.data.date)
        //         })
        //     })
        //     .catch(function(err){
        //         console.log(err)
        //     })
        

        axios.get('http://localhost:5000/users/')
        .then(res => {
            if(res.data.length > 0 ){
                this.setState({
                    users: res.data.map(user => user.username ),
                    // username: res.data[1].username
                })
            }
        })
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeDiscription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        console.log(exercise);
        
        
        // axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
        //     .then(res => console.log(res.data))

        // window.location = '/';    
        console.log(this.id) 
    }


    render(){
        return(
            <div className="Container mx-3 ">
                <Navbar />
    
                  <h3>Edit Exercise Log </h3>
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                          <label>Username: </label>
                          <select className="form-control"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          required
                          >
                              {
                                  this.state.users.map((user) => {
                                      return <option key={user}
                                      value={user}>
                                          {user}
                                      </option>
                                  })
                              }
                          </select>

                      </div> <br />
                      <div className="form-group">
                          <label> Description </label>
                          <input type="text" required className="form-control" 
                          value={this.state.description}
                          onChange={this.onChangeDiscription} />
                      </div> <br />

                      <div className="form-group">
                          <label> Duration in Min </label>
                          <input type="text" required className="form-control" 
                          value={this.state.duration}
                          onChange={this.onChangeDuration} />
                      </div> <br />
                      <div className="form-group">
                          <label> Date</label>

                          <div>
                              <DatePicker 
                              selected={this.state.date}
                              onChange={this.onChangeDate} />
                          </div> <br />

                          <div className="form-group">
                              <input type="submit"  value="Edit Exercise Log" className="btn btn-primary"/>
                          </div>
                      </div>
                  </form>
            </div>
        )
    }
}



export default EditExercise