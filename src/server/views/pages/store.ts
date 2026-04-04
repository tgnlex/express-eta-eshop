import layout from '../layout/index.ts';

const store = ()  => layout(`
  <main id="home" class="page">
    <h1 id="heading">Store</h1>
    <ul id="products" class="list"></ul>
  </main>
  <script src="js/store.js"></script>
`);

export default store;
