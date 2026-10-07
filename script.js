const listaDeTenis = [
    {
        titulo: "Nike Vomero 18",
        imagem: "images/laranja.png",
        texto: `The Vomero 18 offers greater cushioning with 6mm more midsole height compared to the Vomero 17, featuring a stack height of 36mm in the forefoot and 46mm in the heel.
        With a new foam collar, the Vomero 18 puts cushioning front and center for a feel that’s 18% softer than the Vomero 17.
        The increased rocker allows for a smoother heel-to-toe transition.`
    },

    {
        titulo: "Nike Alphafly 3",
        imagem: "images/branco.png",
        texto: `All-new Atomknit upper offers containment and breathability.
        Our lightest Alphafly ever features a slightly wider carbon fiber FLYPLATE for increased propulsion and stability.
        For the first time, a fully connected ZoomX midsole and outsole provides runners with a smooth transition and optimized responsiveness.
        A new outsole material delivers multi-directional traction while saving weight.`
    },

    {
        titulo: "ACG Pegasus Trail GORE-TEX",
        imagem: "images/preto.png",
        texto: "It's a hybrid running shoe designed to handle roads, gravel, and moderate trails in any weather condition."
    },
];

let indiceAtual = 0;

// Puxa os elementos do HTML para o JavaScript
const imagemHtml = document.getElementById("imagem-tenis");
const tituloHtml = document.getElementById("titulo-tenis");
const textoHtml = document.getElementById("texto-tenis");

const btnVoltar = document.querySelector(".seta1");
const btnAvancar = document.querySelector(".seta2");

// Função que atualiza a tela com base no índice atual
function atualizarTela() {
    imagemHtml.src = listaDeTenis[indiceAtual].imagem;
    tituloHtml.textContent = listaDeTenis[indiceAtual].titulo;
    textoHtml.textContent = listaDeTenis[indiceAtual].texto;
}

// O que acontece ao clicar na seta da direita (Avançar)
btnAvancar.addEventListener("click", () => {
    indiceAtual++; // Soma 1 no índice
    
    // Se passar do último tênis da lista, volta pro primeiro (índice 0)
    if (indiceAtual >= listaDeTenis.length) {
        indiceAtual = 0;
    }
    
    atualizarTela();
});

// O que acontece ao clicar na seta da esquerda (Voltar)
btnVoltar.addEventListener("click", () => {
    indiceAtual--; // Subtrai 1 do índice
    
    // Se tentar voltar antes do primeiro, vai pro último da lista
    if (indiceAtual < 0) {
        indiceAtual = listaDeTenis.length - 1;
    }
    
    atualizarTela();
});