// ./src/components/Contact.js
// use JSON placeholder for tesing
// https://jsonplaceholder.typicode.com/

import React, { Component } from 'react';
import {
  Checkbox,
  Button
} from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import { connect } from 'react-redux';
import { putFormAction } from './contactActions';

/* import put_URL from './../secrets/awsURLs'; */
/* import './../styles/Contact.css'; */

/* function FieldGroup({
 *   id,
 *   label,
 *   help,
 *   ...props
 * }) {
 * 
 *   return (
 *     <FormGroup controlId={id}>
 *       <ControlLabel>{label}</ControlLabel>
 *       <FormControl  {...props} />
 *       {help && <HelpBlock>{help}</HelpBlock>}
 *     </FormGroup>
 *   );
 * } */

function appendElement(obj){
  let elements = Object.keys(obj).map((el,id) => {
    return <h3 key={id}>{obj[el]}</h3>;
  })
  return (
    <div> 
      {elements}
    </div>
  );
}


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {dbInfo: false};
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

/*   handleFormSubmit(e){
 *     // testing has gone well, time to setup DB and do real testing
 *     // let url = 'https://jsonplaceholder.typicode.com'; 
 *     // console.log(this.nameInput.value) 
 * 
 *     e.preventDefault();
 *     let input = {
 *       name: this.nameInput.value,
 *       email: this.emailInput.value,
 *       message: this.textInput.value
 *     }
 *     this.props.dispatch(putFormAction(input));
 *
 *     fetch(put_URL,
 *       {
 *         method: 'PUT',
 *         headers: {
 *           'Accept': 'application/json',
 *           'Content-Type': 'application/json',
 *         },
 *         body: JSON.stringify(input)
 *       })
 *       .then(data => data.json())
 *       .then(jsonData => {
 *         console.log(jsonData)
 *         this.setState({dbInfo:{success:"Thank you for your request!!!"}})
 *       })
 *       .catch(err => {
 *         console.log(err)
 *         this.setState({dbInfo:{fail:"Please re-submit"}})
 *       }); 
    // testing works! time to get the db going!

  } */

  render(){
    const append = this.state.dbInfo;
    let stuff = null;
    if(append){
      stuff = appendElement(append);
    }

    return (
      <section className="Contact">
        <div className="reqHeadline">
          <h1>Please contact us and/or send us your info to request more info or book a performance.</h1>
        </div>
        <form>
          <FieldGroup
            id="formControlsName"
            type="text"
            label="Name"
            placeholder="Enter name"
            inputRef={ref => { this.nameInput = ref; }}
          />
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            inputRef={ref => { this.emailInput = ref; }}
          />

        <h3>Check all that apply please:</h3>

        <FormGroup>
          <Checkbox inline>
            General Info
          </Checkbox>
          {' '}
          <Checkbox inline>
            Booking
          </Checkbox>
          {' '}
          <Checkbox inline>
            Pricing
          </Checkbox>
          <Checkbox inline>
            Feedback
          </Checkbox>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl 
            className="textarea" 
            inputRef={ref => { this.textInput = ref; }}
            componentClass="textarea" 
            placeholder="Please leave your feedback or any further request info here" />
        </FormGroup>

        <Button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </Button>

      </form>

      <div>
        {stuff}
      </div>

      <div className="committeeInfo">
        <h2>Committee Members</h2>

        <p>
          Director:  Erbelia Espejo
        </p>
        <p>
          Sub-director:  Ben Espejo
        </p>
        <p>
          Instructors:  Oscar León
        </p>
        <p>
          Cynthia Nagel
        </p>
        <p>
          Assistant:  April Espejo
        </p>
        <p>
          South Pasadena, CA 91030
        </p>
      </div>
    </section>
    );
  };
};
export default Contact;
