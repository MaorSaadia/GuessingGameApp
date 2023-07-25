import { Image, View, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/ui/Card';

function GameOverScereen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success1.jpg')}
        />
        <View style={styles.overlay} />
      </View>
      <Card>
        <Text style={styles.summaryText}>
          Your Phone Needed [
          <Text style={styles.highlight}> {roundsNumber} </Text>] Rounds To
          Guess The Number [<Text style={styles.highlight}> {userNumber} </Text>
          ]
        </Text>
      </Card>
      <PrimaryButton onPress={onStartNewGame}>Start New Game </PrimaryButton>
    </View>
  );
}
export default GameOverScereen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginTop: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  summaryText: {
    //fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primaryYellow500,
  },
});
