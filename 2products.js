document.getElementById('buscadordeproductos').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.pau > div, .pau2 > div, .pau3 > div');
   
    products.forEach(product => {
        let title = product.querySelector('h4').innerText.toLowerCase();
        let description = product.querySelector('h5').innerText.toLowerCase();
        if (title.includes(filter) || description.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});



let cart = [];
let cartTotal = 0;

function toggleCart() {
    const cuadrocarritol = document.getElementById('cuadrocarrito');
    cuadrocarrito.style.display = cuadrocarrito.style.display === 'none' || cuadrocarrito.style.display === '' ? 'block' : 'none';
}

function addToCart(name, price, imgSrc) {
    const product = { name, price, imgSrc, id: new Date().getTime() };
    cart.push(product);
    cartTotal += price;
    updateCartDisplay();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        cartTotal -= cart[productIndex].price;
        cart.splice(productIndex, 1);
    }
    updateCartDisplay();
}


function updateCartDisplay() {
    const productoscarrito = document.getElementById('productoscarrito');
    productoscarrito.innerHTML = '';

    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <span>${product.name}</span>
            <span>$${product.price.toLocaleString()}</span>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        productoscarrito.appendChild(listItem);
    });

    document.getElementById('total').textContent = `Total: $${cartTotal.toLocaleString()}`;
    document.getElementById('julibelu').textContent = cart.length;
}

function buyItems() {
    alert(`Thanks for buying! You purchased items for a total of $${cartTotal.toLocaleString()}`);
    cart = [];
    cartTotal = 0;
    updateCartDisplay();
    toggleCart();
}

