import html from './html.js';
// send me to login app

function makeTemplate() {
    return html`
       
        <form id="login" name="player">
              <input required name="playerName" id="playerName" placeholder="Enter your name">
            <label>  
            <button>PLAY</button>
            </label>
            <label>
            <button>GENRE</button>
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