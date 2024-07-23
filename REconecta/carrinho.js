document.addEventListener('DOMContentLoaded', function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartListDiv = document.querySelector('.cart-list');

  function renderCart() {
      cartListDiv.innerHTML = ''; // Limpa a lista antes de renderizar

      cart.forEach(function(product, index) {
          var cartItemDiv = document.createElement('div');
          cartItemDiv.classList.add('cart-item');
          cartItemDiv.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" class="product-image">' +
                                  '<p><strong>' + product.name + '</strong></p>' +
                                  '<p><strong>Descrição:</strong> ' + product.description + '</p>' +
                                  '<button class="btn-remove-cart" data-product-index="' + index + '">Remover</button>';

          cartListDiv.appendChild(cartItemDiv);
      });
  }

  renderCart(); // Renderiza o carrinho ao carregar a página

  cartListDiv.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-remove-cart')) {
        let productIndex = event.target.getAttribute('data-product-index');
          cart.splice(productIndex, 1); // Remove o produto do array
          localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o localStorage
          renderCart(); // Re-renderiza o carrinho
      }
  });

  document.getElementById('checkout-button').addEventListener('click', function() {
      if (cart.length === 0) {
          alert('O carrinho está vazio!');
          return;
      }
      alert('Compra finalizada com sucesso!');
      localStorage.removeItem('cart');
      renderCart(); // Limpa o carrinho visualmente após a compra
  });
});
