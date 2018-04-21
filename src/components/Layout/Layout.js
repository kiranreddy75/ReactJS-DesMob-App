import React,{Component} from 'react';
import Divider from '../../highoC/Divider';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Compare from '../Burger/BuildControls/Compare/Compare';

class Layout extends Component {
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return{showSideDrawer:!prevState.showSideDrawer };
        });
    }

    render () {
        return (
            <Divider>
    < Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler} />
    <SideDrawer open={this.state.showSideDrawer} 
    closed={this.sideDrawerClosedHandler} />
    <main className = {classes.Content}>
    <h3>Your Burger !</h3>
    <hr></hr>
    {this.props.children}
    </main>
    <h1 className={classes.h1}>Make Your Burger As You Like !</h1>
    < Compare />
    <h3 className={classes.h3}>Compare Our Burger with Other's... We promise Our's will be the Best One !</h3>
    
</Divider>

        )
    }
}

export default Layout;