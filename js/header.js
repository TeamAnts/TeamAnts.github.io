import html from './html.js';

function makeTemplate() {
    return html`
        <header>
            <h1> NAME THAT <span>TUNE</span> </h1>
            <h1>&#9833;</h1>
            <h1>&#9835;</h1>
            <h1>&#9833;</h1>
            <h1>&#9834;</h1>
            </header>
    `;
}

export default class Header {
    render() {
        return makeTemplate();
    }
}
