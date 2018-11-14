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

        this.results.forEach(player =>{
            const resultsTableItem = new ResultsTableItem(player);
            list.appendChild(resultsTableItem.render());
        
        });
        return dom;
        
    }
}

