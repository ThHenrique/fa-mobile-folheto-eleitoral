import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 82, 173, 0.8)',

    padding: 50,
    flex: 1,
    justifyContent: 'center',
  },

  iconLogo: {
    backgroundColor: '#f1f1',
    alignSelf: 'center',

    width: 155,
    height: 155,
  },

  title: {
    marginTop: 16,

    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },

  simpleText: {
    marginTop: 16,

    fontSize: 16,
    fontWeight: '500',
    lineHeight: 32,
    color: '#ffffff',

    paddingHorizontal: 30,
    textAlign: 'center',
  },

  button: {
    marginTop: 36,

    backgroundColor: 'rgba(52, 82, 173, 0.8)',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    width: 120,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F2F2F3',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#fafafa',
  },
});
