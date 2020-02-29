import React, { useState} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Contacts from "./contacts/Contacts";
import ContactForm from "./contacts/ContactForm";

  function NewContact () {
    const [name, setName] = useState('');
    return <div>
      <input value={name} name="name" onChange={
        (evt) => {
          const newValue = evt.currentTarget.value;
          setName(newValue);
        }
      } />
      <button onClick={
        ()=> {
          const headers = new Headers();
          headers.set('Content-Type', 'application/json');
          fetch('http://localhost:3001/contacts', {
            headers,
            method: 'POST',
            body:  JSON.stringify({
              name,
            })
          }).catch(console.log);
        }
      }>Submit</button>
    </div>

  }

function ContactRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
    <Route exact path={`${path}`}>
      <Contacts />
    </Route>
    <Route path={`${path}/new`}>
      <NewContact />
    </Route>
    <Route path={`${path}/:contactId/edit`}>
      <ContactForm />
    </Route>
    <Route>
      Contact not found
    </Route>
  </Switch>
  );
}

export default ContactRouter;
