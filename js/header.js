import html from './html.js';

function makeTemplate() {
    return html`
        <header>
            <h1> NAME THAT <span>TUNE</span> </h1>
        </header>
    `;
}

export default class Header {
    render() {
        return makeTemplate();
    }
}
