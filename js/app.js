import Header from './header.js';
import html from './html.js';

function makeTemplate() {
    return html`
        <div class="app">
            <header></header>
        </div>
    `;
}

export default class App {
    render(){
        const dom = makeTemplate();
        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());

        return dom;
    }

}



const app = new App;

document.getElementById('root').appendChild(app.render()); 