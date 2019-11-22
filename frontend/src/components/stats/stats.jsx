import React, { Component } from 'react'
import axios from 'axios'

export default class stats extends Component {
    constructor(props){
        super(props);
        this.state={
            users:['']
        }
    }
    componentDidMount(){
        axios.get('/api/users/highscore')
        .then(res => {
                
            this.setState({users: res.data});
            
        })
    }

    render() {
        return (
            <div className='container'>
                <ol>
                    {this.state.users.map((user,idx) => {
                    if(idx<10){
                    return <li>{user.username} {user.highscore}</li>
                    }
                    })}
                </ol>
                <hr/>
                <hr/>
                <>
                {this.state.users.map((user, idx) => {
                    if (user.username === window.store.getState().session.user.username){
                        return <div> {idx}. {user.username} {user.highscore}</div>
                    }
                    })}
                </>
            </div>
        )
    }
}
