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
        id: 2,
        nome: 'Chuteira',
        img: 'imagens/shorts.webp',
        quantidade: 0,
        valor: 140,
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


const filtroSelect = document.getElementById('filtroProdutos');
console.log(filtroSelect)

filtroSelect.addEventListener('change', () => {
    const filtro = filtroSelect.value;


    let itensFiltrados = [];

    switch (filtro) {
        case 'menor':
            itensFiltrados = items.slice().sort((a, b) => a.valor - b.valor);
            break;
        case 'maior':
            itensFiltrados = items.slice().sort((a, b) => b.valor - a.valor);
            break;
        case 'camisa':
            itensFiltrados = items.filter(item => item.nome === 'Camiseta');
            break;
        case 'chuteira':
            itensFiltrados = items.filter(item => item.nome === 'Chuteira');
            break;
        case 'shorts':
            itensFiltrados = items.filter(item => item.nome === 'Shors');
            break;
        default:
            itensFiltrados = items;
            break;
    }

    // Atualiza a exibição dos itens filtrados
    atualizarItensExibidos(itensFiltrados);
})

inicializarLoja = () => {
    let containerProdutos = document.getElementById('produtos');
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


const containerCarrinho = document.getElementById('carrinho')
const spntotal = document.getElementById('spntotal');
const quantidadeNotificacao = document.getElementById('quantidadeNotificacao');

atualizarCarrinho = () => {

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
                <p>Quantidade: <span id="quantidade">${val.quantidade}</span> </p>
                <p>Valor: <span id="valorProduto">${val.valor} </span></p>
            </div>
        </div>
        <hr>
    `;


            var produtosComQuantidade = items.filter(item => item.quantidade > 0);

            var somaValores = produtosComQuantidade.reduce((total, item) => total + (item.valor * item.quantidade), 0);


            spntotal.textContent = `${ somaValores }`


            var quantidadeTotal = produtosComQuantidade.reduce((total, item) => total + item.quantidade, 0);
            // Atualizar a notificação de quantidade de produtos
            quantidadeNotificacao.textContent = quantidadeTotal;
        }




    })


}

// Função para atualizar a exibição dos itens
function atualizarItensExibidos(itens) {
    const containerProdutos = document.getElementById('produtos');
    containerProdutos.innerHTML = '';

    itens.forEach(item => {
        containerProdutos.innerHTML += `
        <div class='produto-single'>
          <span>${item.nome}</span>
          <div class="fundoBola"></div>
          <img src='${item.img}'/>
          <div class="destaqueValor">
            <span>R$ ${item.valor}</span>
            <a key='${item.id}' href='#'>Comprar</a>
          </div>
        </div>
      `;
    });

    // Atualiza os ouvintes de evento dos links de compra
    const links = document.querySelectorAll('a[key]');
    links.forEach(link => {
        link.addEventListener('click', function() {
            const key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        });
    });
}

// Chama a função inicializarLoja para exibir todos os itens inicialmente
inicializarLoja();