class obj{
    quadro = 0
    tempo = 0

    constructor(px,py,lar,alt,imagem){
        this.px = px
        this.py = py
        this.lar = lar
        this.alt = alt
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img,this.px,this.py,this.lar,this.alt)
    }
    animacao(vel,limite,nomeImg){
        this.tempo += 1
        if(this.tempo >= vel){
            this.tempo = 0
            this.quadro += 1
        }
        if(this.quadro >= limite){
            this.quadro = 0
        }

        this.imagem = 'img/'+nomeImg+this.quadro+'.png'
    }
}

class bg extends obj{
    move(velocidade,limite,pos){
        this.px -= velocidade
        if(this.px < -limite){
            this.px = pos
        }
    }
}

class ground extends bg{

}

class birdo extends obj{
    velocidade = 2;
    gravidade = 1;

    move(){
        if(this.velocidade < 10){
        this.velocidade += this.gravidade
        }
        this.py += this.velocidade
    }

    limite(){
        if (this.py >= 660){
            this.py = 660
        }
        else if(this.py <= 0){
            this.py = 0
        }
    }
}