import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Divider from '../../highoC/Divider'

const INGREDIENT_PRICES = {
    salad:0.576,
    cheese:0.758,
    bacon:1.589,
    meat:2.987,

};
class BurgerBuilder extends Component{
    //constructor (props) {
      //  super(props);
        //this.state ={.....}
        //}
    state ={
        ingredients: {
        
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0,

        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
    this.setState({purchaseable: sum>0});
    }

    addIngredientHandler =(type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients); 
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler =()=>{
        this.setState({purchasing:false});
    }
purchaseContinueHandler = () => {
    
    alert('You Placed Order SuccessFully...Enjoy Your Burger');
}


    render(){
        const disableInfo ={
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key]=disableInfo[key] <= 0
        }
        return(

        <Divider>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler }>
                <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
           <hr></hr>
            <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}/>
            </Divider>    
        )
    }
}

export default BurgerBuilder;