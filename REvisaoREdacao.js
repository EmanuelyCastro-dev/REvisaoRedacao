let claro = true;
document.getElementById("tema").addEventListener("click", function(){
    claro=!claro;
    if(claro){
        document.body.style.backgroundColor="rgb(255, 243, 245)";
        document.getElementById("tema").innerText="🌙"
    }
    else{
        document.body.style.backgroundColor="rgba(236, 75, 129, 1)";
        document.getElementById("tema").innerText="️☀️"
    }
})
let play = false;
const audio = document.getElementById("musica")
const botão = document.getElementById("pausar")
botão.addEventListener("click", function(){
    if(play){
        audio.play()
    }
    else{
        audio.pause()
    }
    play = !play
})