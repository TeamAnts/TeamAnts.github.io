let songs = [
    {
        artist: 'Alicia Keys ',
        title: 'No One',
        genre:'Pop',
        song: '/assets/music/Alicia_Keys_No_One.wav'
        
    },
    {
        artist: 'Beck',
        title: 'Loser',
        genre:'Alternative',
        song: '/assets/music/Beck_Loser.wav'
        
    },
    {
        artist: 'Alicia Keys',
        title: 'Fallin',
        genre:'Pop',
        song: '/assets/music/Alicia_Keys_Fallin.wav'

    },
    {
        artist: 'Christina Aguilera',
        title: 'Genie In A Bottle',
        genre:'Pop',
        song: '/assets/music/Christina_Aguilera_Genie_In_A_Bottle.wav'

    },
    {
        artist: 'FKA Twigs',
        title: 'Two Weeks',
        genre:'Pop',
        song: '/assets/music/FKA_Twigs_Two_Weeks.wav'

    },
    {
        artist: 'Grimes',
        title: 'Kill V. Maim',
        genre:'Pop',
        song: '/assets/music/Grimes_Kill_V_Maim.wav'

    },
    {
        artist: 'Lady Ga Ga',
        title: 'Perfect Illusion',
        genre:'Pop',
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
        artist: 'Ariana Grande',
        title: 'Get Well Soon',
        genre:'Pop',
        song: '/assets/music/Ariana_Grande_Get_Well_Soon.wav'

    },
    {
        artist: 'Selena Gomez',
        title: 'Back to You',
        genre:'Pop',
        song: '/assets/music/Selena_Gomez_Back_To_You.wav'

    },
    {
        artist: 'Madonna',
        title: 'Into the Groove',
        genre:'Pop',
        song: '/assets/music/Madonna_Into_the_Groove.wav'

    },
    {
        artist: 'Janet Jackson',
        title: 'Rhythm Nation',
        genre:'Pop',
        song: '/assets/music/Janet_Jackson_Rhythm_Nation.wav'

    },
    {
        artist: 'Snap',
        title: 'Rhythm is a Dancer',
        genre:'Pop',
        song: '/assets/music/Snap_Rhythm_is_a_Dancer.wav'

    },
    {
        artist: 'Beyoncé',
        title: 'Formation',
        genre:'Pop',
        song: '/assets/music/Beyoncé_Formation.wav'

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
        artist: 'Taylor Swift',
        title: 'State of Grace',
        genre:'Pop',
        song: '/assets/music/Taylor_Swift_State_of_Grace.wav'

    },
    {
        artist: 'The Lion King',
        title: 'Hakuna',
        genre:'Kids',
        song: '/assets/music/The_Lion_King_Hakuna_Matata.wav'
       
    },
    {
        artist: 'Katy Perry',
        title: 'Hey Hey Hey',
        genre:'Pop',
        song: '/assets/music/Katy_Perry_Hey_Hey_Hey.wav'

    }
];

const musicApi = {
    getAll() {
        return songs;
    }
};
export default musicApi;