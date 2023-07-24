import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

// function pressHandler() {}

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // style={({ pressed }) =>
        //   pressed
        //     ? [styles.buttonInnerContainer, styles.pressed]
        //     : styles.buttonInnerContainer
        // }
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primaryYellow600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primaryRed500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  // For ios
  //   pressed: {
  //     opacity: 0.75,
  //   },
});
