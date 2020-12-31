import React,{Component} from 'react';
import Bootstrap,{Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap' 
import {browseRouter,Route} from 'react-router-dom'

export default function Navber() {
    return (
        <div>
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>  
        </div>
    )
}
