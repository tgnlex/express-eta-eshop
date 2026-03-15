async function getProducts() {
  const response = await fetch('/api/products');
  const data = await response.json();
  const products = document.querySelector('#products');

  data.products.forEach((product) => {
    const item = document.createElement('li')
    item.innerHTML = `
      <li key="${product.id}">
	<a href="/store/${product.id}">
          <p>${product.name} <span class="price">$ ${product.price}</span></p>
        </a>
      </li>`;
	  
    products.appendChild(item);
  });
}

getProducts();
