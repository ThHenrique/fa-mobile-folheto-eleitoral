import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface CandidateCardProps {
  name: string;
  role: string;
  number: number;
  image?: string;
}

export function CandidateCard({name, role, number}: CandidateCardProps) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.card}>
        <Image style={styles.candidateImage} />
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.roleText}>{role}</Text>
          <Text style={styles.candidateNumberText}>{number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
