import AnswerCard from './answer-card.js';
import html from './html.js';
import musicApi from './music-api.js';

const music = musicApi.getAll();

function makeTemplate() {
    return html`
        <ul class="answer-list"></ul>
    `;
}
function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

export default class GameForm {
    constructor(answers) {
        this.answers = answers;

        this.answersPer = 4;
        this.rounds = 10;
        this.lastAnswers = [];

        this.music = music;
    }
   
    getRandomAnswers() {
        const copy = this.music.slice();
        const randomAnswers = [];

        for(let i = 0; i < this.answersPer; i++) {
            const index = getRandomIndex(copy.length);
            const song = copy[index];
            copy.splice(index, 1);

            if(this.lastAnswers.includes(song)) {
                i--;
                continue;
            }
            else {
                randomAnswers.push(song);
            }

        }
        this.lastAnswers = randomAnswers;
        return randomAnswers;
    }

    showRandomAnswers() {
        const randomAnswers = this.getRandomAnswers();

        randomAnswers.forEach(answer => {
            const answerCard = new AnswerCard(answer, selected => {
                
                this.count++;
                console.log(selected.title);
                if(this.count === 10) {
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
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showRandomAnswers();

        return dom;
    }
}