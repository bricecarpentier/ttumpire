import { MetaError } from '@tt:utils/errors';

type MatchMeta = {
  matchId: string;
};

export class MatchNotFoundError extends MetaError<MatchMeta> {
  constructor(matchId: string) {
    super('match not found', { matchId });
  }
}

export class MatchAlreadyExistsError extends MetaError<MatchMeta> {
  constructor(matchId: string) {
    super('match already exists', { matchId });
  }
}

export class GameNotFoundInMatchError extends MetaError<
  MatchMeta & { gameId: string }
> {
  constructor(matchId: string, gameId: string) {
    super('game not found in match', { matchId, gameId });
  }
}
