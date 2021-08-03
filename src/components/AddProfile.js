import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from '../context';
const uniqid=require('uniqid');

const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{display:"block"},
        transition:{duration:1000}
            },
    hidden:{
        opacity:0,
        applyAtEnd:{display:"none"},
        transition:{
            type:'spring',
            stifness:100
        }
    }
})

class AddProfile extends Component {
    state={
        visible:true,
        name:"",
        username:"",
        followers:0,
        following:0,
        messages:0
    }
   
    toggleForm=()=>{
        console.log("tıklandı")
        console.log(this.state.visible)
        this.setState({
            visible:!this.state.visible
        })
    }
    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addUser=(dispatch,e)=>{
        e.preventDefault()
        const {name,username}=this.state;
        const newUser={
            id:uniqid(),
            username, //JS avantajı
            name,
            followers:0,
            following:0,
            messages:0
        }
        dispatch({type:"ADD_USER",payload:newUser})
    }
    render() {
        const {visible,name,username}=this.state;
        return(
            <UserConsumer>
                {
                    value=>{
                        const {dispatch}=value;
                        return(
                            <div className="mt-3 p-3 parent">
                                            <button onClick={this.toggleForm} className="btn btn-custom btn-block">{visible?"Hide Form":"Show Form"}</button>
                                            <Animation pose={visible?"visible":"hidden"}>
                                            <div className="card add-card">
                                            <div className="card-header text-center">
                                                <h4>ADD FRIENDS</h4>
                                            </div>
                                            <div className="card-body">
                
                                                <form onSubmit={this.addUser.bind(this,dispatch)}>
                                                    <div className="form-group"> 
                                                    <label htmlFor="name">Name</label>
                                                    <input id="name" 
                                                    value={name}
                                                    onChange={this.changeInput}
                                                    type="text" name="name" placeholder="Enter Name" className="form-control"/>
                                                    </div>
                                                    <div className="form-group"> 
                                                    <label htmlFor="username">Username</label>
                                                    <input id="username" 
                                                    value={username}
                                                    onChange={this.changeInput}
                                                    type="text" name="username" placeholder="Enter salary" className="form-control"/>
                                                    </div>
                                                    <button type="submit" className="btn btn-type btn-block btn-custom">Add User</button>  
                                                </form>
                                            </div>
                                        </div>
                                            </Animation>
                            </div>
                        )

                    }
                }
            </UserConsumer>
        )
       
    }
}

export default AddProfile;