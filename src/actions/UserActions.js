import { UPDATE_HOSTED_GAMES } from '../constants';

export const removeHostedGame = (hostedGames, gameToRemove) => {
  updated = hostedGames.filter((game) => {
    return (game.id != gameToRemove.id);
  });
  return ({
    type: UPDATE_HOSTED_GAMES,
    payload: updated,
  });
};