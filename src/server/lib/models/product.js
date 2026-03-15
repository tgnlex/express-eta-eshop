import db from '../config/db.js';



class Product {
  name;
  desc;
  price;
  image;
  constructor(data) {
    this.id = db.data.products.length + 1;
    this.name = data.name;
    this.desc = data.desc;
    this.price = data.price;
    this.image = data.image;
  }
}

export default Product;
