let gameData = [];
// let musicData = [];

function saveGame() {
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

// function saveMusic() {
//     localStorage.setItem('musicData', JSON.stringify(musicData));
// }

const gameApi = {
    getAll() {
        const json = localStorage.getItem('gameData');
        if(json) {
            gameData = JSON.parse(json);
        }
        return gameData;
    },
    addGame(game) {
        gameData.push(game);
        saveGame();
    },
    // I don't think this is used
    // addSong(song) {
    //     musicData.push(song);
    //     saveMusic();
    // }
};
export default gameApi;