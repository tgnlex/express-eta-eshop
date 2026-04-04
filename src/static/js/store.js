async function getProducts() {
  const response = await fetch('/api/products');
  const data = await response.json();
  console.log(data);
  const products = document.querySelector('#products');

  data.forEach((product) => {
    const item = document.createElement('li')
    item.innerHTML = `
      <li class="card product-card" key="${product.id}">
	      <a class="link" href="/store/${product.id}">
          <p>${product.name} <span class="price">$${product.price}</span></p>
        </a>
      </li>`;
	  
    products.appendChild(item);
  });
}

getProducts();
