import React from 'react';
import Login from './Login';
import "../styles/Home.css"
const Home = () => {
  return (
    <div className='whole'>
        <div className='logo'>
            <h1>Expense<br/> <span> Tracker</span></h1>
        </div>
      <Login />
    </div>
  );
};

export default Home;