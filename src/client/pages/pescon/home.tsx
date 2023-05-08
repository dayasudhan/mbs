import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const CustomerForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission
    console.log(`Submitted form with name: ${name}, email: ${email}, and phone: ${phone}`)
  }

  return (
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
  )
}

export default CustomerForm
