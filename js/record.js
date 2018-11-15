

const playerMechanic = document.querySelector('.player-mechanics');
const vinylRecord = document.querySelector('.vinyl-record');
const innerRecord = document.querySelector('.vinyl-record-inner');

const playbuttonofdoom = document.getElementById("playbuttonofdoom");
playbuttonofdoom.addEventListener("click", function(){
    
    playerMechanic.classList.add('player-mechanic-on');
    vinylRecord.classList.add('spinning');
    innerRecord.classList.add('spinning');
    window.setTimeout(reset, 1000);    
});
    
function reset(){
    playerMechanic.classList.remove('player-mechanic-on');
    vinylRecord.classList.remove('spinning');
    innerRecord.classList.remove('spinning');
}


   