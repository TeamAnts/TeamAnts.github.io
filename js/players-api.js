let players = [
    {
        name: 'Aaron',
        score: 900
    },
    {
        name: 'Michael',
        score: 900
    },
    {
        name: 'Bob-Rita',
        score: 900
    },
    {
        name: 'Joey-Bobby',
        score: 200
    },
    {
        name: 'Erin',
        score: 900
    },
    {
        name: 'Carmen',
        score: 900
    },
    {
        name: 'Teonna',
        score: 100
    },
    {
        name: 'Kevin',
        score: 100
    },
    {
        name: 'mJordan',
        score: 100
    },
    {
        name: 'Sarah',
        score: 700
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

        player.score = 0;
        players.push(player);

        savePlayers();
    },
    getCurrent() {
        const players = this.getAll();
        return players[players.length - 1];
    },
    update(score) {
        const player = this.getCurrent();
        player.score = score;    
        
        savePlayers();
    }
};

export default playersApi;
