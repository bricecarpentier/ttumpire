import { MetaError } from '../../utils/errors';

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
