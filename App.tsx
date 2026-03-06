import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  Image,
  Switch,
  Modal,
  FlatList,
} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

const MOCK_DATA = {
  user: {
    name: 'Marco Rossi',
    email: 'marco.rossi@email.it',
    avatar: 'MR',
    balance: 45.0,
  },
  matches: [
    {
      id: '1',
      title: 'Partita di Calcetto',
      date: 'Sabato 14 Dic',
      time: '20:00',
      location: 'Campo Sportivo Centro',
      players: ['Marco R.', 'Luca B.', 'Giovanni T.', 'Paolo M.', 'Andrea S.'],
      maxPlayers: 10,
      price: 8,
      status: 'open',
      organizer: 'Marco R.',
      level: 'Intermedio',
    },
    {
      id: '2',
      title: 'Calcetto 5vs5',
      date: 'Domenica 15 Dic',
      time: '18:30',
      location: 'Arena Sport Club',
      players: ['Stefano L.', 'Davide C.', 'Filippo N.', 'Roberto G.', 'Matteo V.', 'Simone P.', 'Cristian B.', 'Enrico F.'],
      maxPlayers: 10,
      price: 10,
      status: 'almost_full',
      organizer: 'Stefano L.',
      level: 'Avanzato',
    },
    {
      id: '3',
      title: 'Amichevole Serale',
      date: 'Lunedì 16 Dic',
      time: '21:00',
      location: 'PalaSport Nord',
      players: ['Antonio R.', 'Giuseppe M.'],
      maxPlayers: 10,
      price: 6,
      status: 'open',
      organizer: 'Antonio R.',
      level: 'Principiante',
    },
  ],
  myMatches: [
    {
      id: '1',
      title: 'Partita di Calcetto',
      date: 'Sabato 14 Dic',
      time: '20:00',
      location: 'Campo Sportivo Centro',
      paid: true,
    },
    {
      id: '4',
      title: 'Torneo Settimanale',
      date: 'Mercoledì 11 Dic',
      time: '19:00',
      location: 'Campo Nord',
      paid: false,
    },
  ],
  notifications: [
    { id: '1', text: 'La partita di Sabato è quasi al completo!', time: '2h fa', read: false },
    { id: '2', text: 'Marco ti ha invitato a una partita', time: '5h fa', read: false },
    { id: '3', text: 'Pagamento confermato per Torneo Serale', time: '1g fa', read: true },
    { id: '4', text: 'Nuova partita nella tua zona', time: '2g fa', read: true },
  ],
};

type Screen = 'home' | 'explore' | 'create' | 'mymatches' | 'profile';

const COLORS = {
  primary: '#4F46E5',
  secondary: '#7C3AED',
  accent: '#10B981',