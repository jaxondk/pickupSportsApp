import { UPDATE_HOSTED_GAMES } from '../constants';

export const removeHostedGame = (hostedGames, gameToRemove) => {
  updated = hostedGames.filter((game) => {
    console.log('game ID: ',game.id)
    console.log('gameToRemove ID: ', gameToRemove.id)
    console.log('return val: ', game.id != gameToRemove.id)
    return (game.id != gameToRemove.id);
  });
  console.log('updated games: ', updated)
  return ({
    type: UPDATE_HOSTED_GAMES,
    payload: updated,
  });
};