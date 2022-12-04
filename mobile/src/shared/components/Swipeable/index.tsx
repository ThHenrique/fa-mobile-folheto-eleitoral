import React, {useRef} from 'react';
import {Animated} from 'react-native';

import {RectButton, Swipeable} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

import {styles} from './styles';

export default function SwipeableRow({
  handleRemoveCandidate,
  handleShowCandidate,
  children,
}) {
  const swipeableRow = useRef<Swipeable>(null);

  function renderLeftActions() {
    return (
      <RectButton style={styles.leftAction} onPress={handleShowCandidate}>
        <AnimatedIcon
          name="info"
          size={15}
          color="#fff"
          style={styles.infoIcon}
        />
      </RectButton>
    );
  }
  function renderRightActions() {
    return (
      <RectButton style={styles.rightAction} onPress={handleRemoveCandidate}>
        <AnimatedIcon
          name="trash-o"
          size={20}
          color="#fff"
          style={styles.trashIcon}
        />
      </RectButton>
    );
  }

  return (
    <Swipeable
      ref={swipeableRow}
      friction={2}
      leftThreshold={80}
      rightThreshold={41}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
}
