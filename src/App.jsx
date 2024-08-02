import React, { useState } from 'react';

import './App.css'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Study Programming',
        completed: false,
      },
      {
        id: '2',
        title: 'Read books',
        completed: true,
      },    
    ])

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
};

export default App;