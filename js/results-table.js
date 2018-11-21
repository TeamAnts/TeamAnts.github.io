import html from './html.js';
import ResultsTableItem from './results-table-item.js';

function makeTemplate() {
    return html`
    <table>
        <thead>
            <tr>
                <th>PLAYER NAME</th>
                <th>SCORE</th>
            </tr>
        <thead>
        <tbody></tbody> 
     </table>
    `;
}
export default class ResultsTable{
    constructor(results) {
        this.topTen = results
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
    }
    render() {
        const dom = makeTemplate();
        const tableBody = dom.querySelector('tbody');

        this.topTen.forEach(player =>{
            const resultsTableItem = new ResultsTableItem(player);
            tableBody.appendChild(resultsTableItem.render());
        });
        return dom;
    }
}

