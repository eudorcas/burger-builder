import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This should be a functional component, left only for debugging purposes
    componentWillUpdate(){
        console.log("OrderSummary willUpdate");
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                {igKey}</span>
                    : {this.props.ingredients[igKey]}
                </li>
            });

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        );
    }


}


export default OrderSummary;