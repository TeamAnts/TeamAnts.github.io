import html from './html.js';

function makeTemplate() {
    return html`
        <h1>About Us</h1>
            <ul>
            </ul>
    `;
}

export default class AboutUs {
    render() {
        return makeTemplate();
    }
}
