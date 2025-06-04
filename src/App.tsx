import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button/Button';
import ListGroup from './components/ListGroup/';
import './App.css'
import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like';
import Form from './components/Form';
import ExpenseList from './components/expense-tracker/components/ExpenseList';


function App() {
  //   let items = [
  //     'New York',
  //     'San Francisco',
  //     'Tokyo',
  //     'London',
  //     'Paris'
  // ]; 

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' }
  ]);

  // const expenses = [
  //   {id: 1, description: 'aaa', amount:10, category: 'Utilities'},
  //   {id: 2, description: 'bbb', amount:10, category: 'Utilities'},
  //   {id: 3, description: 'ccc', amount:10, category: 'Utilities'},
  //   {id: 4, description: 'ddd', amount:10, category: 'Utilities'}
  // ]

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  // let buttons = [
  //   { text: 'Primary', color: 'blue' },
  //   { text: 'Secondary', color: 'grey' },
  //   { text: 'Success', color: 'green' },
  //   { text: 'Danger', color: 'red' },
  //   { text: 'Warning', color: 'yellow' },
  //   { text: 'Info', color: 'lightblue' },
  //   { text: 'Light', color: 'lightbrown' },
  //   { text: 'Dark', color: 'black' },
  // ];



  return (
    <div>

      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />

      {/* <Form /> */}

      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <ListGroup items= {items} heading="Cities" onSelectItem={handleSelectItem} /> */}

    </div>

    // <BsFillCalendarFill color='red' size={40} />
    // <div>

    //   <Button color='primary' onClick={()=> console.log('clicked')}>My Button</Button>    

    // </div>
    //<Like onClick={()=> console.log('clicked')}></Like>



  )
  {/*
    <Alert>
      Hello <span style={{color: 'red'}}>World!</span>
  </Alert>*/}


  {/*<Button text='Secondary' color='grey'></Button> */ }
  {/* {buttons.map((button, index) => (
      <button key={index} 
      style={{ 
        backgroundColor: button.color, 
        color: button.text === 'Warning' || button.text === 'Light' || button.text === 'Info' ? 'black' : 'white',
        padding: '10px 20px', 
        margin: '5px' }}
        onClick={() => console.log(button.text + ' ' +'clicked')}
        > 
          {button.text}
      </button>
    ))} */}

  {/* {<Button text='Primary' customStyle={{padding: '10px 20px', margin: '5px', backgroundColor:'blue', color:'white'}} />} */ }
  {/*<Button text='Secondary' customStyle={{padding: '10px 20px', margin: '5px', backgroundColor:'grey', color:'white'}} />*/ }

}


export default App;