import html from './html.js';
// import playersApi from './players-api.js';

function makeTemplate(player) {
    return html`
      <h3>CONGRATULATIONS!</h3>
      <p> ${player.name} score is ${player.score}</p>
       
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