import html from './html.js';
import ResultsTableItem from './results-table-item.js';

// function makeTemplate() {
//     return html`
//      <ul class="top-ten-list"></ul>
// `;
// }

function makeTemplate() {
    return html`
    <table>
    <thead>
      <tr>
      <div id="tbl-headings">
        <th id="player-name">PLAYER NAME</th>
        <th id="player-score">S C O R E</th>
      </div>  
      </tr>
     <thead>
     <tbody class="top-ten-list"></tbody> 
     </table>
    `;
}

export default class ResultsTable{
    constructor(results) {
        this.results = results;
    }


    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.top-ten-list');

        let sortedArray = this.results.sort(function(a, b) {
            return b.score - a.score;
        });
        const topTen = sortedArray.slice(0, 10);
        topTen.forEach(player =>{
            
            
            const resultsTableItem = new ResultsTableItem(player);
            list.appendChild(resultsTableItem.render());
            
        }     
        );
        

        console.log(sortedArray);
        return dom;
        
    }
}

