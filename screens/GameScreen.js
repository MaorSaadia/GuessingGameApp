import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberCotainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

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

function GameScreen({ userNumber }) {
  const intialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  function nextGuessHandler(direction) {
    if (direction === 'lower' && currentGuess < userNumber) {
      Alert.alert("Don't Lie", 'The Number Should Be Greater', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    } else if (direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Don't Lie", 'The Number Should Be Lower', [
        { text: 'Sorry', style: 'cancel' },
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
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
        </View>
      </View>
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
});
