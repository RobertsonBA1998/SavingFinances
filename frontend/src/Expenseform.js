import React from "react";
import { useState } from "react";
import ExpenseFormData from "./ExpenseFormData";

const Expenseform = () => {
 /*

! Form serves as a basic functionality for now, not complete !

TODO: selection tag needs to be an array of selection such as [Internet, Food, Groceries, Uber, Other] etc.

TODO: The infoexpense data needs to be configured and displayed as such:

*Name of array as the selection
*Then has the data of objects inside
 Bills: [
  {
   name: "Internet",
   price: 25,
  },

  {
   name: "Phone Bill",
   price: 25,
  },
 ]
 */

 //storing data from form, the keys are their values
 const [infoExpense, setInfoExpense] = useState({
  selection: "",
  name: "",
  email: "",
  phonenumber: "",
 });

 //storing submitted data from forn
 const [data, setData] = useState([]);

 // records the changes aka events in the input fields and selection field and stores them in setInfoExpense
 const handleChange = (e) => {
  setInfoExpense({ ...infoExpense, [e.target.name]: e.target.value });
 };

 //submits the form and console logs the data
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(infoExpense);

  //spread data creates a new array and adds new data to the info expense
  setData([...data, infoExpense]);

  // text boxes are empty so user can enter new data
  setInfoExpense({
   selection: "",
   name: "",
   email: "",
   phonenumber: "",
  });
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
      value={infoExpense.selection}
      onChange={handleChange}
     >
      <option value="C++">c++</option>
      <option value="Placement">Placement</option>
      <option value="Java">Java</option>
      <option value="Python">Python</option>
     </select>
    </div>
    <div>
     <input
      type="text"
      name="name"
      placeholder="Name"
      value={infoExpense.name}
      onChange={handleChange}
     />
    </div>
    <div>
     <input
      type="email"
      name="email"
      placeholder="Email"
      value={infoExpense.email}
      onChange={handleChange}
     />
    </div>
    <div>
     <input
      type="number"
      name="phonenumber"
      placeholder="Phone Number"
      value={infoExpense.phonenumber}
      onChange={handleChange}
     />
    </div>
    <div>
     <button>Submit Contact</button>
    </div>
   </form>
   <ExpenseFormData data={data} />
  </div>
 );
};

export default Expenseform;
