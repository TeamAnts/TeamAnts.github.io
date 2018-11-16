import html from './html.js';

function makeTemplate() {
    return html`
            <h1> NAME THAT <span>TUNE</span> </h1>
    `;
}
export default class Header {
    render() {
        return makeTemplate();
    }
}
