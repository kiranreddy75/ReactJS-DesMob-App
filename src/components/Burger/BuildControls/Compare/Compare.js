import React from 'react';
import classes from './Compare.css';


const compare = (props) => (
<div className={classes.Color}>
<div className="container" >
<div className="row">
 <div className="col-sm-4 ">
<a href="https://www.mcdonalds.com/us/en-us.html" target="blank" ><strong>Mc Donalds</strong></a>
</div>
<div className="col-sm-4">
<a href="https://www.bk.com/" target="blank" ><strong>Burger King</strong></a>
</div>
<div className="col-sm-4">
<a href="https://www.jackinthebox.com/" target="blank" ><strong>Jack In The Box</strong></a>
</div>

</div>
</div>
</div>

);
  


export default compare;