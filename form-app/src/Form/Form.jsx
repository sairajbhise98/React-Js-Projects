import { useState } from 'react'
import './Form.css'
const Form = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')



    const submitHandler = (event) => {
        event.preventDefault()
        let userDetails = {
            FirstName: firstName,
            LastName: lastName,
            Age: age,
            City: city
        };
        //console.log(userDetails);
        props.onSaveUser(userDetails);

        setFirstName('');
        setLastName('');
        setAge('');
        setCity('');
    }
    return (
        <div className='form'>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input value={firstName} onChange={(e)=>{setFirstName(e.target.value.trim())}} type='text' required/>
                <label>Age</label>
                <input value={age} type='number' onChange={(e)=>{setAge(e.target.value)}} step='1' required/>
                <br/>
                <label>Last Name</label>
                <input value={lastName} type='text' onChange={(e)=>{setLastName(e.target.value.trim())}} required/>
                <label>City</label>
                <input value={city} type='text'onChange={(e)=>{setCity(e.target.value.trim())}} required/>
                <br/><br/>
                <span>
                    <button type='submit'>Submit</button>
                </span>
            </form>
        </div>
    );
}

export default Form;