/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      {/* Import ToDoList */}
      <ToDoList />
      {/* Import ToDoForm */}
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
