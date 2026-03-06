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
  FlatList,
  Modal,
  Switch,
} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_DATA = {
  user: {
    id: '1',
    name: 'Marco Rossi',
    email: 'marco.rossi@email.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    level: 'Intermedio',
    matchesPlayed: 47,
    goals: 23,
    rating: 4.7,
  },
  matches: [
    {
      id: '1',
      title: 'Calcetto al Parco Nord',
      date: 'Sab 14 Dic',
      time: '18:00',
      location: 'Campo Sportivo Parco Nord, Milano',
      price: 8,
      totalSlots: 10,
      bookedSlots: 7,
      level: 'Intermedio',
      organizer: 'Luca B.',
      players: [
        { id: '1', name: 'Luca B.', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: '2', name: 'Sara M.', avatar: 'https://i.pravatar.cc/150?img=5' },
        { id: '3', name: 'Toni V.', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: '4', name: 'Gianni R.', avatar: 'https://i.pravatar.cc/150?img=8' },
        { id: '5', name: 'Alex F.', avatar: 'https://i.pravatar.cc/150?img=6' },
        { id: '6', name: 'Marta C.', avatar: 'https://i.pravatar.cc/150?img=9' },
        { id: '7', name: 'Paolo S.', avatar: 'https://i.pravatar.cc/150?img=11' },
      ],
      color: '#6366f1',
      joined: false,
    },
    {
      id: '2',
      title: 'Partitella Serale',
      date: 'Dom 15 Dic',
      time: '20:30',
      location: 'Centro Sportivo Lambrate, Milano',
      price: 10,
      totalSlots: 12,
      bookedSlots: 5,
      level: 'Avanzato',
      organizer: 'Federico L.',
      players: [
        { id: '1', name: 'Federico L.', avatar: 'https://i.pravatar.cc/150?img=13' },
        { id: '2', name: 'Elena P.', avatar: 'https://i.pravatar.cc/150?img=15' },
        { id: '3', name: 'Marco T.', avatar: 'https://i.pravatar.cc/150?img=17' },
        { id: '4', name: 'Anna K.', avatar: 'https://i.pravatar.cc/150?img=20' },
        { id: '5', name: 'Riccardo M.', avatar: 'https://i.pravatar.cc/150?img=22' },
      ],
      color: '#ec4899',
      joined: false,
    },
    {
      id: '3',
      title: 'Torneo Am