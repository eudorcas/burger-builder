import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';

class ContactData extends Component {
    state={
        name: '',
        email: '',
        adress: {
            street: '',
            zipCode: ''
        }
    };

    render() {
        return (
           <div className={classes.ContactData}>
               <h4>Enter your Contact Data!</h4>
               <form>
                   <input type="text" name={"name"} placeholder={"Your Name"}/>
                   <input type="email" name={"email"} placeholder={"Your Email"}/>
                   <input type="text" name={"street"} placeholder={"Your Street"}/>
                   <input type="text" name={"zipCode"} placeholder={"Your ZIP Code"}/>
                   <Button btnType={"Success"}>
                       ORDER
                   </Button>
               </form>
           </div>
        );
    }
}


export default ContactData;