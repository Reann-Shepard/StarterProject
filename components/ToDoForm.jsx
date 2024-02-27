import React, { Component } from 'react';
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

  const [taskText, setTaskText] = React.useState('');

  const handleChangeText = (taskText) => {
    setTaskText(taskText);
  }

  const handlePress = () => {
    addTask();
  };

  // clear the input field after adding a task
  const addTask = (taskText) => {
    addTask(taskText);
    setTaskText('');
  }

    return (
        <>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={handleChangeText}
                value={taskText}
                />
                <Button title="Add Task" onPress={handlePress} />
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