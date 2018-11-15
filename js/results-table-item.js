import html from './html.js';

// function makeTemplate(player) {
//     return html`
      
//       <li class="top-ten-results">${player.name.toUpperCase()} ${player.score}
      
//       </li>
      
// `;
// }

function makeTemplate(player) {
    return html`
        <tr class="top-ten-results">
            <td>${player.name.toUpperCase()}</td>
            <td>${player.score}</td>
        </tr>
`;
}

class ResultsTableItem {
    constructor(player){

        this.player = player;
    }
    render() {
        return makeTemplate(this.player);
    }
}



export default ResultsTableItem;