import React from 'react';
import axios from 'axios'
const UserContext=React.createContext();
/* 
Terimler
UserConext
Provider
Consumer
UserProvider
reducer
dispatch
payload
axios
json-server --watch api/db.json --port 3002
*/
const reducer=(state,action)=>{
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users:state.users.filter(user=>action.payload!==user.id)
            }

        case "ADD_USER":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        default:return state;
    }
}

export class UserProvider extends React.Component{
    
    /* 
    npm i -g json-server
    fake server indirdik

    2-json-server --watch api/db.json 
    çalıştırdık

    3- --port 3004 şeklinde port değiştirebiliriz
    */
    state={
        users:[
            
          ],
          dispatch:action=>this.setState(state=>reducer(state,action))
    }
   
    componentDidMount=async()=>{
        const response = await axios.get("http://localhost:3002/users/")
        this.setState({users:response.data})
    }
    render(){
        return(
           <UserContext.Provider value={this.state}>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;