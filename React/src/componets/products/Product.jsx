import styles from '../../App.css'
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Single from './Single';
import productSer from '../../Serives/ProductSer';
const Products = (props) => {

    const [products, setproduct]= React.useState ([
   
    ])
    const getdata=  ()=>{


        productSer.getProduct()
        .then((data)=>{

            setproduct(data);
        })
        .catch((err)=>{
            console.log(err);});
    }
    React.useEffect(getdata,[])
    const Logout=() =>{
       
        props.history.push("/product/new");



    };

    return (  



    <>
    
    <h1 id='ppp'>
Book_List

    </h1>
    {products.length == 0 ?(<p>No Book Avaiable </p>):
    ( <Container>
        
        <Row>
        <Col sm={8}>
          {products.map((product , index) => (

<Single  key={index} product={product} onDelete={getdata}/>
)



)}

</Col>
</Row>
</Container>

)}
   
   <Button variant="success" > New Book</Button>
  
     
    
    
    </>
    );
}
 
export default Products;