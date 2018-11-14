import html from './html.js';
import ResultsTableItem from './results-table-item.js';

function makeTemplate() {
    return html`
     <ul class="top-ten-list"></ul>
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
        sortedArray.forEach(player =>{
            const resultsTableItem = new ResultsTableItem(player);
            list.appendChild(resultsTableItem.render());

           
        
        });
        

        console.log(sortedArray);
        return dom;
        
    }
}

