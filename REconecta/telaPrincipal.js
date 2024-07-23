// Recupera os produtos do localStorage e exibe na lista
let products = JSON.parse(localStorage.getItem('products')) || [];
let productListDiv = document.querySelector('.product-list');

products.forEach(function(product, index) {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    productDiv.innerHTML = '<h3>' + product.name + '</h3>' +
                           '<img src="' + product.image + '" alt="' + product.name + '" class="product-image">' +
                           '<p><strong>Tipo:</strong> ' + product.type + '</p>' +
                           '<p><strong>Descrição:</strong> ' + product.description + '</p>' +
                           '<button class="btn-donate" data-product-index="' + index + '">Receber Doação</button>';

    productListDiv.appendChild(productDiv);
});

// Adiciona um listener para os botões de doação
document.querySelectorAll('.btn-donate').forEach(function(button) {
    button.addEventListener('click', function() {
        let productIndex = this.getAttribute('data-product-index');
        let product = products[productIndex];

        // Adiciona o produto ao carrinho
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Produto adicionado ao carrinho!');
    });
});

function anunciar() {
    window.location.href = 'anunciar.html';
}
