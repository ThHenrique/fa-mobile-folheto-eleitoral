import React, {useEffect, useState} from 'react';

import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {PropsStack} from '../../shared/types/rootStackParamList';

import CandidateService from '../../shared/services/CandidateService';
import {ICandidate} from '../../shared/interfaces/ICandidate';

import useDebounce from '../../shared/hooks/useDebounce';

import {CandidateCard} from '../../shared/components/CandidateCard';

import {styles} from './styles';

export function SearchCandidate() {
  const [candidates, setCandidates] = useState<Array<ICandidate>>([]);
  const [search, setSearch] = useState('');

  const searchDebouncedChange = useDebounce(searchCandidate, 500);

  const navigation = useNavigation<PropsStack>();

  useEffect(() => {
    listCandidate();
  }, []);

  async function listCandidate() {
    const allCandidates = await CandidateService.listCandidates();

    setCandidates(allCandidates);
    setSearch('');
  }

  function handleInputSearchChange(text: string) {
    setSearch(text);
    searchDebouncedChange(text);
  }

  async function searchCandidate() {
    if (search.length === 0) {
      listCandidate();
      return;
    }

    const findCandidate = await CandidateService.getCandidate(search);

    if (findCandidate !== null) {
      setCandidates([findCandidate]);
    } else {
      Alert.alert('Opsss', 'Nenhum candidato encontrado, tente novamente!');
    }
  }

  function goToVotingIntention() {
    navigation.navigate('VotingIntention');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Encontre seu candidato</Text>
        <TouchableOpacity
          style={styles.votingIntentionSection}
          onPress={goToVotingIntention}>
          <Icon name="bookmark" size={24} color="#343A40" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputBoxView}>
        <TouchableOpacity style={styles.inputIcon} onPress={searchCandidate}>
          <Icon name="search" size={16} color="#5c8599" />
        </TouchableOpacity>
        <TextInput
          value={search}
          onChangeText={handleInputSearchChange}
          placeholder="Pesquisar"
          style={styles.inputBox}
        />
      </View>

      {search.length > 0 ? (
        <TouchableOpacity
          onPress={listCandidate}
          style={styles.cleanSearchView}>
          <Icon name="remove" size={14} color="#22215b" />
          <Text style={styles.cleanSearchText}> pesquisa</Text>
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
