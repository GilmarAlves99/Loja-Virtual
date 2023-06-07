const botao = document.getElementById("buttonCar")
const botaoSair = document.getElementById("buttonExit")
const modal = document.getElementById("modalCarrinho");

console.log(botao)

botao.addEventListener("click", () => {
    modal.style.display = "block";
})
botaoSair.addEventListener("click", () => {

    modal.style.display = "none";
})