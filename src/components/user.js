import React, { Component } from 'react';
import Useritem from './useritem';
import { MyContext } from '../context';

class User extends Component {
    //static contextType = MyContext;

    render() {
        //console.log(this.context)
        return (
            <>
                <MyContext.Consumer>
                    {context => {
                        console.log(context)
                    }}
                </MyContext.Consumer>
                <Useritem />
            </>

        )
    }

}

export default User;