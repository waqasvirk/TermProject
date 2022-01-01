import React from 'react';
import productSer from '../../Serives/ProductSer';
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
const Single = (props) => {
    const {product , onDelete}=props
    return ( 

        <>
        <h2>{product.name} </h2>
        <p>{product.price}</p>
        <Button variant="warning" onClick={(e)  =>{

productSer.deleteProduct(product._id)
  .then((data) => {
      console.log(data)
      onDelete();
})
.catch((err)=>{
  console.log(err);
})
}}>Delete
</Button >
        <hr />
       
    </>
     );
}
 
export default Single;