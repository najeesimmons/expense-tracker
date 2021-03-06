import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // GROUP state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // pieces of state managed individually (MOST COMMON)
    setEnteredTitle(event.target.value);

    // managing group state using spread operator (RISKY)
    //   setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // managing groupvstate using prevState (BEST PRACTICE)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // pieces of state managed individually (MOST COMMON)
    setEnteredAmount(event.target.value);

    // managing group state using spread operator (RISKY)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })

    // managing group state using prevState (BEST PRACTICE)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    // pieces of state managed individually (MOST COMMON)
    setEnteredDate(event.target.value);

    // managing group state using spread operator (RISKY)
    //   setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.date,
    //   });

    // managing group state using prevState (BEST PRACTICE)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value}
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/*<form onSubmit={submitHandler} onReset={resetHandler}>*/}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
