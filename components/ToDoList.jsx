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

function ToDoList({ items }) {

  // Same function using a for loop
  //
  // const renderedItems = [];
  //
  // for (const item of items) {
  //   const rendered = (
  //     <Pressable key={item}>
  //       <View style={[styles.task]}>
  //         <Text style={styles.taskText}>{item}</Text>
  //       </View>
  //     </Pressable>
  //   );
  //
  //   renderedItems.push(rendered);
  // }
  //
  // return (
  //   <ScrollView>
  //     {renderedItems}
  //   </ScrollView>
  // );

  return (
    <ScrollView>
      {items.map((value, index) => {
        return (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{value}</Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );

    // Old version of hard coded list
    //
    // return (
    //     <>
    //     <ScrollView>
    //         <Pressable>
    //         <View style={[styles.task, styles.completed]}>
    //             <Text style={styles.taskText}>Do laundry</Text>
    //         </View>
    //         </Pressable>
    //         <Pressable>
    //         <View style={[styles.task]}>
    //             <Text style={styles.taskText}>Go to gym</Text>
    //         </View>
    //         </Pressable>
    //         <Pressable>
    //         <View style={[styles.task, styles.completed]}>
    //             <Text style={styles.taskText}>Walk dog</Text>
    //         </View>
    //         </Pressable>
    //     </ScrollView>
    //     </>
    // );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;