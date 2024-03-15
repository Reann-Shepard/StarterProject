import React, { useState, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  // Create a state variable to hold the tasks
  const [tasks, setTasks] = useState([]);

  // Use useEffect hook to fetch tasks from tasks.json in the data folder
  const tasksCall = async () => {
    // retrieve the tasks from the tasks.json file
    const response = await fetch('data/tasks.json');

    // Get the response from the api call
    const json = await response.json();

    // Get the tasks from the json
    const { tasks } = json;

    // Set the tasks state variable to the tasks
    setTasks(tasks);
  };

  React.useEffect(() => {
    tasksCall().then(() => {
      // Called when the api call finishes
    });
  });

  const handleChangeTaskText = (task) => {
    setTaskText(task);
  }

  const handlePress = () => {
    addTask(taskText);
    // clear the input field after adding a task
    setTaskText('');
  };

  // Implement a function (e.g., handleAddTask) in the "TodoForm" component to randomly
  // select a task from the fetched tasks when the user clicks the "Generate Random Task" button.
  // The selected task should be added to the input field.
  const handleAddTask = () => {
    // get a random task from the tasks
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    // set the task text to the random task
    setTaskText(randomTask);
  }

    return (
        <>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={handleChangeTaskText}
                value={taskText}
                />
                <Button title="Add Task" onPress={handlePress} />
                <Button title="Generate Random Task" onPress={handleAddTask} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;