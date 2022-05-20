import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
