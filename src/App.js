import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TaskList} />
        <Route path="/add" component={AddTask} />
      </div>
    </Router>
  );
}

export default App;
