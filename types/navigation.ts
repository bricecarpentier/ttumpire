export type RootStackParamList = {
  home: undefined;
  'choose-rule': {
    matchId: string;
  };
  ingame: {
    matchId: string;
    gameId: string;
  };
  timer: {
    matchId: string;
    gameId: string;
  };
};
