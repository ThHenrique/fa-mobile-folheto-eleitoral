import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    paddingTop: 15,
    paddingHorizontal: 20,
    marginTop: 16,

    backgroundColor: '#ffffff',
    borderRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1.4,
    borderColor: '#d3e2e5',
  },

  candidateImage: {
    marginRight: 16,
    width: 60,
    height: 70,

    background: '#000000',
  },

  cardTitle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,

    flexWrap: 'wrap',
    maxWidth: 270,

    color: '#22215b',
  },

  roleText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 32,

    color: '#8fa7b2',
  },

  candidateNumberText: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,

    color: '#4364c7',
  },
});
