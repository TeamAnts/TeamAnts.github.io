import html from './html.js';
import Header from './header.js';

function makeTemplate() {
    return html`
        <header></header>
        <div class="player"></div>
        <div class="form"></div>
    `;
}

class GameApp {
    render() {
        const dom = makeTemplate();
        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());
        return dom;
    }
}
const gameApp = new GameApp;
const root = document.getElementById('root');
root.appendChild(gameApp.render());