import html from './html.js';
import playersApi from './players-api.js';

function makeTemplate() {
  return html`
      <h3>CONGRATULATIONS!</h3>
       
  `;
}

class Results {
  render() {
    return makeTemplate();

}
}

export default Results;