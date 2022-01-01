import React from 'react';
import productSer from '../../Serives/ProductSer';
import { FormControl, Col,Container,InputGroup,Row,Button } from 'react-bootstrap';
const NewProduct = (props) => {

    const [name ,setName]=React.useState("");
    const [price ,setPrice]=React.useState();
    return ( <>
    
<h1>Add Book</h1>
<Container>
<Row>
<Col sm={7}>
<>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default"  >Name</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={name}
      onChange={(e)=>{setName
        (e.target.value)}}
    />
  </InputGroup>
  
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Price</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={price}
      onChange={(e)=>{setPrice(e.target.value)}}
    />
  </InputGroup>
</>
</Col >
</Row>
</Container>
<Button variant="primary" onClick={


(e)=>{

  productSer.addProduct({name,price})
    .then((data) => {
        console.log(data);
    
});
}}
>Add Book</Button>{' '}
    </> );
}
 
export default NewProduct ;