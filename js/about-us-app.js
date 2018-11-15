import Header from './header.js';
import html from './html.js';
import Footer from './footer.js';


function makeTemplate() {
    return html`
            <header></header>
            <div class="wrapper">
                <div class="album aaron">
                    <span class="vinyl"></span>
                    <span class="cover cover1"></span>
                </div>
                <div class="aaron-profile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

                <div class="album michael">
                    <span class="vinyl"></span>
                    <span class="cover cover2"></span>
                </div>
                <div class="michael-profile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

                <div class="album teonna">
                    <span class="vinyl"></span>
                    <span class="cover cover3"></span>
                </div>
                <div class="teonna-profile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>

                <div class="album carmen">
                    <span class="vinyl"></span>
                    <span class="cover cover4"></span>
                </div>
                <div class="carmen-profile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
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