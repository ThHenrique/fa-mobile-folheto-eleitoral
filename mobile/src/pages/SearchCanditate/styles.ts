import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
  },

  inputBoxView: {
    backgroundColor: '#ffffff',

    borderWidth: 1.4,
    borderColor: '#d3e2e5',
    borderRadius: 20,
    height: 56,

    marginBottom: 6,

    flexDirection: 'row',
    alignItems: 'center',
  },

  inputBox: {
    flex: 1,
    paddingHorizontal: 24,

    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    color: '#5c8599',
  },

  inputIcon: {
    width: 40,
  },

  cleanSearchView: {
    marginBottom: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  cleanSearchText: {
    color: '#22215b',
    fontWeight: '500',
    textDecorationLine: 'underline',

    marginLeft: 5,
  },

  candidateList: {
    marginTop: 16,
  },

  roleText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    color: '#8fa7b2',
  },
});
