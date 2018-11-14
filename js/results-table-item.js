import html from './html.js';

function makeTemplate(player) {
    return html`
      
      <li class="top-ten-results">${player.name} ${player.score}
      <p class="top-ten-players"></p>
      </li>
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