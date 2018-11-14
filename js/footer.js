import html from './html.js';

function makeTemplate() {
    return html`
        <p>Team Ant 2018</p>
            <nav class="nav">
                <ul>
                    <li><a href="./about-us.html">About</a></li>
                </ul>
            </nav>
    `;
}

export default class Footer {
    render() {
        return makeTemplate();
    }
}
