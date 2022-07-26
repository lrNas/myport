
const carrcontent = [
    {
        "url": "img4.jpg",
        "texto": "Montagem e manutenção de hardware no geral"
    },
    {
        "url": "img10.jpg",
        "texto": "Base para front end: HTML + CSS + Javascript. O essencial para desenvolver páginas web"
    },
    {
        "url": "img1.png",
        "texto": "Node.js - Motor para desenvolvimento em Javascript"
    },
    {
        "url": "img9.png",
        "texto": "Mysql - Banco de dados relacional mais usado na web"
    },
    {
        "url": "img6.png",
        "texto": "React.js - Framework para desenvolvimento de web Apps"
    },
    {
        "url": "img5.png",
        "texto": "PHP - Linguagem para web presente em muitos sites antigos"
    },
    {
        "url": "img3.webp",
        "texto": "Python - Linguagem de programação muito utilizada em Data Science"
    },
    {
        "url": "img2.jpg",
        "texto": "C Sharp - Linguagem multiuso parte do .NET framework"
    },
    {
        "url": "img8.png",
        "texto": "Java - Linguagem forte no mercado para desenvolvimento orientado à objetos"
    }
]
let count = -1



function setImagem(count){
    const imagemCarr= document.getElementById('carcont')
    imagemCarr.style.backgroundImage = `url('/img/imgscarrousel/${carrcontent[count].url}')`
    const label = document.getElementById('label')
    label.innerHTML = carrcontent[count].texto
}

function avancar(){
    count++
    if(count>carrcontent.length-1){
        count=0
    }
    setImagem(count)
}

function voltar(){
    count--
    if(count<0){
        count=carrcontent.length-1
    }
    setImagem(count)
}
function ciclar(){
    avancar()
}


const btnVoltar = document.getElementById("voltar");
const btnAvancar = document.getElementById("avancar");

btnAvancar.addEventListener('click',avancar);
btnVoltar.addEventListener('click',voltar);
avancar();
setInterval(ciclar,5000);
