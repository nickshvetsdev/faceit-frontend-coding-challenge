import styled from 'styled-components';
import theme from '../../theme';

const TournamentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${theme.palette.background.base};
  padding: 12px;
  box-sizing: border-box;
`;

export default TournamentContainer;
