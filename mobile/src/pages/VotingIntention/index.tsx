import React, {useContext, useCallback, useState} from 'react';

import {
  StackActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import {AuthContext} from '../../shared/context/AuthContext';
import {ICandidate} from '../../shared/interfaces/ICandidate';
import {PropsStack} from '../../shared/types/rootStackParamList';
import VotingIntentionService from '../../shared/services/VotingIntentionService';

import {CandidateCard} from '../../shared/components/CandidateCard';
import SwipeableRow from '../../shared/components/Swipeable';
import {WarningLogin} from '../../shared/components/WarningLogin';

import {styles} from './styles';

export function VotingIntention() {
  const {userInfo} = useContext(AuthContext);

  const [candidates, setCandidates] = useState<Array<ICandidate>>([]);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation<PropsStack>();

  useFocusEffect(
    useCallback(() => {
      listCandidate();
    }, [userInfo]),
  );

  async function listCandidate() {
    if (userInfo) {
      const allCandidates = await VotingIntentionService.listVotingIntention();

      setCandidates(allCandidates);
    } else {
      setShowModal(true);
    }
  }

  async function removeVotingIntention(candidateId: string) {
    const response = await VotingIntentionService.removeVotingIntention(
      candidateId,
    );

    if (response) {
      const candidateListRefresh = candidates.filter(
        candidate => candidate._id !== candidateId,
      );

      setCandidates(candidateListRefresh);
    } else {
      Alert.alert('Não foi possível completar a operação, tente novamente!');
    }
  }

  function goToCandidate(candidate: ICandidate) {
    navigation.navigate('CandidateDetails', {
      id: candidate._id,
      name: candidate.NM_CANDIDATO,
    });
  }

  function goBack() {
    setShowModal(false);
    navigation.goBack();
  }

  function goToSignInPage() {
    setShowModal(false);
    navigation.dispatch(StackActions.replace('SignIn'));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="arrow-left" size={15} color="#111" />
      </TouchableOpacity>
      <Text style={styles.title}>Intenções de Voto</Text>

      {candidates.length > 0 && (
        <View style={styles.illustrateContainer}>
          <IconMI name="swipe" size={20} color="#111" />
          <Text style={styles.illustrateText}>
            Deslize em um item para opções
          </Text>
        </View>
      )}

      {candidates.length > 0 && (
        <View style={styles.votingIntentionList}>
          <Text style={styles.roleText}>Governador</Text>
          <FlatList
            data={candidates}
            renderItem={({item}) => (
              <SwipeableRow
                handleRemoveCandidate={() => removeVotingIntention(item._id)}
                handleShowCandidate={() => goToCandidate(item)}>
                <CandidateCard
                  key={item._id}
                  id={item._id}
                  name={item.NM_CANDIDATO}
                  number={item.NR_CANDIDATO}
                  role={item.DS_CARGO}
                  image={item.image?.base64}
                />
              </SwipeableRow>
            )}
          />
        </View>
      )}
      <Text style={styles.counterText}>
        {candidates.length} Candidatos encontrados
      </Text>

      <Modal animationType="slide" visible={showModal}>
        <WarningLogin handleGoBack={goBack} handleSignIn={goToSignInPage} />
      </Modal>
    </View>
  );
}
