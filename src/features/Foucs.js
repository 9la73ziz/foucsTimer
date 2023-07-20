import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Foucs = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to foucs on?"
          mode="outlined"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
