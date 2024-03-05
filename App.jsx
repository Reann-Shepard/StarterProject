/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

// ********************************************** //

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    // make sure the task is not empty
    // make sure the task is not already in the list
    if (task && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  }

  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks} />
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}

export default App;
