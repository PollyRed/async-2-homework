import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const arrayBuffer = await read();
    const response = await json(arrayBuffer);
    return new GameSaving(JSON.parse(response));
  }
}
