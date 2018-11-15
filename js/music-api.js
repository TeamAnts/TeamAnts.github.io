let songs = [
    {
        artist: 'Beck',
        title: 'Loser',
        genre:'Alternative',
        song: '/assets/music/Beck_Loser.wav'
        
    },
    {
        artist: 'Beethoven',
        title: '9th Symphony',
        genre:'Classical',
        song: '/assets/music/Beethoven_9th_Symphony.wav'
        
    },
    {
        artist: 'Britney Spears',
        title: 'Baby One More Time',
        genre:'Pop',
        song: '/assets/music/Britney_Spears_Baby_One_More_Time.wav'
        
    },
    {
        artist: 'Cher',
        title: 'If I Could Turn Back Time',
        genre:'Pop',
        song: '/assets/music/Cher_If_I_Could_Turn_Back_Time.wav'
       
    },
    {
        artist: 'Fleetwood Mac',
        title: 'Dreams',
        genre:'Rock',
        song: '/assets/music/Fleetwood_Mac_Dreams.wav'
       
    },
    {
        artist: 'Prince',
        title: 'Little Red Corvette',
        genre:'R&B',
        song: '/assets/music/Prince_Little_Red_Corvette.wav'
       
    },
    {
        artist: 'Sir Mix A Lot',
        title: 'Baby Got Back',
        genre:'Rap',
        song: '/assets/music/Sir_Mix_A_Lot_Baby_Got_Back.wav'
       
    },
    {
        artist: 'B-52s',
        title: 'Rock Lobster',
        genre:'Alternative',
        song: '/assets/music/The_B-52s_Rock_Lobster.wav'
       
    },
    {
        artist: 'The Comodores',
        title: 'Easy',
        genre:'R&B',
        song: '/assets/music/The_Commodores_Easy.wav'
       
    },
    {
        artist: 'The Lion King',
        title: 'Hakuna',
        genre:'Kids',
        song: '/assets/music/The_Lion_King_Hakuna_Matata.wav'
       
    }
];

const musicApi = {
    getAll() {
        return songs;
    }
};
export default musicApi;