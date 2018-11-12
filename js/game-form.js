import html from './html.js';
import header from './header.js';

function makeTemplate() {
    return html`
        <header></header>

        <div id="answers">
        <input required type="radio" id="genie in a bottle" value="genie in a bottle">
        <label for="genie in a bottle"> Genie in a Bottle</label>
        </div>
    `;
}

export default class Answers {
    render() {
        const dom = makeTemplate();
        const headerContainer = dom.querySelector('header');
    
        headerContainer.appendChild(header.render());
    
        return dom;
    }
}

