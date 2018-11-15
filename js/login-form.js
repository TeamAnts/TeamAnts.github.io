import html from './html.js';
// send me to login app

function makeTemplate() {
    return html`
       
        <form id="login" name="player">
            <label for="name">
              PLAYER NAME
              <input required name="playerName" id="playerName">
            </label>  
            <button id="popular">P O P</button>
            <button id="hip-hop">H I P - H O P</button>
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
        const buttons = dom.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const elements = form.elements;
                console.log('button', button);
                const player = {
                    name: elements.playerName.value,
                    chosenGenre: button.id
                };

                this.onSubmit(player);
            
            });
        });
        
        return dom;
    }
}

export default LoginForm;