import React, { useState } from "react";

const Expenseform = () => {
  const [expenseData, setExpenseData] = useState({
    expenses: [],
    selection: "Internet",
    name: "",
    price: "",
  });

  const selections = ["Bills", "Food", "Groceries", "Entertainment", "Other"];

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name: expenseData.name,
      price: parseFloat(expenseData.price),
    };

    setExpenseData({
      ...expenseData,
      expenses: [
        ...expenseData.expenses,
        { [expenseData.selection]: newExpense },
      ],
      name: "",
      price: "",
    });

    console.log(expenseData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Expense Form</h3>
        </div>
        <div>
          <select
            name="selection"
            value={expenseData.selection}
            onChange={handleChange}
          >
            {selections.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Expense Name"
            value={expenseData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Expense Price $"
            value={expenseData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit Expense</button>
        </div>
      </form>
    </div>
  );
};

export default Expenseform;
