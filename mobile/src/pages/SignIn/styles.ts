import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 30,

    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#343A40',
  },

  textExplain: {
    marginTop: 24,

    fontSize: 16,
    fontWeight: '600',
    color: '#343A40',
    lineHeight: 24,
  },

  simpleText: {
    marginTop: 16,

    fontSize: 16,
    fontWeight: '500',
    lineHeight: 32,
    color: '#7b7f9e',
  },

  buttonInlineText: {
    textDecorationLine: 'underline',
  },

  form: {
    marginVertical: 30,
  },

  labelText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#343A40',
  },

  inputBoxView: {
    marginBottom: 6,
  },

  inputBox: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    color: '#5c8599',

    padding: 0,

    backgroundColor: '#ffffff',

    borderWidth: 1.4,
    borderColor: '#d3e2e5',
    borderRadius: 10,
    height: 40,

    paddingHorizontal: 20,
  },

  button: {
    marginTop: 36,

    backgroundColor: '#2f4b9c',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 40,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#fafafa',
  },

  textSignUp: {
    fontSize: 14,
    fontWeight: '500',
    color: '#343A40',
  },
});
