import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export function CandidateDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.candidadeImage} />
      <View style={styles.candidateSection}>
        <View>
          <Text style={styles.voteText}>Vote</Text>
          <Text style={styles.numberVoteText}>000000</Text>
        </View>
        <View style={styles.candidateNameContainer}>
          <Text style={styles.fisrtNameText}>LoremIpsum</Text>
          <Text style={styles.lastNameText}>LoremIpsum</Text>
        </View>
        <View style={styles.aboutCandidateSection}>
          <Text style={styles.aboutTitle}>Lorem Ipsum</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
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
