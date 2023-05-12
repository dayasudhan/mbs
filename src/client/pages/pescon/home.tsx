import React, { useState , useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import ContactListComponent from './list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CustomerForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // const [contacts, setContacts] = useState('')
  // useEffect(() => {
  //   axios.get('/api')
  //   .then(response => {
  //     console.log("jsonData", response.data)
  //     setContacts(response.data);
  //   })
  //   .catch(error => {
  //     console.error("error",error);
  //   });
  // }, []);
  // const contacts2 = [
  //   { name: 'Alice', phone: '123-456-7890' },
  //   { name: 'Bob', phone: '987-654-3210' },
  //   { name: 'Charlie', phone: '555-555-5555' }
  // ];
  // setContacts(contacts2);
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {"name":name,"phone":phone,"email":email}
    console.log("formData",formData)
    axios.post('/api', formData)
    .then(response => {
      console.log("response",response);
    })
    .catch(error => {
      console.error("error",error);
    });
    console.log(`Submitted form with name: ${name}, email: ${email}, and phone: ${phone}`)
  }

  return (
  
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Form.Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Form.Input
        label="Phone"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
    </div>

 
  )
}

export default CustomerForm
