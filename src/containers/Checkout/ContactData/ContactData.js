import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state={
        name: '',
        email: '',
        adress: {
            street: '',
            zipCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
                    ingredients: this.props.ingredients,
                    price: this.props.price,
                    customer: {
                        name: 'Tomi Bomi',
                        address: {
                            street: 'Teststreet 1',
                            zipCode: '89098',
                            country: 'Poland'
                        },
                        email: 'test@test.com'
                    },
                    deliveryMethod: 'fastest'
                };
                axios.post('/orders.json', order)
                    .then(response => {
                        this.setState({loading: false});
                        this.props.history.push("/");
                    })
                    .catch(error => {
                        this.setState({loading: false});
                    });
    };

    render() {
        let form = (
            <form>
                <input type="text" name={"name"} placeholder={"Your Name"}/>
                <input type="email" name={"email"} placeholder={"Your Email"}/>
                <input type="text" name={"street"} placeholder={"Your Street"}/>
                <input type="text" name={"zipCode"} placeholder={"Your ZIP Code"}/>
                <Button btnType={"Success"} clicked={this.orderHandler}>
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
           <div className={classes.ContactData}>
               <h4>Enter your Contact Data!</h4>
               {form}
           </div>
        );
    }
}


export default ContactData;