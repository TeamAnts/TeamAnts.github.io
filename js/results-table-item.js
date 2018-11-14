import html from './html.js';

function makeTemplate(player) {
    return html`
      
      <li class="top-ten-results">${player.name} ${player.score}
      
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