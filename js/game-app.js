import html from './html.js';
import Header from './header.js';
import Footer from './footer.js';
import GameForm from './game-form.js';
// import musicApi from './music-api.js';

// const songs
function makeTemplate() {
    return html`
        <header></header>
        <div class="player"></div>
        <div class="game-form"></div>
        <footer></footer>
    `;
}

class GameApp {
    render() {
        const dom = makeTemplate();

        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());

        const footerContainer = dom.querySelector('footer');
        const footer = new Footer;
        footerContainer.appendChild(footer.render());

        const gameFormContainer = dom.querySelector('.game-form');
        const gameForm = new GameForm;
        gameFormContainer.appendChild(gameForm.render());

        
        return dom;
    }
}
const gameApp = new GameApp;
const root = document.getElementById('root');
root.appendChild(gameApp.render()); 