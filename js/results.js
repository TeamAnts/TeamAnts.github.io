import html from './html.js';


function makeTemplate(player) {
    return html`
      <h3>${player.score >= 600 ? 'CONGRATULATIONS ' : 'TRY HARDER '} ${player.name.toUpperCase()}! You scored ${player.score} points</h3>
       
  `;
}

class Results {
    constructor(player) {
        this.player = player;
    }
    render() {
        return makeTemplate(this.player);

    }
}

export default Results;