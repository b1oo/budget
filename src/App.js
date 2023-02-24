import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const amount = event.target.elements.amount.value;
    const date = event.target.elements.date.value;
    const newExpense = { name, amount, date };
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div className="container">
      <h1>Budget App</h1>
      <form onSubmit={addExpense}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Amount:</label>
        <input type="number" name="amount" />
        <label>Date:</label>
        <input type="date" name="date" />
        <button>Add expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div>Name: {expense.name}</div>
            <div>Amount: {expense.amount}</div>
            <div>Date: {expense.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
