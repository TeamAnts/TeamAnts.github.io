import AnswerCard from './answer-card.js';
import html from './html.js';
// import musicApi from './music-api.js';

// const music = musicApi.getAll();

function makeTemplate() {
    return html`
        <ul class="answer-list"></ul>
    `;
}
export default class GameForm {
    constructor() {
    }

    render() {
        const dom = makeTemplate();
        this.ul = dom.querySelector('ul');
        this.update();
        return dom;
    }

    update() {
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
        for(let i = 0; i < 3; i++) {
            const exampleAnswer = { title: 'title here' };
            let randomAnswer = new AnswerCard(exampleAnswer, function(answer) {
                console.log(answer);
            });
            this.ul.appendChild(randomAnswer.render());
        }
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(9));
        return index;
    }
}