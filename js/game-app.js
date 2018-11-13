import html from './html.js';
import Header from './header.js';
import Footer from './footer.js';
import AnswerCard from './answer-card.js';


function makeTemplate() {
    return html`
        <header></header>
        <div class="player"></div>
        <div class="answers-form"></div>
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

        const answerContainer = dom.querySelector('.answers-form');
        const answerCard = new AnswerCard;
        answerContainer.appendChild(answerCard.render());

        
        return dom;
    }
}
const gameApp = new GameApp;
const root = document.getElementById('root');
root.appendChild(gameApp.render()); 