import awsURL from './../secrets/awsURLs';

export const putRaicesForm = (input) => {
  const url = awsURL;

  return fetch(url, {
  
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  
  })
  .then(response => response.json())
    .then(json => {dbInfo: {success: "Thank you for your request!!"}})
    .catch(err => {dbInfo: {success: "Please re-submit"}})

}
