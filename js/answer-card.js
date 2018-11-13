import html from './html.js';

function makeTemplate(answer) {
    return html`
        <div id="answers-form">
        <fieldset>
            <li class="answer-card">
                <h4 class="answer">${answer.name}</h4>
            </li>
        </fieldset>
    `;
}

export default class AnswerCard {
    constructor(answer) {
        this.answer = answer;
    }

    render() {
        const dom = makeTemplate(this.answer);
        return dom;
    }
}


        // <fieldset>
        //     <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        //     <label for="genie in a bottle"> Genie in a Bottle</label>
        // </fieldset>