// import React from "react";
// import Home from "./components/Home";
// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };
// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
};

export default App;
