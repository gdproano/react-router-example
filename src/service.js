export default async function callService(body, method, sufix) {
    const headers = new Headers();
    const params = {
      headers,
      method: method || 'GET',
    };

    if(body) {
      params.body =  JSON.stringify(body);
    }
          headers.set('Content-Type', 'application/json');
          return fetch(`http://localhost:3001/contacts/${sufix}`, params)
          .then(response =>response.json())
  }