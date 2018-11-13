import html from './html.js';

function makeTemplate(answer) {
    return html`
            <li class="answer-card">
                <h4 class="answer">${answer.song_name}</h4>
            </li>
    `;
}

export default class AnswerCard {
    constructor(answer) {
        this.answer = answer;
    }
    // console.log('this answer', this.answer);

    render() {
        const dom = makeTemplate();
    
        return dom;
    }
}


        // <fieldset>
        //     <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        //     <label for="genie in a bottle"> Genie in a Bottle</label>
        // </fieldset>