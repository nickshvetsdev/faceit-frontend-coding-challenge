import React from 'react';
import {
  H6,
  Button,
  TournamentContainer,
  ButtonsContainer,
} from './components';

import { TournamentType } from './types';

interface TournamentProps {
  onEdit: any;
  onDelete: any;
  onDateFormat: any;
  tournament: TournamentType;
}

const Tournament = (props: TournamentProps) => {
  const { tournament, onEdit, onDelete, onDateFormat } = props;

  return (
    <TournamentContainer>
      <H6>{tournament.name}</H6>
      <span>Organizer: {tournament.organizer}</span>
      <span>Game: {tournament.game}</span>
      <span>
        Participants: {tournament.participants.current}/
        {tournament.participants.max}
      </span>
      <span>Start: {onDateFormat(tournament.startDate)}</span>
      <ButtonsContainer>
        <Button onClick={() => onEdit(tournament)}>Edit</Button>
        <Button onClick={() => onDelete(tournament.id)}>Delete</Button>
      </ButtonsContainer>
    </TournamentContainer>
  );
};

export default Tournament;
