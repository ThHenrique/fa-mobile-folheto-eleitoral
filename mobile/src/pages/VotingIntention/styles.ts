import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F1F1',
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#5C8599',
  },

  illustrateContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  illustrateText: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 32,
    color: '#22215B',
  },

  roleText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    color: '#8fa7b2',
  },

  votingIntentionList: {
    marginTop: 32,
    height: 500,
  },

  counterText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 32,
    color: '#8FA7B2',

    textAlign: 'center',
  },
});
