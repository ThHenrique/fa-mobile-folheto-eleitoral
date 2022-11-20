import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',

    padding: 50,
    flex: 1,
    justifyContent: 'center',
  },

  iconLogo: {
    alignSelf: 'center',

    width: 155,
    height: 155,
  },

  welcomeText: {
    marginTop: 24,

    fontSize: 18,
    color: '#22215b',
  },

  projectNameText: {
    marginTop: 16,

    fontSize: 38,
    fontWeight: '700',
    color: '#2f4b9c',
  },

  projectNameOrangeText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#e1820e',
  },

  simpleText: {
    marginTop: 16,

    fontSize: 16,
    fontWeight: '500',
    lineHeight: 32,
    color: '#7b7f9e',
  },

  button: {
    marginTop: 36,

    backgroundColor: '#2f4b9c',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    width: 150,
    height: 48,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#fafafa',
  },
});
