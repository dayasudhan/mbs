import React , { useState, useEffect } from 'react';
import { Table,Button,Container, Divider, Grid, Header, Image,Segment } from 'semantic-ui-react';
import axios from 'axios';
function CustomerInfoPage() {
  const [data, setData] = useState([]);
  const customer = {
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St, City, State',
    contactPerson: 'Jane Smith',
    contactPhone: '987-654-3210',
    propertyType: 'Commercial',
    serviceBeginDate: '2023-06-01',
    serviceExpirationDate: '2024-05-31',
    renewal: 'Yes',
    serviceType: 'Monthly',
    pestsToControl: 'Ants, Cockroaches, Rodents',
    paymentTerms: 'Net 30 Days',
    billingInstructions: 'Send invoices via email',
    signatoryName: 'John Doe',
    signatoryDesignation: 'Owner',
    customerSignature: 'John Doe',
  };
  const handleButtonClick = () => {
    // Make API call using fetch
    axios.get('/pdf')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };


    return (
      <div className="contract-container">
      <h1>Pest Control Service Contract2</h1>
      <Grid>
        <Grid.Column textAlign='right' width={8}>
          right aligned column
        </Grid.Column>
        <Grid.Column textAlign='left' width={8}>
          left aligned column
        </Grid.Column>
        <Grid.Row columns={2} textAlign='center'>
          <Grid.Column>center aligned row</Grid.Column>
          <Grid.Column>center aligned row</Grid.Column>
        </Grid.Row>
        <Grid.Column textAlign='right' width={16}>
          right aligned column
        </Grid.Column>
      </Grid>
      <Header as='h3' content='Stackable Grid Container'  textAlign='center' />
    <Grid container columns={2} stackable>
      <Grid.Column>
        <Segment>Name : Dayasudhan</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Addres : 'Kuruva \n Honali \n Davangere'</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Customer Information</h2>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Address:</strong> {customer.address}</p>
          <p><strong>Contact Person:</strong> {customer.contactPerson}</p>
          <p><strong>Contact Phone:</strong> {customer.contactPhone}</p>
          <p><strong>Property Type:</strong> {customer.propertyType}</p>
        </div>
        <div className="grid-item">
          <h2>Service Details</h2>
          <p><strong>Service Begin Date:</strong> {customer.serviceBeginDate}</p>
          <p><strong>Service Expiration Date:</strong> {customer.serviceExpirationDate}</p>
          <p><strong>Renewal:</strong> {customer.renewal}</p>
          <p><strong>Service Type:</strong> {customer.serviceType}</p>
          <p><strong>Pests to Control:</strong> {customer.pestsToControl}</p>
        </div>
        <div className="grid-item">
          <h2>Payment and Billing</h2>
          <p><strong>Payment Terms:</strong> {customer.paymentTerms}</p>
          <p><strong>Billing Instructions:</strong> {customer.billingInstructions}</p>
        </div>
        <div className="grid-item">
          <h2>Signatory Details</h2>
          <p><strong>Signatory Name:</strong> {customer.signatoryName}</p>
          <p><strong>Signatory Designation:</strong> {customer.signatoryDesignation}</p>
          <p><strong>Customer Signature:</strong> {customer.customerSignature}</p>
        </div>
      </div>
    </div>
    );
  
}

export default CustomerInfoPage;
