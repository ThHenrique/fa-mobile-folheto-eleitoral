import React, {useEffect, useState} from 'react';

import {ScrollView, Text, TouchableOpacity, View, FlatList} from 'react-native';

import {CandidateCard} from '../../shared/components/CandidateCard';
import {styles} from './styles';
import {ICandidate} from '../../shared/interfaces/ICandidate';
import VotingIntentionService from '../../shared/services/VotingIntentionService';

export function VotingIntention() {
  const [candidates, setCandidates] = useState<Array<ICandidate>>([]);

  useEffect(() => {
    listCandidate();
  }, []);

  async function listCandidate() {
    const allCandidates = await VotingIntentionService.listVotingIntention();
    console.warn(allCandidates.length);

    setCandidates(allCandidates);
  }

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
        <FlatList
          data={candidates}
          renderItem={({item}) => (
            <CandidateCard
              key={item.id}
              id={item.id}
              name={item.NM_CANDIDATO}
              number={item.NR_CANDIDATO}
              role={item.DS_CARGO}
            />
          )}
        />
      </ScrollView>
      <Text style={styles.counterText}>3 Camdidatos</Text>
    </View>
  );
}
