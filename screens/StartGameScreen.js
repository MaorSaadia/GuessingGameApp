import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primaryRed400,
    borderRadius: 8,
    //Shadow For Android
    elevation: 6,
    //Shadow For IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
