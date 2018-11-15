import Header from './header.js';
import html from './html.js';
import Footer from './footer.js';
import LoginForm from './login-form.js';
import playerApi from './players-api.js';

function makeTemplate() {
    return html`
        <div class="app">
            <header></header>
            <form></form>
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

        const formContainer = dom.querySelector('form');
        const form = new LoginForm(player => {
            playerApi.add(player);
            
            // console.log('player', player);
            // Add here to add player to person-api.js
            // window.location = './game.html';
        });
      
        formContainer.appendChild(form.render());

        const footerContainer = dom.querySelector('footer');
        const footer = new Footer;
        footerContainer.appendChild(footer.render());
        
        return dom;
    }

}


const app = new App;
document.getElementById('root').appendChild(app.render()); 