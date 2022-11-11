import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
`;
