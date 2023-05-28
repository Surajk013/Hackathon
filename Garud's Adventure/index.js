function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
}

let base=document.getElementById('base');
let chardiv=document.getElementById('hero');

document.addEventListener('keydown', handleKeys)

var charLeftAdd = 2420;
var charTopAdd = 1750;

function handleKeys(e){
    let keyPress = e.code;
    if(keyPress === 'ArrowRight'){
        charLeftAdd += 30;
        chardiv.style.left = charLeftAdd + 'px';
        chardiv.style.transform='rotate(90deg)';
    }
    if (keyPress === 'ArrowLeft') {
        charLeftAdd -= 30;
        chardiv.style.left = charLeftAdd + 'px';
        chardiv.style.transform='rotate(-90deg)';
    }
    
    if (keyPress === 'ArrowUp') {
        charTopAdd -= 30;
        chardiv.style.top = charTopAdd + 'px';
        chardiv.style.transform ='rotate(0deg)';
    }
    if (keyPress === 'ArrowDown') {
        charTopAdd += 30;
        chardiv.style.top = charTopAdd + 'px';
        chardiv.style.transform ='rotate(180deg)';
    }
}