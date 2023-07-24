import { View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import NumberCotainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';

function generateRandomBetween(min, max, exclude) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (direction === 'lower' && currentGuess < userNumber) {
      Alert.alert("Don't Lie", 'The Number Should Be Greater', [
        { text: 'Sorry', style: 'Cancel' },
      ]);
      return;
    } else if (direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Don't Lie", 'The Number Should Be Lower', [
        { text: 'Sorry', style: 'Cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberCotainer>{currentGuess}</NumberCotainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <AntDesign name="upcircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <AntDesign name="downcircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 45,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
  },
  buttonContainer: {
    flex: 1,
  },
});
