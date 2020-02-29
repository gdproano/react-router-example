import React from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom'

function Contact({ contact, onDelete, history }) {
    const { id, name } = contact;
    const { path } = useRouteMatch();

    return (<div>
        <label>{name}</label>
        <button onClick={() => history.push(`${path}/${id}/edit`)}>Ver detalle</button>
        <button onClick={() => onDelete(contact.id) }>Eliminar</button>
    </div>);
  }

export default withRouter(Contact);
