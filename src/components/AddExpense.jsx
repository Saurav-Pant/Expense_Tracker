import React, { useState } from "react";
import "../styles/AddExpense.css";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const navigate=useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSaveClick = (event) => {
    // handle saving the data here
    setShowForm(true); // update showForm state to true
  };

  const buttonClick = (event) => {
    navigate('/create')
    setShowForm(true); 
  };

  return (
    <div>
      {showForm ? (
        <Create 
          title={title}
          amount={amount}
          date={date}
          description={description}
          handleTitleChange={handleTitleChange}
          handleAmountChange={handleAmountChange}
          handleDateChange={handleDateChange}
          handleDescriptionChange={handleDescriptionChange}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        <button className="Add_Button" onClick={buttonClick}>+</button>
      )}
    </div>
  );
};

export default AddExpense;
