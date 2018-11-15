import html from './html.js';


function makeTemplate(player) {
    return html`
<<<<<<< HEAD
      <h3>CONGRATULATIONS ${player.name.toUpperCase()}! Your score is ${player.score} points</h3>
=======
      <h3>${player.score >= 600 ? 'CONGRATULATIONS ' : 'TRY HARDER '} ${player.name.toUpperCase()}! You scored ${player.score} points</h3>
>>>>>>> ccd19bf948e89db57facf36d577fc32a13a0ee7d
       
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