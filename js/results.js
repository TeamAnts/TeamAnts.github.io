import html from './html.js';


function makeTemplate(player) {
    return html`
      <h3>CONGRATULATIONS ${player.name.toUpperCase()}! Your score is ${player.score} points</h3>
       
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