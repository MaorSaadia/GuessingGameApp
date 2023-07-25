import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberCotainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberCotainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryYellow500,
    padding: deviceWidth < 180 ? 12 : 24,
    margin: deviceWidth < 180 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primaryYellow500,
    fontSize: deviceWidth < 180 ? 24 : 36,
    fontWeight: 'bold',
    //fontFamily: 'open-sans-bold',
  },
});
