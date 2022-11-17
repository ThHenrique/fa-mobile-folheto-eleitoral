import React, {useEffect, useState} from 'react';

import {useRoute, RouteProp} from '@react-navigation/native';

import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

import {RootStackParamList} from '../../shared/types/rootStackParamList';
import CandidateService from '../../shared/services/CandidateService';
import {ICandidate} from '../../shared/interfaces/ICandidate';

export function CandidateDetails() {
  const [candidate, setCandidate] = useState<ICandidate>();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const route = useRoute<RouteProp<RootStackParamList, 'CandidateDetails'>>();

  useEffect(() => {
    getCandidate();
  }, []);

  async function getCandidate() {
    const {name} = route.params;

    const findCandidate = await CandidateService.getCandidate(name);

    if (findCandidate == null) {
      return Alert.alert(
        'Opss...',
        'Algo de errado aconteceu, tente novamente!',
      );
    }

    const [fisrt, ...middle] = findCandidate.NM_URNA_CANDIDATO.split(' ');

    setFirstname(fisrt);
    setLastname(middle.join(' '));

    setCandidate(findCandidate);

    return;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.candidadeImage} />
      <View style={styles.candidateSection}>
        <View style={styles.candidateNameContainer}>
          <Text style={styles.fisrtNameText}>{firstname}</Text>
          <Text style={styles.lastNameText}>{lastname}</Text>
        </View>
        <View style={styles.candidateSectionHeader}>
          <View>
            <Text style={styles.voteText}>{candidate?.DS_CARGO}</Text>
            <Text style={styles.numberVoteText}>{candidate?.SG_PARTIDO}</Text>
          </View>
          <View>
            <Text style={styles.voteText}>Vote</Text>
            <Text style={styles.numberVoteText}>{candidate?.NR_CANDIDATO}</Text>
          </View>
        </View>
        <View style={styles.aboutCandidateSection}>
          <Text style={styles.aboutTitle}>Sobre o candidato</Text>
          <Text style={styles.aboutText}>
            {candidate?.NM_CANDIDATO}, {candidate?.NR_IDADE_DATA_POSSE} anos,
            {'\n'}
            {candidate?.DS_GRAU_INSTRUCAO}, {candidate?.DS_ESTADO_CIVIL}
            {'\n'}
            {candidate?.DS_OCUPACAO}
          </Text>
          <Text style={styles.aboutText}>
            Nascionalidade {candidate?.DS_NACIONALIDADE}
            {'\n'}
            Natural de {candidate?.NM_MUNICIPIO_NASCIMENTO},{' '}
            {candidate?.SG_UF_NASCIMENTO}.
          </Text>
          <Text style={styles.aboutText}>
            Email: {candidate?.NM_EMAIL} {'\n'}
            CPF: {candidate?.NR_CPF_CANDIDATO} {'\n'}
            Partido {candidate?.SG_PARTIDO}, {candidate?.NM_PARTIDO}
            {'\n'}
            Concorre ao cargo {candidate?.DS_CARGO} em {candidate?.NM_UE}.
          </Text>
          <Text style={styles.aboutText}>
            Despesas de campanha:{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(candidate?.VR_DESPESA_MAX_CAMPANHA ?? 0)}
          </Text>
        </View>
        <View style={styles.transparencyPortalSection}>
          <View style={styles.transparencyPortalRow}>
            <Text style={styles.transparencyPortalTitle}>LoremIpsum</Text>
            <Text style={styles.transparencyPortalText}>LoremIpsum</Text>
          </View>
          <View style={styles.transparencyPortalRow}>
            <Text style={styles.transparencyPortalText}>Lorem</Text>
            <Text style={styles.transparencyPortalTextInfo}>Ipsum</Text>
          </View>
          <View style={styles.transparencyPortalRow}>
            <Text style={styles.transparencyPortalText}>Lorem</Text>
            <Text style={styles.transparencyPortalTextInfo}>Ipsum</Text>
          </View>
          <View style={styles.transparencyPortalRow}>
            <Text style={styles.transparencyPortalText}>Lorem</Text>
            <Text style={styles.transparencyPortalTextInfo}>Ipsum</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INTENÇÃO DE VOTO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
