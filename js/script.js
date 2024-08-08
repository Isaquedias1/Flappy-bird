const canvas = document.getElementById ('canvas').getContext ('2d');
// let context = canvas.getContext('2d')

let fundo = new bg(0,0,500,900,'img/sky.png')
let fundo2 = new bg(500,0,500,900,'img/sky.png')

function draw(){
    fundo.draw()
    fundo2.draw()
}

function update(){
    fundo.move(10,500,0)
    fundo2.move(10,0,500)
}

function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()
}

setInterval(main,100)