const items = [{
        id: 0,
        nome: 'camiseta',
        img: 'imagens/camisa.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 1,
        nome: 'shorts',
        img: 'imagens/shorts.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 2,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 4,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 5,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 55,
        nome: 'chu88teira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 28,
        nome: 'chu88teira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 266,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 274,
        nome: 'chuteira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
    },
    {
        id: 75,
        nome: 'chut8578eira',
        img: 'imagens/chuteira.webp',
        quantidade: 0,
        valor: 80,
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
            <span>${val.valor}</span>
            <a key='${val.id}' href='#'>Comprar</a>
        </div>
        
        `;

    });

}


inicializarLoja();


atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = "";

    items.map((val) => {
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
             <p>Quantidade: ${val.quantidade} </p>
             <p>Valor: ${val.valor} </p>
             </div>
        </div>
        <hr>
        
        `
        }
    })
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