
import html from './html.js';
import AnswerCard from './answer-card.js';


function makeTemplate() {
    return html`
        <ul class="answers"></ul>
    `;
}

export default class GameForm {
    constructor(answers) {
        this.answers = answers;
    }

    render() {
        const dom = makeTemplate();
        
        return dom;
    }
}