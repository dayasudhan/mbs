import React , { useState, useEffect } from 'react';
import { Table,Button } from 'semantic-ui-react';
import axios from 'axios';
function CustomerInfoPage() {
  const [data, setData] = useState([]);
  const customer = {
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St, City, State'
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
      <div>
        <h1>Customer Information</h1>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <Button color="primary" onClick={handleButtonClick}>
        PDf
      </Button>
      </div>
    );
  
}

export default CustomerInfoPage;
