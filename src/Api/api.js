// Inject fetch polyfill if fetch is unsuported
if (!window.fetch) { const fetch = require('whatwg-fetch') }

export const putRaicesForm = (input) => {
  console.log('put triggered?');
  const url = 'https://axq1xbuxtl.execute-api.us-west-2.amazonaws.com/prod/raicesapi';

  return fetch(url, {

      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),

    })
    .then(response => response.json()
      .then(json => {
        console.log(json);
        return {
          dbInfo: true,
        };
      })
      .catch(err => ({
        dbInfo: 'error',
      })))

};
