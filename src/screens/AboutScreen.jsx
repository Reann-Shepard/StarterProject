import React from 'react';
import MainLayout from '../layouts/MainLayout';

// Add an easter egg when the user taps the creator name
// Add a button to navigate to the HomeScreen

function AboutScreen() {
  return (
    <MainLayout>
      <SafeAreaView>
          <Text style={styles.title}>About{'\n'}</Text>
          <Text style={styles.subtitle}>My To Do List App{'\n'}</Text>
          <Text style={styles.info}>Created by: Linden Wright{'\n'}</Text>
          <Text style={styles.info}>Created on: March 5, 2024{'\n'}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

// Create styles for the AboutScreen
const styles = StyleSheet.create({
  title : {
    fontSize: 24
  },
  subtitle : {
    fontSize: 20
  },
  info : {
    fontSize: 16
  }
});

export default AboutScreen;
