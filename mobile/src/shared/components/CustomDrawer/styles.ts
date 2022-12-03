import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    position: 'relative',
  },

  header: {
    height: 140,
    justifyContent: 'flex-end',
    marginBottom: '10%',
    marginLeft: 10,
  },

  goBackView: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  username: {
    marginTop: 10,
    fontSize: 18,
    color: '#22215b',
  },

  optionsView: {
    marginTop: '50%',
    justifyContent: 'flex-end',
  },

  optionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  signOutText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#7b7f9e',
  },
});
