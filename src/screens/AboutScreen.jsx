import React from 'react';
import MainLayout from '../layouts/MainLayout';

// Add an easter egg when the user taps the creator name
// Add a button to navigate to the HomeScreen

function AboutScreen() {
  // Create a state variable to hold the message
  const [message, setMessage] = React.useState('');

  // make asynchronous apiCall
  const apiCall = React.useCallback(async () => {
    await fetch('https://corporatebs-generator.sameerkumar.website', {
      method: 'GET',
    });

    /*
    const response = await fetch("https://10.0.2.2:3333/fact", {
      method: "GET",
    });
    */

    // Get the response from the api call
    const json = await response.json();

    // Get the phrase from the json
    const { phrase } = json;

    // Set the message state variable to the phrase
    setMessage(phrase);
  }, []);

  React.useEffect(() => {
    apiCall().then(() => {
      // Called when the api call finishes
    });
  });

  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.title}>About{'\n'}</Text>
        <Text style={styles.subtitle}>My To Do List App{'\n'}</Text>
        <Text style={styles.info}>Created by: Linden Wright{'\n'}</Text>
        <Text style={styles.info}>Created on: March 5, 2024{'\n'}</Text>
        <Text style={styles.info}>{'\n'}{message}{'\n'}</Text>
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
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 20,
  },
  info: {
    fontSize: 16,
  },
});

export default AboutScreen;
