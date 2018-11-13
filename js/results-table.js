import html from './html.js';
import playersApi from './players-api.js';

function makeTemplate() {
  return html`
      <h3>Greatest of all time!</h3>
       
  `;
}

class ResultsTable {
  render() {
    return makeTemplate();

}
}

export default ResultsTable;