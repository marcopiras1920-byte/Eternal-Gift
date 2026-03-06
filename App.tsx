import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  StatusBar,
  SafeAreaView,
  Modal,
  FlatList,
} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledSafeAreaView = styled(SafeAreaView);

const MOCK_DATA = {
  user: {
    name: 'Marco Rossi',
    email: 'marco.rossi@email.it',
    avatar: 'https://i.pravatar.cc/150?img=12',
    level: 'Intermedio',
    goals: 23,
    matches: 47,
    wins: 31,
  },
  matches: [
    {
      id: '1',
      date: 'Sab 14 Giu, 20:00',
      location: 'Campo Sportivo Centrale',
      address: 'Via Roma 45, Milano',
      players: 8,
      maxPlayers: 10,
      price: 8,
      organizer: 'Luca B.',
      level: 'Tutti i livelli',
      joined: true,
      playersList: ['Marco R.', 'Luca B.', 'Giovanni M.', 'Stefano P.', 'Andrea T.', 'Francesco L.', 'Davide C.', 'Matteo V.'],
    },
    {
      id: '2',
      date: 'Dom 15 Giu, 18:30',
      location: 'Arena Calcetto Nord',
      address: 'Via Garibaldi 12, Milano',
      players: 6,
      maxPlayers: 12,
      price: 10,
      organizer: 'Antonio V.',
      level: 'Intermedio',
      joined: false,
      playersList: ['Antonio V.', 'Roberto G.', 'Simone F.', 'Carlo M.', 'Nicola R.', 'Pietro S.'],
    },
    {
      id: '3',
      date: 'Mar 17 Giu, 21:00',
      location: 'Sport Village',
      address: 'Corso Buenos Aires 78, Milano',
      players: 4,
      maxPlayers: 10,
      price: 7,
      organizer: 'Alessio R.',
      level: 'Avanzato',
      joined: false,
      playersList: ['Alessio R.', 'Daniele C.', 'Massimo T.', 'Giorgio B.'],
    },
    {
      id: '4',
      date: 'Gio 19 Giu, 19:00',
      location: 'Centro Sportivo Est',
      address: 'Via Monza 33, Milano',
      players: 9,
      maxPlayers: 10,
      price: 9,
      organizer: 'Enrico M.',
      level: 'Principiante',
      joined: false,
      playersList: ['Enrico M.', 'Vito L.', 'Salvatore P.', 'Bruno G.', 'Carmelo R.', 'Aldo T.', 'Vittorio C.', 'Sergio F.', 'Luigi M.'],
    },
  ],
  notifications: [
    { id: '1', text: 'Luca B. ti ha invitato alla partita di Sabato', time: '2 min fa', read: false },
    { id: '2', text: 'La partita di Venerdì è quasi completa!', time: '1 ora fa', read: false },
    { id: '3', text: 'Hai segnato