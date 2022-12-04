import {StyleSheet, I18nManager} from 'react-native';

export const styles = StyleSheet.create({
  leftAction: {
    width: 75,

    marginTop: 16,

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
  },
  infoIcon: {
    width: 45,
    height: 45,

    textAlign: 'center',
    textAlignVertical: 'center',

    backgroundColor: '#2f4b9c',

    borderRadius: 100,
  },

  trashIcon: {
    width: 45,
    height: 45,

    textAlign: 'center',
    textAlignVertical: 'center',

    backgroundColor: '#ec2300',

    borderRadius: 100,
  },

  rightAction: {
    width: 75,

    marginTop: 16,

    alignItems: 'center',
    justifyContent: 'flex-end',

    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});
