const items = [{
        id: 0,
        nome: 'camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'shorts',
        img: 'imagens/shorts.webp',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {

        containerProdutos.innerHTML += `
        <div class='produto-single'>
            <img src='${val.img}'/>
            <p>${val.nome}</p>
            <a key='${val.id}' href='#'>Adicicionar ao carrinho</a>
        </div>
        
        `;

    });

}


inicializarLoja();


atualizarCarrinho = () => {
    console.log(items)
}

var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",
        function() {
            let key = this.getAttribute("key")
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
}