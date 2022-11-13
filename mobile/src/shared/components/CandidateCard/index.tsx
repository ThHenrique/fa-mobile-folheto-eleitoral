import React from 'react';

import {Image, Text, View} from 'react-native';

import {styles} from './styles';

export function CandidateCard() {
  return (
    <View style={styles.card}>
      <Image style={styles.candidateImage} />
      <View>
        <Text style={styles.cardTitle}>Lorem Ipsum doler</Text>
        <Text style={styles.roleText}>Governador</Text>
        <Text style={styles.candidateNumberText}>240</Text>
      </View>
    </View>
  );
}
