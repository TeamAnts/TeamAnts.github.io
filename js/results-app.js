import html from './html.js';
import playersApi from './players-api.js';
import Results from './results.js';
import ResultTable from './results-table.js';

function makeTemplate() {
    return html`
      <header></header>
      <main>
          <section class="player-score">
              <h2>YOUR SCORE</h2>
          </section> 
          <section class="top-ten">
              <h2>TOP 10 PLAYERS</h2>
          </section>
         
      </main>`;
}

class ResultsApp {
    constructor() {
        this.results = playersApi.getAll();
        this.currentPlayer = this.results[this.results.length - 1 ];
    }
    render() {
        
        const dom = makeTemplate();
  
        const playerScoreSection = dom.querySelector('.player-score');
        const topTenSection = dom.querySelector('.top-ten');
        
        const result = new Results(this.currentPlayer);

      
        playerScoreSection.appendChild(result.render());
  
        const results = new ResultTable(this.results);
        topTenSection.appendChild(results.render());
  
  
        return dom;
    }
}


const reportApp = new ResultsApp();
const root = document.getElementById('root');
root.appendChild(reportApp.render());