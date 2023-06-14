const items = [{
        id: 0,
        nome: 'Camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 1,
        nome: 'Shors',
        img: 'imagens/shorts.webp',
        quantidade: 0,
        valor: 180,
    },
    {
        id: 3,
        nome: 'Chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 20,
    },
    {
        id: 4,
        nome: 'Camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
        valor: 30,
    },
    {
        id: 5,
        nome: 'Camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
        valor: 50,
    },
    {
        id: 6,
        nome: 'Chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 40,
    },
    {
        id: 7,
        nome: 'Chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 90,
    },
    {
        id: 8,
        nome: 'Shors',
        img: 'imagens/shorts.webp',
        quantidade: 0,
        valor: 142,
    },
    {
        id: 9,
        nome: 'Camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
        valor: 125,
    },
    {
        id: 10,
        nome: 'Shors',
        img: 'imagens/shorts.webp',
        quantidade: 0,
        valor: 110,
    },


]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {

        containerProdutos.innerHTML += `
        
        <div class='produto-single'>
       
        <span>${val.nome}</span>
        <div class="fundoBola"></div>
            <img src='${val.img}'/>
            <div class="destaqueValor">
            <span>R$ ${val.valor}</span>
            <a key='${val.id}' href='#'>Comprar</a>
            </div>
        </div>
        
        `;

    });

}


inicializarLoja();



atualizarCarrinho = () => {

    var spntotal = document.getElementById('spntotal');
    spntotal.innerHTML = `${0}`
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = "";

    items.map((val) => {
        console.log(val)

        if (val.quantidade > 0) {

            containerCarrinho.innerHTML += `
            <div class='grid-template-2'>
             <div class='sidenav'>
                <img src="${val.img}" class="imgCarrinho">        
            </div>
            <div class='content'>
             <p>${val.nome}</p>
             </div>
            <div class='footer'>
             <p>Quantidade: <span id="quantidade">${val.quantidade}</span> </p>
             <p>Valor: <span id="valorProduto">${val.valor} </span></p>
             </div>
        </div>
        <hr>
        
        `;


            const produtosComQuantidade = items.filter(item => item.quantidade > 0);

            const somaValores = produtosComQuantidade.reduce((total, item) => total + (item.valor * item.quantidade), 0);





        }




    })


}

const links = document.querySelectorAll('a[key]');
console.log(links)

links.forEach(link => {

    link.addEventListener("click",
        function() {

            let key = this.getAttribute("key")
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
});