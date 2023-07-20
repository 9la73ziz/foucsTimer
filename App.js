import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './src/utils/colors';
import { Foucs } from './src/features/Foucs';
import { Timer } from './src/features/Timer';
import { FoucsHistory } from './src/features/FoucsHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <LinearGradient
      colors={['orange', 'gold', 'orange']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Foucs addSubject={setCurrentSubject} />
            <FoucsHistory history={history} />
          </>
        ) : (
          <Timer
            foucsSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  gradient: {
    flex: 1,
  },
});
