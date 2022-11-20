import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: '#f1f1f1',
  },

  goBackView: {
    position: 'absolute',

    backgroundColor: '#FFFFFF80',
    height: 30,
    width: 30,

    top: 20,
    left: 20,
    zIndex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  candidadeImage: {
    backgroundColor: '#111',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  candidateSection: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },

  candidateSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  voteText: {
    fontSize: 24,
  },

  numberVoteText: {
    fontSize: 32,
    fontWeight: '700',
  },

  candidateNameContainer: {
    marginVertical: 16,
  },

  fisrtNameText: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 5,
    textAlign: 'center',
  },

  lastNameText: {
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 15,
    textAlign: 'center',

    flexWrap: 'wrap',
  },

  aboutCandidateSection: {
    marginTop: 32,
  },

  aboutTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 32,
  },

  aboutText: {
    fontSize: 15,
    lineHeight: 32,
    color: '#868E96',
  },

  transparencyPortalSection: {
    marginTop: 24,
    paddingHorizontal: 20,
  },

  transparencyPortalRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginTop: 8,
  },

  transparencyPortalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2f4b9c',
  },
  transparencyPortalText: {
    fontSize: 16,
    color: '#2f4b9c',
  },
  transparencyPortalTextInfo: {
    fontSize: 16,
    color: '#22215B',
  },

  button: {
    marginTop: 16,

    backgroundColor: '#2f4b9c',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    height: 48,
    width: '100%',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#fafafa',
  },
});
