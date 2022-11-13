import React from 'react';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {CandidateCard} from '../../shared/components/CandidateCard';
import {styles} from './styles';

export function VotingIntention() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Intenções de Voto</Text>
      <View style={styles.illustrateContainer}>
        <Text style={styles.illustrateText}>ícone</Text>
        <Text style={styles.illustrateText}>
          Deslize em um item para removê-lo
        </Text>
      </View>
      <ScrollView style={styles.votingIntentionList}>
        <Text style={styles.roleText}>Governador</Text>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </ScrollView>
      <Text style={styles.counterText}>3 Camdidatos</Text>
    </View>
  );
}
