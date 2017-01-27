// ./src/components/Contact.js
// https://jsonplaceholder.typicode.com/
import React, {
  Component
} from 'react';
import {
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import {
  connect
} from 'react-redux';
import {
  putFormAction
} from './contactActions';

/* import put_URL from './../secrets/awsURLs'; */
/* import './../styles/Contact.css'; */

function appendElement(bool) {
  switch (bool) {
    case bool === true:
      return <h3 key='success1'>'Your submission was successful!'</h3>;
    case bool === false:
      return <h3 key='success1'>'Your submission was unsuccessful!'</h3>
    default:
      return null;
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const input = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.textInput.value
    }
    this.props.putFormAction(input);
  }

  render() {
    const append = this.props.dbInfo;
    console.log(this.props)

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

        <Button 
          type="submit" 
          onClick={this.handleFormSubmit}>
          Submit
        </Button>

      </form>

      <div>
        { appendElement(append) }
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

const mapStateToProps = (state) => ({
  state
});

// Wrap action creator with dispatch method. 
const mapDispatchToProps = (dispatch) => ({
  putFormAction: (input) => dispatch(putFormAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
