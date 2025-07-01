import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

function UserCard({name,email,role}) {
     const [userCard]=useState([{name:"Sejal Patil",email:"sejal@gmail.com",role:"Frontend Developer"},{name:"Ram Deshmukh", email:"ram@gmail.com",role:"Backend Developer"},{name:"Pranjal Chavhan", email:"pranjal@gmail.com", role:"Full stack developer"}])
   


  return (
    <div>
    <Container>
      <h1>User Card</h1>
      <h6>Props Data</h6>
      <Row>
       <Col><p>{name}</p></Col> 
        <Col><p>{email}</p></Col>
       <Col><p>{role}</p></Col>
        </Row>

        <Row>

           <Table striped bordered hover>
      <thead>
        <tr>
          <th> Name</th>
          <th>Email </th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
       
        {userCard.map((item,index)=>(
           <tr>
          <td key={index}>{item.name}</td>
          <td>{item.email}</td>
          <td><Badge bg="primary">{item.role}</Badge></td>
          
     </tr>
        ))};
     </tbody>
      </Table>
        
</Row>
     
    </Container>   
    </div>
  )
}

export default UserCard
