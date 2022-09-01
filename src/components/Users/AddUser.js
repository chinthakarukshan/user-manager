import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(username, age);
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        
    );
}

export default AddUser;