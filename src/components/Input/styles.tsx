import styled from '../../constants/styled';

export const Container = styled.View`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 0 10px;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.secondary,
}))`
  color: ${props => props.theme.colors.primary};
`;
