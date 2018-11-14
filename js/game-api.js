let gameData = [];

function saveGame() {
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

const gameApi = {
    getAll() {
        const json = localStorage.getItem('gameData');
        if(json) {
            gameData = JSON.parse(json);
        }
        return gameData;
    },
    add(game) {
        this.getAll();
        gameData.push(game);

        saveGame();
    }

};
export default gameApi;