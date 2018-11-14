import musicApi from './music-api.js';
import gameApi from './game-api.js';
import html from './html.js';

function makeTemplate() {
    return html`
        
        <button id="button">Listen</button>
    `;
}

const music = musicApi.getAll();

export default class MusicPlayer {
    render() {
        const dom = makeTemplate();
        const listen = dom.querySelector('button');
        let i = 0;
        let newAudio = new Audio();
        listen.addEventListener('click', function() {
            i = ++i < music.length ? i : 0;
            newAudio.src = music[i].song;
            gameApi.addSong(music[i].title);
            newAudio.play();
        }, true);
        newAudio.volume = 0.3;
        newAudio.loop = false;
        return dom;
    }
}

