import React from "react";

//passing form data as props from Expenseform.js
const ExpenseFormData = ({ data }) => {
 return (
  <div>
   <h1>Form Data Displayed Here</h1>
   {!data ? (
    <p>No data shown</p>
   ) : (
    <div>
     {data.map((el, index) => (
      <div key={index}>
       <p>{el.selection}</p>
       <p>{el.name}</p>
       <p>{el.email}</p>
       <p>{el.phonenumber}</p>
      </div>
     ))}
    </div>
   )}
  </div>
 );
};

export default ExpenseFormData;
