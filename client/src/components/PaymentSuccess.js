import React from 'react';
import { Segment, Header, } from 'semantic-ui-react';
import { Link, Redirect, } from 'react-router-dom';

const PaymentSuccess = ({ location: { state, }, }) => {
  if(state && state.transactionId)
    return(
      <Segment basic textAlign='center'>
        <Header as='h1' color='green'>Thank You For Your Purchase!</Header>
        <p>You have been successfully charged: ${state.amount}</p>
        <p>Your Transcation Id is: {state.transactionId}</p>
        <Link to='/'>Start Over</Link>
      </Segment>
    )
  else
    return(<Redirect to='/payment_failure' />);
}

export default PaymentSuccess;