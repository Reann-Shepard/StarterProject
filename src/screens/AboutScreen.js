import React from 'react';
import MainLayout from '../layouts/MainLayout';

// Add an easter egg when the user taps the creator name
// Add a button to navigate to the HomeScreen

function AboutScreen() {
  return (
    <MainLayout>
      <SafeAreaView>
        <Text>
          My To Do List App{'\n'}
          Created by: Linden Wright{'\n'}
          Created on: March 5, 2024{'\n'}
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;
