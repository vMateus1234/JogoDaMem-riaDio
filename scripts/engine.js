    const gatos = [
        "imagens/gato1.webp",
        "imagens/gato1.webp",
        "imagens/gato2.jpg",
        "imagens/gato2.jpg",
        "imagens/gato3.webp",
        "imagens/gato3.webp",
        "imagens/gato4.jpeg",
        "imagens/gato4.jpeg",
        "imagens/gato5.webp",
        "imagens/gato5.webp",
        "imagens/gato6.jpg",
        "imagens/gato6.jpg",
        "imagens/gato7.jpg",
        "imagens/gato7.jpg",
        "imagens/gato8.jpg",
        "imagens/gato8.jpg",

];

let openCards = []; // Array que guarda as duas cartas abertas atualmente

let shuffleGatos = gatos.sort(()=>(Math.random() > 0.5 ? 2 : -1)); // Embaralha as imagens aleatoriamente com sort e Math.random()

for(let i=0; i<gatos.length; i++){ // Loop para criar cada carta na tela
    let box =document.createElement ("div"); // Cria uma div para a carta
    box.className = "item"; // Adiciona a classe CSS "item" (estilização)
    box.onclick = handleClick  // Define que ao clicar na carta, executa handleClick

    //Cria a imagem oculta   

    let img = document.createElement("img");  // Cria uma imagem dentro da carta, imagem é = document. createElement = box
    img.src = shuffleGatos[i];  // Define o caminho da imagem (já embaralhado)
    img.classList.add("hidden"); // Adiciona a classe "hidden" para esconder a imagem
    box.appendChild(img); // Insere a imagem dentro da div da carta
    
    document.querySelector(".game").appendChild(box); 
    // Insere a carta completa dentro do container com a classe "game"
}

function handleClick() {
    if (openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
function checkMatch (){
    if (openCards[0].innerHTML ===
        openCards[1].innerHTML){
            openCards[0].classList.add
            ("boxMatch");
            openCards[1].classList.add
            ("boxMatch");

    } else {
        openCards[0].classList.remove
        ("boxOpen");
        openCards[1].classList.remove
        ("boxOpen");
    }
    openCards = [];
    if(document.querySelectorAll(".boxMatch").length == gatos.length) {
        alert("Você Venceu!");
    }
}