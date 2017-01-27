export const putRaicesForm = (input) => {
  const url = 'https://axq1xbuxtl.execute-api.us-west-2.amazonaws.com/prod/raicesapi';

  return fetch(url, {
  
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  
  })
  .then(response => response.json())
    .then(json => {
      console.log(json)
      return {
        dbInfo: {
          json
        }
      }
    })
    .catch(err => {dbInfo: {err}})

}
