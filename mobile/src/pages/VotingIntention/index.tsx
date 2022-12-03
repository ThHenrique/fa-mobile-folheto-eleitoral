import React, {useContext, useEffect, useState} from 'react';

import {StackActions, useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity, View, FlatList, Modal} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../../shared/context/AuthContext';
import {ICandidate} from '../../shared/interfaces/ICandidate';
import {PropsStack} from '../../shared/types/rootStackParamList';
import VotingIntentionService from '../../shared/services/VotingIntentionService';

import {CandidateCard} from '../../shared/components/CandidateCard';
import {WarningLogin} from '../../shared/components/WarningLogin';

import {styles} from './styles';

export function VotingIntention() {
  const {userInfo} = useContext(AuthContext);

  const [candidates, setCandidates] = useState<Array<ICandidate>>([]);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation<PropsStack>();

  useEffect(() => {
    listCandidate();
  }, [userInfo]);

  async function listCandidate() {
    if (userInfo) {
      const allCandidates = await VotingIntentionService.listVotingIntention();

      setCandidates(allCandidates);
    } else {
      setShowModal(true);
    }
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
      <View style={styles.illustrateContainer}>
        <Text style={styles.illustrateText}>ícone</Text>
        <Text style={styles.illustrateText}>
          Deslize em um item para removê-lo
        </Text>
      </View>

      {candidates.length > 0 && (
        <View style={styles.votingIntentionList}>
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
        </View>
      )}
      <Text style={styles.counterText}>3 Camdidatos</Text>

      <Modal animationType="slide" visible={showModal}>
        <WarningLogin handleGoBack={goBack} handleSignIn={goToSignInPage} />
      </Modal>
    </View>
  );
}
