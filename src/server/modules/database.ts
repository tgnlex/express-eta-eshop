import { dbError } from '../lib/errors.js'


class Database {
  data = {
   products: [],
   articles: [],
   users: [],
  }

  constructor(initial) {
    if (initial.products) this.data.products = initial.products; 
    if (initial.articles) this.data.articles = initial.articles;
    if (initial.users) this.data.users = initial.users;
  }
  insert(name, data) {
    switch (name) {
      case "products":
        this.data.products.push(data);
        break;
      case "articles":
        this.data.articles.push(data);
        break;
      case "users": 
        this.data.users.push(data);
        break;
    default: 
      dbError(name); 
    }
  }
  find(name, id) {
    let index = id - 1;
    switch (name) {
      case "products":
        return this.data.products[index];
      case "articles":
        return this.data.articles[index];
      case "users":
        return this.data.users[index];
      default: 
        dbError(name);
    }
  }
}


export default Database;
