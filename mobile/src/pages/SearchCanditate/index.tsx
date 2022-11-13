import React from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';

import {CandidateCard} from '../../shared/components/CandidateCard';

import {styles} from './styles';

export function SearchCandidate() {
  return (
    <View style={styles.container}>
      <TextInput
        value=""
        placeholder="Encontre seu candidato"
        onChangeText={() => {}}
        style={styles.inputBox}
      />

      <ScrollView style={styles.candidateList}>
        <Text style={styles.roleText}>Governador</Text>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </ScrollView>
    </View>
  );
}
