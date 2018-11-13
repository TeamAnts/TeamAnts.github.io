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

function savePlayers() {
    localStorage.setItem('players', JSON.stringify(players));
}

const playersApi = {
    getAll() {
        const json = localStorage.getItem('players');
        if(json) {
            players = JSON.parse(json);
        }
        return players;
    },
    add(player) {
    // 1. add to our array
        players.push(player);
    // 2. save array to localStorage
        savePlayers();
    },
};

export default playersApi;
