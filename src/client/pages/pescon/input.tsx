import React, { useState } from 'react';
import { Form, Input, TextArea, Select, Button } from 'semantic-ui-react';
// import './PestControlForm.css';

function PestControlForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    service: '',
    startDate: '',
    endDate: '',
    pests: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const services = [
    { key: 'termite', value: 'Termite Control', text: 'Termite Control' },
    { key: 'ant', value: 'Ant Control', text: 'Ant Control' },
    { key: 'spider', value: 'Spider Control', text: 'Spider Control' },
    { key: 'bedbug', value: 'Bedbug Control', text: 'Bedbug Control' },
  ];

  return (
    <div className="pest-control-form">
      <h1>Pest Control Service Contract Input Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Name</label>
            <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Phone</label>
            <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleInputChange} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Service</label>
          <Select name="service" options={services} placeholder="Select Service" value={formData.service} onChange={(e, { value }) => setFormData({ ...formData, service: value })} />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Start Date</label>
            <Input name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <Input name="endDate" type="date" value={formData.endDate} onChange={handleInputChange} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Pests to be Controlled</label>
          <TextArea name="pests" placeholder="List the Pests to be Controlled" value={formData.pests} onChange={handleInputChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default PestControlForm;
