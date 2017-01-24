// ./src/components/Contact.js
import React from 'react';
import {
  HelpBlock,
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import './../styles/Contact.css';

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


const Contact = () => (
  
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
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
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
        <FormControl className="textarea" componentClass="textarea" placeholder="Please leave your feedback or any further request info here" />
      </FormGroup>

      <Button type="submit">
        Submit
      </Button>
    </form>

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

export default Contact;
