
async function getProduct() {
  const $product = document.querySelector('#product')
  const id = $product.getAttribute('x-data-id')
  const response = fetch(`/api/products/${id}`);
  const data = response.json();
    
  $product.innerHTML = `
    <div id="product--data">
      <h2>${data.name}</h2>
      <p>$${data.price}</p>
      <form id="add-to-cart" action="#">
        <input class="form-control-number" name="amount" type="number">
        <button class="btn submit" type="submit">Add To Cart</button>
      </form>
    </section>
  `
  
}


getProduct()
