import html from './html.js';
import musicApi from './music-api.js';

const music = musicApi.getAll();

function makeTemplate() {
    return html`
            <li class="answer-card">
                <input type="radio">
                <h4 class="answer">${music}</h4>
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
        // const li = dom.querySelector('li');

        return dom;
    }
}


        // <fieldset>
        //     <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        //     <label for="genie in a bottle"> Genie in a Bottle</label>
        // </fieldset>