let songs = [
    {
        artist: 'Alicia Keys ',
        title: 'No One',
        genre:'popular',
        song: '/assets/music/Alicia_Keys_No_One.wav'
        
    },
    {
        artist: 'Beck',
        title: 'Loser',
        genre:'alternative',
        song: '/assets/music/Beck_Loser.wav'
        
    },
    {
        artist: 'Alicia Keys',
        title: 'Fallin',
        genre:'popular',
        song: '/assets/music/Alicia_Keys_Fallin.wav'

    },
    {
        artist: 'Christina Aguilera',
        title: 'Genie In A Bottle',
        genre:'popular',
        song: '/assets/music/Christina_Aguilera_Genie_In_A_Bottle.wav'

    },
    {
        artist: 'FKA Twigs',
        title: 'Two Weeks',
        genre:'popular',
        song: '/assets/music/FKA_Twigs_Two_Weeks.wav'

    },
    {
        artist: 'Grimes',
        title: 'Kill V. Maim',
        genre:'popular',
        song: '/assets/music/Grimes_Kill_V_Maim.wav'

    },
    {
        artist: 'Lady Ga Ga',
        title: 'Perfect Illusion',
        genre:'popular',
        song: '/assets/music/Lady_Gaga_Perfect_Illusion.wav'

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
        genre:'popular',
        song: '/assets/music/Britney_Spears_Baby_One_More_Time.wav'
        
    },
    {
        artist: 'Cher',
        title: 'If I Could Turn Back Time',
        genre:'popular',
        song: '/assets/music/Cher_If_I_Could_Turn_Back_Time.wav'
       
    },
    {
        artist: 'Fleetwood Mac',
        title: 'Dreams',
        genre:'Rock',
        song: '/assets/music/Fleetwood_Mac_Dreams.wav'
       
    },
    {
        artist: 'Ariana Grande',
        title: 'Get Well Soon',
        genre:'popular',
        song: '/assets/music/Ariana_Grande_Get_Well_Soon.wav'

    },
    {
        artist: 'Selena Gomez',
        title: 'Back to You',
        genre:'popular',
        song: '/assets/music/Selena_Gomez_Back_To_You.wav'

    },
    {
        artist: 'Madonna',
        title: 'Into the Groove',
        genre:'popular',
        song: '/assets/music/Madonna_Into_the_Groove.wav'

    },
    {
        artist: 'Janet Jackson',
        title: 'Rhythm Nation',
        genre:'popular',
        song: '/assets/music/Janet_Jackson_Rhythm_Nation.wav'

    },
    {
        artist: 'Snap',
        title: 'Rhythm is a Dancer',
        genre:'popular',
        song: '/assets/music/Snap_Rhythm_is_a_Dancer.wav'

    },
    {
        artist: 'Beyoncé',
        title: 'Formation',
        genre:'popular',
        song: '/assets/music/Beyoncé_Formation.wav'

    },
    {
        artist: 'Prince',
        title: 'Little Red Corvette',
        genre:'rb',
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
        genre:'alternative',
        song: '/assets/music/The_B-52s_Rock_Lobster.wav'
       
    },
    {
        artist: 'The Comodores',
        title: 'Easy',
        genre:'rb',
        song: '/assets/music/The_Commodores_Easy.wav'
       
    },
    {
        artist: 'Taylor Swift',
        title: 'State of Grace',
        genre:'popular',
        song: '/assets/music/Taylor_Swift_State_of_Grace.wav'

    },
    {
        artist: 'The Lion King',
        title: 'Hakuna Matata',
        genre:'kids',
        song: '/assets/music/The_Lion_King_Hakuna_Matata.wav'
       
    },
    {
        artist: 'Katy Perry',
        title: 'Hey Hey Hey',
        genre:'popular',
        song: '/assets/music/Katy_Perry_Hey_Hey_Hey.wav'

    }
];

// console.log(songs.filter(song => song.genre === 'popular'));

const musicApi = {
    getAll(genre) {
        let filtered = songs.filter(song => song.genre === genre);
        console.log('filtered', filtered);
        return filtered;
    }
}; 


// const musicApi = {
//     getAll() {
//         return songs;
//     }
// };

// songs.genre.forEach(function(songs) {
//     console.log(songs.genre);

// });
 
export default musicApi;