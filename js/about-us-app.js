import Header from './header.js';
import html from './html.js';
import Footer from './footer.js';


function makeTemplate() {
    return html`
        <div class="app">
            <header></header>
            <div class="about-us-card">
                <img src="https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif" alt="">
                <p> Lorem Ipsum és un text de farciment usat per la indústria de la tipografia i la impremta. 
                Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada 
                de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de 
                tipus de lletra electrònics, romanent essencialment sense canvis. Es va popularitzar l'any 1960 amb el llançament de fulls Letraset que contenien passatges de 
                Lorem Ipsum, i més recentment amb programari d'autoedició com Aldus Pagemaker que inclou versions de Lorem Ipsum.</p>
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