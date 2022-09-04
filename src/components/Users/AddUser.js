import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }

        if (+age < 1) {
            return;
        }

        const newUser = {
            name: username,
            age: age,
            id: Math.random().toString()
        };

        props.onAddUser(newUser);

        console.log(username, age);
        setUsername('');
        setAge('');
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    return (
      <div>
        <ErrorModel
          title="An error occured...!"
          message="Something went wrong"
        />
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
}

export default AddUser;