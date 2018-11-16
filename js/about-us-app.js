import Header from './header.js';
import html from './html.js';
import Footer from './footer.js';

function makeTemplate() {
    return html`
            <header></header>
            <div class="wrapper">
                <div class="album-wrapper">
                    <div class="album aaron">
                        <span class="vinyl"></span>
                        <span class="cover cover1"></span>
                    </div>
                    <div class="aaron-profile">
                    <h4>Aaron</h4>
                    Climber, traveler, software developer, and amateur chef.
                    </div>
                </div>

                <div class="album-wrapper">
                    <div class="album michael">
                        <span class="vinyl"></span>
                        <span class="cover cover2"></span>
                    </div>
                    <div class="michael-profile">
                    <h4>Michael</h4>
                    Musician, Recovering Art School Student, Chef, Father, Miscreant. 
                    </div>
                </div>

                <div class="album-wrapper">
                    <div class="album teonna">
                        <span class="vinyl"></span>
                        <span class="cover cover3"></span>
                    </div>
                    <div class="teonna-profile">
                    <h4>Teonna</h4>
                    Ultra runner, student, nurse and collector of unnecessary crafting supplies. 
                    </div>
                </div>

                <div class="album-wrapper">
                    <div class="album carmen">
                        <span class="vinyl"></span>
                        <span class="cover cover4"></span>
                    </div>
                    <div class="carmen-profile">
                    <h4>Carmen</h4>
                    Mother,  student,  software developer, food and nutrition enthusiast. 
                    </div>
                </div>
            </div>
            <div class="play-again-wrapper">
                <button class="play-again"><a href="./index.html">Play Game</a></button>
            </div>
            <footer></footer>
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