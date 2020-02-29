import React, { useEffect, useState} from 'react';
import Contact from "./Contact";
import callService from "../service";
import { noop } from "../helper";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();  
  }, []);

  function getContacts () {
    callService(null, 'GET', '').then((responseData) => {
      setContacts(responseData);
    }).catch(noop);
  }

  useEffect(() => {
    callService(null, 'GET', '', (responseData) => {
      setContacts(responseData);
    }, noop);
    fetch('http://localhost:3001/contacts')
    .then(response =>response.json())
    .then((responseData) => {
        setContacts(responseData);
      })
  }, []);

  function onDelete (id) {
    callService(null, 'DELETE', id, noop, noop).then(getContacts);
  }

    return (
        <div className="container">
          {contacts.map(contact => <Contact 
          key={contact.id} 
          contact={contact} 
          onDelete={id => onDelete(id)} />)}
        </div>
        );
  }

export default Contacts;
