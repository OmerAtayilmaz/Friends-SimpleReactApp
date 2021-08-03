import React, { Component } from 'react'
import Profile from './Profile';
import UserConsumer from '../context';

class Profiles extends Component {
    render() {

        return(
            <UserConsumer>
                {
                    value=>{
                        const {users}=value
                        return (
                            <div className="row">
                                {
                                    users.map(user=><Profile 
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    username={user.username}    
                                    followers={user.followers}
                                    following={user.following}
                                    messages={user.messages}
                                    />)
                                }
                            </div>
                            )
                    }
                }
            </UserConsumer>
        )
       /*  
         */
    }
}

export default Profiles;