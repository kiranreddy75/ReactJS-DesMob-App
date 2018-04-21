import React,{Component} from 'react';
import Divider from '../../../highoC/Divider';

class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey=>{
        return (
            <li key={igKey}>
            <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
    });

        return (  <Divider>
            <div style={{color:'white', backgroundColor:'tomato'}}>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <p>
            {ingredientSummary}
            </p>
            <p><strong>Total Price: $ {this.props.price.toFixed(2)}</strong></p>
           <p>Continue to Checkout ?</p> 
            <button className={'btn btn-danger'}onClick={this.props.purchaseCanceled}>CANCEL</button>
           <button className={'btn btn-success'} onClick={this.props.purchaseContinue}>CONTINUE</button>
           </div>
        </Divider>);
    }

}


export default OrderSummary;