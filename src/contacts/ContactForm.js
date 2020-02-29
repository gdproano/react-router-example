import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import callService from "../service";
import { noop } from "../helper";

function ContactForm() {
    const [stateContact, setStateContact] = useState({ name: ''});
    const { contactId } = useParams();

    useEffect(() => {
        getContact();  
      }, []);
    
      function getContact () {
        callService(null, 'GET', contactId).then((responseData) => {
            setStateContact(responseData);
        }).catch(noop);
      }

    function onSaveContact () {
        callService(stateContact, 'PUT',contactId);
    }

    function onDelete () {
        callService(null, 'DELETE',contactId);
    }

    return (<div>
        <input defaultValue={stateContact.name} onChange={(evt)=> setStateContact({
            name: evt.currentTarget.value
        })} />
        <button onClick={onSaveContact}>Guardar</button>
        <button onClick={onDelete}>Eliminar</button>
    </div>);
  }

export default ContactForm;
