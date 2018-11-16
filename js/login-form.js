import html from './html.js';

function makeTemplate() {
    return html`
        <form id="login" name="player">
            <input name="playerName" id="playerName" placeholder="Enter your name" autocomplete="off"required/> 
            <div class=genre>
                <label for="popular">
                    Pop
                    <input required type="radio" name="genre" id="popular" value="popular"/>
                </label>
                <label for="other">
                    Other
                    <input required type="radio" name="genre" id="other" value="other"/>
                </label>
                <button type="submit"> Play </button>
            </div>
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
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const elements = form.elements;
            const genre = document.getElementsByName('genre');
            let checkedRadio;
            for(let i = 0; i < genre.length; i ++) {
                if(genre[i].checked === true) {
                    checkedRadio = genre[i].value;
                }
            }
            const player = {
                name: elements.playerName.value,
                chosenGenre: checkedRadio
            };
            this.onSubmit(player); 
        });
        return dom;
    }
}
export default LoginForm;