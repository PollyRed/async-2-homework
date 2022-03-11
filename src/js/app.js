import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const loadedData = await GameSavingLoader.load();
    return loadedData;
  } catch (error) {
    throw new Error(error);
  }
})();
