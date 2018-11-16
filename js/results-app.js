import html from './html.js';
import playersApi from './players-api.js';
import Header from './header.js';
import Footer from './footer.js';
import Results from './results.js';
import ResultTable from './results-table.js';

function makeTemplate() {
    return html`
      <header></header>
      <main>
          <div class="player-score">
              <p>YOUR SCORE</p>
          </div> 
          <div class="top-ten">
              <p>TOP 10 PLAYERS</p>
          </div>
          <button class="play-again"><a href="./index.html">PLAY AGAIN</a></button>
      </main>
      <footer></footer>
      `;

}

class ResultsApp {
    constructor() {
        this.results = playersApi.getAll();
        this.currentPlayer = this.results[this.results.length - 1 ];
    }
    render() {
        
        const dom = makeTemplate();

        const headerContainer = dom.querySelector('header');
        const header = new Header;
        headerContainer.appendChild(header.render());
  
        const playerScoreSection = dom.querySelector('.player-score');
        const result = new Results(this.currentPlayer);
        playerScoreSection.appendChild(result.render());
        
        const topTenSection = dom.querySelector('.top-ten');
        const results = new ResultTable(this.results);
        topTenSection.appendChild(results.render());
  
        const footerContainer = dom.querySelector('footer');
        const footer = new Footer;
        footerContainer.appendChild(footer.render());
        
        return dom;
    }
}

const reportApp = new ResultsApp();
const root = document.getElementById('root');
root.appendChild(reportApp.render());