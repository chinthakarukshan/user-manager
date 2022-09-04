import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css';

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error,setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
          setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age (non empty values)",
          });
          return;
        }

        if (+age < 1) {
          setError({
            title: "Invalid Age",
            message: "Please enter a valid age (positive value)",
          });
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

    const onClickOkay = () => {
        setError('');
    };

    return (
      <div>
        (
        {error && (
          <ErrorModel
            title={error.title}
            message={error.message} onClickOkay={onClickOkay}
          />
        )}
        )
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