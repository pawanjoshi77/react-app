import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = {name: '', age: 0};
    const [person, setPerson] = useState({
      name: '',
      age: ''
    });

    const form = useForm();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // if (nameRef.current !== null)
        // person.name = (nameRef.current.value);
        // if(ageRef.current !== null)
        // person.age = parseInt(ageRef.current.value);
        console.log(person);
    }

    const reSet = () => {
      setPerson({
        name: '',
        age: ''
      });
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label> 
        <input onChange= {(event) => 
          setPerson({...person, name: event.target.value})
         } 
         value= {person.name} id= "name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input onChange={(event) => 
          setPerson({ ...person, age: event.target.value})
        }
         value={person.age} id="age" type="number" className="form-control" />
      </div>
      <div>
      <button className="btn btn-primary me-3" type="submit">Submit</button>
    <button className="btn btn-primary me-3" type="reset" onClick={reSet}>Reset</button>                          
      </div>  
            
      
{/* 
      <button className="btn btn-primary" type="button">Reset</button>
      <input type="reset" value="Standard Reset Field Values" /> */}
      {/* <input
        type="reset" BW
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      /> */}
    </form>
  )
}

export default Form

// function useForm() {
//   throw new Error('Function not implemented.');
// }
