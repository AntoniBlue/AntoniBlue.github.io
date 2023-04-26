import React from 'react';
import './App.css';
import TaskList from './Components/TasksList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <h1>To do list</h1>
          <TaskList/>
        </main>
      </div>
    );
  }
}


export default App;
