import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/ui/Card';

function GameOverScereen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width > 380) {
    imageSize = 100;
  }

  if (height < 200) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
            Guess The Number [
            <Text style={styles.highlight}> {userNumber} </Text>]
          </Text>
        </Card>
        <PrimaryButton onPress={onStartNewGame}>Start New Game </PrimaryButton>
      </View>
    </ScrollView>
  );
}
export default GameOverScereen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 180 ? 150 : 300,
    // height: deviceWidth < 180 ? 150 : 300,
    // borderRadius: deviceWidth < 180 ? 75 : 150,
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
