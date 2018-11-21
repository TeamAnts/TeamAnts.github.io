import AnswerCard from './answer-card.js';
import html from './html.js';
import musicApi from './music-api.js';
import gameApi from './game-api.js';
import playersApi from './players-api.js';

const genre = playersApi.getCurrent().chosenGenre;
const music = musicApi.getGenre(genre);

function makeTemplate() {
    return html`
        <section class="player" id="play-button-of-doom">
            <div class="box"></div>
            <div class="circle"></div>
            <div class="player-mechanics">
                <div class="tone-arm"></div>
                <div class="stylus"></div>
            </div>
            <div class="vinyl-record-inner"><img src="https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/v1/983693/axmqlpjyo3zmeszdr9qt.png"></div>
            <div class="vinyl-record"></div>
        </section>
        <div class="hidden">Click the record to listen!</div>
        <div class="round-counter"></div>
        <ul class="answer-list"></ul>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

// scope is too broad here
// const selectedAnswers = []; 

export default class GameForm {
    constructor(answers) {
        this.answers = answers;
        this.answersPer = 4;
        this.count = 0;
        this.rounds = 10;
        this.currentSongIndex = getRandomIndex(music.length);
        this.score = 0;
        this.music = music;
    }
    shuffleAnswers(array) {
        let currentIndex = array.length;

        while(0 !== currentIndex) {
            let randomIndex = getRandomIndex(currentIndex);
            currentIndex -= 1;

            let temporaryValue = array[currentIndex];
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
        const selectedAnswers = [];
        const roundCounter = document.querySelector('.hidden');
 
        randomAnswers.forEach(answer => {
            const answerCard = new AnswerCard(answer, selected => {
                this.selected = selected;

                selectedAnswers.push(selected.title);
                this.count++;
                this.addScore();
                this.currentSongIndex++;

                roundCounter.textContent = `${this.count} / ${this.rounds}`;

                if(this.currentSongIndex === music.length) {
                    this.currentSongIndex = 0;
                }
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
    addScore() {
        let soundEffect = '';

        if(music[this.currentSongIndex].title === this.selected.title) {
            this.score += 100;
            playersApi.update(this.score);
            
            soundEffect = './assets/music/quiz-show-buzzer-01.mp3';
        }
        else {
            soundEffect = './assets/music/record-scratch-01.mp3';
        }

        this.playSound(soundEffect);
    }
    playSound(src) {
        let sound = new Audio();
        sound.src = src;
        sound.play();
    }
    togglePlayer(on) {
        const method = on ? 'add' : 'remove';
        this.playerMechanic.classList[method]('player-mechanic-on');
        this.vinylRecord.classList[method]('spinning');
        this.innerRecord.classList[method]('spinning');
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showRandomAnswers();
        
        this.playerMechanic = dom.querySelector('.player-mechanics');
        this.vinylRecord = dom.querySelector('.vinyl-record');
        this.innerRecord = dom.querySelector('.vinyl-record-inner');
        
        const playButtonOfDoom = dom.getElementById('play-button-of-doom');
        playButtonOfDoom.addEventListener('click', () => {
            
            this.togglePlayer(true);
            
            const currentSong = music[this.currentSongIndex];
            this.playSound(currentSong.song);

            window.setTimeout(() => this.togglePlayer(false), 1000);
        }); 
        
        return dom;
    }
}