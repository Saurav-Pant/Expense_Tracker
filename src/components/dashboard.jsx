import React from 'react';
import Header from './Header';
// import DatePicker from 'react-datepicker';
import '../styles/Dashboard.css';
import AddExpense from './AddExpense';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="wholeDashboard">
        {<div className="searchFilter">
          <input type="text" placeholder="Search expenses..." /> <br />
          <div className="sortFilter">
            <label htmlFor="sort">Sort by:</label><br/>
            <select name="sort" id="sort">
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
            <label htmlFor="date">Filter by date:</label>
            {/* <DateRangePicker /> */}
          </div>
        </div>}
      </div>
      <AddExpense/>
    </div>
  );
};

export default Dashboard;

