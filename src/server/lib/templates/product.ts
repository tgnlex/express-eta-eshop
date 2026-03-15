/******* PRODUCT TEMPLATE FORM *******/

const product = (data) => {
  let state = { quantity: 0 };
  let add_btn = 'Add to Card';
  function addItem () {state.quantity = state.quantity + 1};
  function rmvItem () {state.quantity = state.quantity - 1};
  return `
  <section class="product">
    <!----- PRODUCT IMAGE ----->
    <div class="product--image--container container">
      <img class="product--image" src="${data.image}" alt="product image" />
    </div>
    
    <!----- PRODUCT DATA ----->
    <div class="product--data--container container">
      <h2 class="product--name">${data.name}</h2>
      <p class="product--description text">
        Description: ${data.description}
      </p>
    </div>

    <!----- PRODUCT CONTROLS ----->
    <div class="product--controls">
      <div id="quantity-controls" class="row">      
        <button id="btn--rmv-item" onclick="${addItem()}">-</button>
        <p>${state.quantity}</p>
        <button id="btn--add-item" onclick="${rmvItem()}">+</button>
      </div>
      <!----- TODO: LOGIC FOR ADD TO CARD BUTTON ----->
      <button id="btn--card">${add_btn}</button>
    </div>
  </section>
  `;
};

export default product;
