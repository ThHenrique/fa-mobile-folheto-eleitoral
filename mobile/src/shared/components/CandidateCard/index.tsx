import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {PropsStack} from '../../types/rootStackParamList';

import {styles} from './styles';

interface CandidateCardProps {
  id: string;
  name: string;
  role: string;
  number: number;
  image?: string;
}

export function CandidateCard({
  id,
  name,
  role,
  number,
  image,
}: CandidateCardProps) {
  const navigation = useNavigation<PropsStack>();

  function goToCandidate() {
    navigation.navigate('CandidateDetails', {
      id,
      name,
    });
  }

  return (
    <TouchableOpacity onPress={goToCandidate}>
      <View style={styles.card}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={styles.candidateImage}
        />
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.roleText}>{role}</Text>
          <Text style={styles.candidateNumberText}>{number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
