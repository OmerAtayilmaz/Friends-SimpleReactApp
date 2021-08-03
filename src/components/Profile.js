import React from 'react'
import UserConsumer from '../context'

class Profiles extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            isVisible:false
        }
        /* bind etme yöntemi-3  
        this.toggleFunction=this.toggleFunction.bind(this);
        */
    }
  
    toggleFunction(number,e){
      /*   console.log(e.target) */
        this.setState({
            isVisible:!this.state.isVisible
        })
   /*      console.log(this);
        console.log(number); */
    }

    onDeleteProfile(dispatch,e){
        //dispatch
        const {id}=this.props;
        console.log("Silindi")
        //consumer dispatch
      
        dispatch({type:"DELETE_USER",payload:id})
        console.log(id)
    }
    render(){
        
        const {id,username,name,followers,following,messages}=this.props;
        const {isVisible}=this.state;
        return (<UserConsumer>
            {
                value=>{
                    const {dispatch}=value;
                    return(
                        <div className="col-3 mt-3  " key={id}>
                        <div className="card card-profile bg-orange-color " style={isVisible?{backgroundColor:"#333",color:"#ddd"}:null}>
                            <div className="card-header font-weight-light text-white d-flex flex-row justify-content-between">
                                <span>Username:{username}</span>
                                <button onClick={this.toggleFunction.bind(this,24)}  className="btn btn-outline-primary text-white border-white"><i className="fas fa-sliders-h"></i></button>
                            </div>
                            {
                                isVisible?<div className="card-body" >
                                <ul className="list-group">
                                    <li className="mb-1 border-0 list-group-item bg-primary text-white d-flex flex-row justify-content-between">
                                    <span><i className="fas fa-user mr-1"></i>Name:</span>
                                    <span className="badge bg-white text-dark">{name}</span>
                                    </li>
                                    <li className="mb-1 border-0 list-group-item bg-primary text-white d-flex flex-row justify-content-between">
                                    <span><i className="fas fa-user-friends mr-1"></i>Followers:</span>
                                    <span className="badge bg-white text-dark">{followers}</span>
                                    </li>
                                    <li className="mb-1 border-0 list-group-item bg-primary text-white d-flex flex-row justify-content-between">
                                    <span><i className="fas fa-users mr-1"></i>Following:</span>
                                    <span className="badge  bg-white text-dark">{following}</span>
                                    </li>
                                    <li className="mb-1 border-0 list-group-item bg-primary text-white d-flex flex-row justify-content-between">
                                    <span><i className="fas fa-envelope mr-1"></i>Messages:</span>
                                    <span className="badge  bg-white text-dark">{messages}</span>
                                    </li>
                                </ul>
                            </div>:null
                            }
                            
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-primary"><i className="fas fa-location-arrow mr-2"></i>Follow</button>
                                <button onClick={this.onDeleteProfile.bind(this,dispatch)} className="btn btn-danger"><i className="fas fa-trash mr-2"></i>Delete</button>
                            </div>
                        </div>
                        </div>
                    ) 
                }
            }
        </UserConsumer>)
      /*  */
    }
}
/* Profiles.propTypes={
    name:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    followers:PropTypes.number.isRequired,
    following:PropTypes.number.isRequired,
    messages:PropTypes.number.isRequired
} */
/* scnd way to default Props
static defaultProps={
    ...
}
*/
Profiles.defaultProps={
    name:"Belirtilmedi",
    username:"Belirtilmedi",
    followers:0,
    following:0,
    messages:0
}
export default Profiles