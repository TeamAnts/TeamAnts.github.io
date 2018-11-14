let players = [
    {
        name: 'Michael',
        score: 1100
    },
    {
        name: 'Aaron',
        score: 900
    }
];

function checkStorage() {
    const json = localStorage.getItem('players');
    if(json) {
        players = JSON.parse(json);
    }
}

function savePlayers() {
    localStorage.setItem('players', JSON.stringify(players));
}


const playersApi = {
    getAll() {
        checkStorage();
        return players;
    },

    add(player) {
        checkStorage();
    // 1. add to our array
        player.score = 0;
        players.push(player);
    // 2. save array to localStorage
        savePlayers();
    },
};

export default playersApi;
