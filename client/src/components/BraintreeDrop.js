import React, { Component, } from 'react';
import { Dimmer, Loader, Segment, Header } from 'semantic-ui-react';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';

const BraintreeDrop = (props) =>{

  return(
    <Segment>
      <Header as = "h1" textAlign="center">Hello</Header>
    </Segment>

  )
}
export default BraintreeDrop