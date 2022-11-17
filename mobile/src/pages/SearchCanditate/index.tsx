import React, {useEffect, useState} from 'react';

import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import CandidateService from '../../shared/services/CandidateService';
import {ICandidate} from '../../shared/interfaces/ICandidate';

import {CandidateCard} from '../../shared/components/CandidateCard';

import {styles} from './styles';

export function SearchCandidate() {
  const [candidates, setCandidates] = useState<Array<ICandidate>>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    listCandidate();
  }, []);

  async function listCandidate() {
    const allCandidates = await CandidateService.listCandidates();

    setCandidates(allCandidates);
    setSearch('');
  }

  async function searchCandidate() {
    if (search.length === 0) {
      return;
    }

    const findCandidate = await CandidateService.getCandidate(search);

    if (findCandidate !== null) {
      setCandidates([findCandidate]);
    } else {
      Alert.alert('Opsss', 'Nenhum candidato encontrado, tente novamente!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBoxView}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Encontre seu candidato"
          style={styles.inputBox}
        />
        <TouchableOpacity style={styles.inputIcon} onPress={searchCandidate}>
          <Icon name="search" size={30} color="#5c8599" />
        </TouchableOpacity>
      </View>

      {search.length > 0 ? (
        <TouchableOpacity
          onPress={listCandidate}
          style={styles.cleanSearchView}>
          <Icon name="remove" size={14} color="#22215b" />
          <Text style={styles.cleanSearchText}>Limpar pesquisa</Text>
        </TouchableOpacity>
      ) : null}

      <ScrollView style={styles.candidateList}>
        <Text style={styles.roleText}>Governador</Text>
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            id={candidate.id}
            name={candidate.NM_CANDIDATO}
            role={candidate.DS_CARGO}
            number={candidate.NR_CANDIDATO}
          />
        ))}
      </ScrollView>
    </View>
  );
}
