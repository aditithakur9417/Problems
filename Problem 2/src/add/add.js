import React from 'react';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  
import Button from 'react-bootstrap/Button'
import { ImCross } from "react-icons/fa";
import './add.css'

function Add(){
    const generateRandomBetween = (min, max) => {
        let ranNum = Math.floor(Math.random() * (max - min)) + min;
        return ranNum;  
    }    
    
    const num = generateRandomBetween(1, 10);    
    const [Users, fetchUsers] = useState([])

    const getData = () => {
      fetch('https://swapi.dev/api/people/'+num)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
    

    return(
        <div className="container">
     <Container>

 <Row className="row">
    <Col className="name">{Users.name}</Col>
    <Col className="delete"> 
    </Col>
 
  </Row>
 
</Container>
        </div>
    )
}
export default Add