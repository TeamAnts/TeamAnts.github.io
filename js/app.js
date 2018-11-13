import Header from './header.js';
import html from './html.js';
import Footer from './footer.js';


function makeTemplate() {
    return html`
        <div class="app">
            <header></header>
            <section></section>
            <footer></footer>
        </div>
    `;
}

export default class App {
    render(){
        const dom = makeTemplate();
        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());

        const footerContainer = dom.querySelector('footer');
        const footer = new Footer;
        footerContainer.appendChild(footer.render());
        
        return dom;
    }

}



const app = new App;

document.getElementById('root').appendChild(app.render()); 