import html from './html.js';

function makeTemplate() {
    return html`
            <nav class="nav">
                <ul>
                    <li><a href="./about-us.html">TEAM ANT  &copy;2018</a></li>
                </ul>
            </nav>
    `;
}

export default class Footer {
    render() {
        return makeTemplate();
    }
}
