import React from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl, Col, Checkbox} from 'react-bootstrap';
// import {Form, FormGroup, FormControl, Button Col, Checkbox} from 'react-bootstrap';

class SignupForm extends React.Component{
  render(){
    return(
      <div className="signup">
        <h2>Signup</h2>
                <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Firstname:
      </Col>
      <Col sm={10}>
        <FormControl type="firstname" placeholder="Firstname" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Lastname:
      </Col>
      <Col sm={10}>
        <FormControl type="lastname" placeholder="Lastname" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Confirm Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>
      </div>
    );
  }
}

export default SignupForm;
