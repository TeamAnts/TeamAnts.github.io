import html from './html.js';


function makeTemplate(answer) {
    return html`
            <li class="answer-card">
                <h4 class="answerCard">${answer.title}</h4>
            </li>
    `;
}
export default class AnswerCard {
    constructor(answer, onSelect) {
        this.answer = answer;
        this.onSelect = onSelect;
    }
    render() {
        const dom = makeTemplate(this.answer);
        // this.listItem = dom.querySelector('h4');
        // this.listItem = this.answerCard.title;
          
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.answer);
        });
        return dom;
    }
}


        // <fieldset>
        //     <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        //     <label for="genie in a bottle"> Genie in a Bottle</label>
        // </fieldset>