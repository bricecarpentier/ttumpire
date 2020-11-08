import { MetaError } from '@tt:utils/errors';

type GameMeta = {
  gameId: string;
};

export class GameNotFoundError extends MetaError<GameMeta> {
  constructor(gameId: string) {
    super('game not found', { gameId });
  }
}

export class GameAlreadyExistsError extends MetaError<GameMeta> {
  constructor(gameId: string) {
    super('game already exists', { gameId });
  }
}
