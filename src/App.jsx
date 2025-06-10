import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigaate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
