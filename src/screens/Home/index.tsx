import React from 'react';
import { StatusBar } from 'react-native';

import * as S from './styles';

export const Home = () => (
  <S.Container>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />

    <S.Title>Hello World</S.Title>
  </S.Container>
);
