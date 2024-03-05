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

  const handleChangeTaskText = (task) => {
    setTaskText(task);
  }

  const handlePress = () => {
    addTask(taskText);
    // clear the input field after adding a task
    setTaskText('');
  };

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