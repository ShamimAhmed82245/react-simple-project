import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      (enteredUserName.trim().length === 0) |
      (enteredAge.trim().length === 0)
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div>
      <ErrorModal title={"Error Occured!"} message={"Something Went Wrong"} />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>User Name</label>
          <input
            htmlFor="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            htmlFor="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
