import React from "react";

//passing form data as props from Expenseform.js
const ExpenseFormData = ({ data, setData }) => {
 console.log(data);

 //function that will delete form data
 const deleteSubmittedData = (index) => {
  // creates a  copy of the array data
  //this copy will then be used to update the data

  const deletedData = [...data];

  //then we delete it with splice with the index, that will be obtained from the map
  deletedData.splice(index, 1);

  // we then update the form with the new data
  setData(deletedData);
 };

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
       <button onClick={() => deleteSubmittedData(index)}>Delete</button>
      </div>
     ))}
    </div>
   )}
  </div>
 );
};

export default ExpenseFormData;
