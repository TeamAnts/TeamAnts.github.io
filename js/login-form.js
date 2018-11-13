import html from './html.js';

function makeTemplate() {
    return html`
        <form name="player">
            <label>
              Player Name
              <input required name="playerName">
            </label>  

            <label>  
            <button>P L A Y</button>
            </label>
        </form>    
    `;
}

class LoginForm {
    constructor(onSubmit){
        this.onSubmit = onSubmit;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const elements = form.elements;

            const player = {
                name: elements.playerName.value,
            };

            this.onSubmit(player);
            
           
        });

         
        return dom;
    }
}

export default LoginForm;