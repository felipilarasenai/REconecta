document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let productName = document.getElementById('productName').value;
    let productDescription = document.getElementById('productDescription').value;
    let productType = document.getElementById('productType').value;
    let productImage = document.getElementById('productImage').files[0]; // Obtém o arquivo de imagem

    let reader = new FileReader();
    reader.onload = function(e) {
        let productData = {
            id: Date.now(), // Adiciona um ID único para cada produto
            name: productName,
            description: productDescription,
            type: productType,
            image: e.target.result // URL da imagem convertida para base64
        };

        // Salva os dados do produto no localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(productData);
        localStorage.setItem('products', JSON.stringify(products));

        // Limpa o formulário após o cadastro
        document.getElementById('productForm').reset();
        alert('Produto cadastrado com sucesso!');
    };

    if (productImage) {
        reader.readAsDataURL(productImage); // Converte a imagem para base64
    }
});
