import html from './html.js';

function makeTemplate(answer) {
    return html`
            <li class="answer-card">
                <h4 class="answer">${answer.title}</h4>
            </li>
    `;
}

export default class AnswerCard {
    constructor(answer) {
        this.answer = answer;
    }
    console.log('answer', answer);
    // console.log('this answer', this.answer);

    render() {
        const dom = makeTemplate();
        // const li = dom.querySelector('li');

        return dom;
    }
}


        // <fieldset>
        //     <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        //     <label for="genie in a bottle"> Genie in a Bottle</label>
        // </fieldset>