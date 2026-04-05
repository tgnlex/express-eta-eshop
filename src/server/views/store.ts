import layout from './layout/index.ts';

const store = ()  => layout(`
  <main id="store" class="page">
    <h1 id="heading">Store</h1>
    <div id="products" class="grid"></div>
  </main>
  <script src="js/store.js"></script>
`);

export default store;
