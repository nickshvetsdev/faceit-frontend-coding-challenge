type Progress = {
  current: number;
  max: number;
};

export type TournamentType = {
  game: string;
  id: string;
  name: string;
  organizer: string;
  participants: Progress;
  startDate: Date;
};
