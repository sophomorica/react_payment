import React,{useState} from 'react';
import { Header, Segment, Input, Label, Divider, Image} from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop'
const Home = (props) =>{
  const [amount, setAmount] = useState('')
  const handleChange = e =>{
    setAmount(e.target.value)
  }
  return (
    <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>React Payments</Header>
        <Image centered size='small' src='https://supergirlfit.com/wp-content/uploads/2015/05/bag-of-groceries.jpg' />
        <Label color='green'>Payment Amount</Label>
        <Input value={amount} 
        style={{ fontSize: '18px', }}
        name ={amount}
        onChange={handleChange}
         />
        <Divider />
        <BriantreeDrop amount={amount} />
      </Segment>
  )
}


export default Home;
