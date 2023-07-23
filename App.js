import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as NavigationBar from 'expo-navigation-bar';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  NavigationBar.setVisibilityAsync('hidden');

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={['#400404', '#575756']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/Poker-Cards-and-Dices.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
