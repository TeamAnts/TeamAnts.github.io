import html from './html.js';


function makeTemplate() {
    return html`
        
        <div id="answers-form">
        <fieldset>
            <input required type="radio" id="genie in a bottle" value="genie in a bottle">
            <label for="genie in a bottle"> Genie in a Bottle</label>
        </fieldset>
        </div>
    `;
}

export default class Answers {
    constructor(answers) {
        this.answers = answers;
    }
    render() {
        const dom = makeTemplate(this.answers);
        return dom;
    }
}


