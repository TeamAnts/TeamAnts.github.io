import AnswerCard from './answer-card.js';
import html from './html.js';
import musicApi from './music-api.js';
import gameApi from './game-api.js';

const music = musicApi.getAll();

function makeTemplate() {
    return html`
        <button id="button">Listen</button>
        <ul class="answer-list"></ul>
    `;
}
function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}
const selectedAnswers = []; 

export default class GameForm {
    constructor(answers) {
        this.answers = answers;

        this.answersPer = 4;
        this.count = 0;
        this.rounds = 10;
        this.currentSongIndex = 0;

        this.music = music;
    }
    shuffleAnswers(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while(0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
   
    getRandomAnswers() {
        const copy = this.music.slice();
        const randomAnswers = [];
        randomAnswers.push(music[this.currentSongIndex]);

        for(let i = 1; i < this.answersPer; i++) {
            const index = getRandomIndex(copy.length);
            const song = copy[index];
            copy.splice(index, 1);

            if(randomAnswers.includes(song)) {
                i--;
                continue;
            }
            else {
                randomAnswers.push(song);
            }
        }
        return this.shuffleAnswers(randomAnswers);
    }
    showRandomAnswers() {
        const randomAnswers = this.getRandomAnswers();
        randomAnswers.forEach(answer => {
            const answerCard = new AnswerCard(answer, selected => {
                selectedAnswers.push(selected.title);
                console.log(selectedAnswers);
                this.count++;
                this.currentSongIndex++;
                console.log('currentSong', this.currentSongIndex);
                console.log(selected.title);
                if(this.count === 10) {
                    gameApi.addGame(selectedAnswers);
                    window.location = './results.html';
                }
                this.clearAnswers();
                this.showRandomAnswers();
            });
            this.list.appendChild(answerCard.render());
        });
    }
    clearAnswers() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }
    }
    render() {
        const currentSong = music[this.currentSongIndex];
        const dom = makeTemplate();
        const listen = dom.querySelector('button');
        let newAudio = new Audio();
        listen.addEventListener('click', function() {
            newAudio.src = currentSong.song;
            newAudio.play();
        }, true);
        this.list = dom.querySelector('ul');
        this.showRandomAnswers();

        return dom;
    }
}