import layout from './layout/index.ts';



const product = (id)  => layout(`
  <main id="product-${id}" class="page">
    <div id="product" class="large-card" x-data-id="${id}"></div>
  </main>
  <script src="/js/product.js"></script>
`);

export default product;
