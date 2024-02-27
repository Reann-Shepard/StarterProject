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
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask = (taskText) => {
    // make sure the task is not empty
    // make sure the task is not already in the list
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  }

  return (
    <SafeAreaView>
      <ToDoList items = {items} />
      <ToDoForm addTask={handleAddTask}/>
    </SafeAreaView>
  );
}

export default App;
