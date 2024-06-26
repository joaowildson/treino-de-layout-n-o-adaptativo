var azul = document.getElementById('CorA');
var rosa = document.getElementById('CorR');
var img_mudada = document.getElementById('cell_frente');


azul.addEventListener('click', ()=> {
    img_mudada.src = 'assents/imgs/a35azul.webp'
})

rosa.addEventListener('click', ()=> {
    img_mudada.src = 'assents/imgs/a35rosa.avif'
})