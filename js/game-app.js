import html from './html.js';
import Header from './header.js';
import Footer from './footer.js';
import GameForm from './game-form.js';
// import MusicPlayer from './game-music.js';
// import musicApi from './music-api.js';
// const songs
function makeTemplate() {
    return html`
    <header></header>
    <div class="player"></div>
    <div class="game-form"></div>
    <footer></footer>
    `;
}

class GameApp {
    render() {
        const dom = makeTemplate();
        
        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());
        
        const footerContainer = dom.querySelector('footer');
        const footer = new Footer;
        footerContainer.appendChild(footer.render());
        
        const gameFormContainer = dom.querySelector('.game-form');
        const gameForm = new GameForm;
        gameFormContainer.appendChild(gameForm.render());
        
        // const musicPlayerContainer = dom.querySelector('.player');
        // const musicPlayer = new MusicPlayer;
        // musicPlayerContainer.appendChild(musicPlayer.render());
        
        return dom;
    }
    
    addScore() {
        let score = 0;
        const gameData = JSON.parse(localStorage.getItem('gameData'));
        const musicData = JSON.parse(localStorage.getItem('musicData'));
        // if music player index === selected index, + points 
        //parse local storage grab both MusicData and GameData
        //Compare to see if index i on array one === index i on array two
        for(let i = 0; i < gameData.length; i++) {
            if(gameData[i] === musicData[i]) {
                score += 100;
                console.log(score);
            }
        }
        return score;
    }
}
const gameApp = new GameApp;
const root = document.getElementById('root');
root.appendChild(gameApp.render()); 