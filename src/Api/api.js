export const putRaicesForm = (input) => {
  console.log('put triggered?')

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
        dbInfo: true 
      }
    })
    .catch(err => ({dbInfo: false}))

}
