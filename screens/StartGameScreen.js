import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({ onPickNumber }) {
  const [enterdNumber, setEneterdNumber] = useState('');

  function numberInputHandler(enterdText) {
    setEneterdNumber(enterdText);
  }

  function resetInputHandler() {
    setEneterdNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enterdNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number Has To Be Between 1 To 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter A Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enterdNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow500,
    borderBottomWidth: 2,
    color: Colors.primaryYellow500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    // Center horizontally
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
  },
  buttonContainer: {
    flex: 1,
  },
});
