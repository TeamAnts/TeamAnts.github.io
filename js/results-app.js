import html from './html.js';
import playersApi from './players-api.js';
import Result from './results.js';
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
    render() {
        const dom = makeTemplate();
  
        const playerScoreSection = dom.querySelector('.player-score');
        const topTenSection = dom.querySelector('.top-ten');
  
        const result = new Result(playersApi.getAll().pop());
      
        playerScoreSection.appendChild(result.render());
  
        const results = new ResultTable ([]);
        topTenSection.appendChild(results.render());
  
  
        return dom;
    }
}


const reportApp = new ResultsApp();
const root = document.getElementById('root');
root.appendChild(reportApp.render());