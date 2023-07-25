import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess} </Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryRed400,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primaryYellow500,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    //For ios
  },
});
