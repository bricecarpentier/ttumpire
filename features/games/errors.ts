import { MetaError } from '../../utils/errors';

type GameMeta = {
  gameId: string;
};

export class GameNotFoundError extends MetaError<GameMeta> {
  constructor(gameId: string) {
    super('game not found', { gameId });
  }
}
