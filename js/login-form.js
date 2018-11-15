import html from './html.js';
// send me to login app

function makeTemplate() {
    return html`
       
        <form id="login" name="player">
            <label for="playerName">
            PLAYER NAME
            <input name="playerName" id="playerName" required/>
            </label>  
            <button type="radio" id="popular" value="pop">P O P</button>
            <button type="radio" id="other" value="other">H I P - H O P</button>
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
            button.addEventListener('click', (event) => {
                console.log('gethere');
                event.preventDefault();

                const elements = form.elements;
                console.log('button', button);
                const player = {
                    name: elements.playerName.value,
                    chosenGenre: button.id
                };
                this.chosenGenre = button.id;
                console.log('chosen genre', this.chosenGenre);
                this.onSubmit(player);
            
            });
        });
        
        return dom;
    }
}

export default LoginForm;