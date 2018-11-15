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
        score: 250
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
        score: 150
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
    // 1. add to our array
        player.score = 0;
        players.push(player);
        // 2. save array to localStorage
        savePlayers();
    },
    
    update(score) {
        const player = playersApi.getAll();
        player[player.length - 1].score = score;    
        
        savePlayers();
    }
    
};

export default playersApi;
