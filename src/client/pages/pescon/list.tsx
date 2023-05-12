import React from 'react';

function ListComponent(props) {
  const { contacts } = props;

  return (
    <div>
      <h1>List of Contacts</h1>
      <ul>
        {contacts?.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}: </strong>
            {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;