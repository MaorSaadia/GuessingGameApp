import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 24,
    marginBottom: 24,
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
});
