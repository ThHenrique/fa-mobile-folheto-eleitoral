import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 6,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343A40',
  },

  inputBoxView: {
    backgroundColor: '#ffffff',

    borderWidth: 1.4,
    borderColor: '#d3e2e5',
    borderRadius: 20,
    height: 40,

    marginBottom: 6,

    flexDirection: 'row',
    alignItems: 'center',
  },

  inputBox: {
    flex: 1,

    fontWeight: '500',
    fontSize: 16,
    lineHeight: 32,
    color: '#5c8599',

    padding: 0,
  },

  inputIcon: {
    width: 16,
    marginHorizontal: 8,
  },

  votingIntentionSection: {
    width: 36,
    height: 36,

    justifyContent: 'center',
    alignItems: 'center',
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
