import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge';
function UserCard({name,email,role}) {
     const [userCard]=useState([{name:"Sejal Patil",email:"sejal@gmail.com",role:"Frontend Developer"},{name:"Ram Deshmukh", email:"ram@gmail.com",role:"Backend Developer"},{name:"Pranjal Chavhan", email:"pranjal@gmail.com", role:"Full stack developer"}])
   


  return (
    <div>
    <Container>
      <h1>User Card</h1>
      <Row>
       <Col><p>{name}</p></Col> 
        <Col><p>{email}</p></Col>
       <Col><p>{role}</p></Col>
        </Row>

        <Row>
        <div >
            <Col>
            {userCard.map((item,index)=>(
                
            <Card className='flex' style={{ width: '18rem' }} key={index}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
            
        <Card.Subtitle className="mb-2 text-muted" ><Badge bg="primary">{item.role}</Badge></Card.Subtitle>
        <Card.Text>
          {item.email}
        </Card.Text>
      </Card.Body>
    </Card>
   
        ))}
         </Col>
        </div>
</Row>
     
    </Container>   
    </div>
  )
}

export default UserCard
