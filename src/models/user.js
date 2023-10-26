const mongodb = require("mongodb");
const getDb = require("../util/database").getDB;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(name, email, cart, id) {
    this.name = name;
    this.email = email;
    this.cart = cart; //{ items: [] }
    this._id = id;
    // this.created_at = new Date();
    // this.updated_at = new Date();
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProductIndex = this.cart.items.findIndex((cp) => {
    //   return cp.productId.toString() === product._id.toString();
    // });
    // let newQuantity = 1;
    // const updatedCartItems = [...this.cart.items];

    // if (cartProductIndex >= 0) {
    //   newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    //   updatedCartItems[cartProductIndex].quantity = newQuantity;
    // } else {
    //   updatedCartItems.push({
    //     productId: new ObjectId(product._id),
    //     quantity: newQuantity,
    //   });
    // }
    // const updatedCart = {
    //   items: updatedCartItems,
    // };
    // const db = getDb();
    // return db
    //   .collection("users")
    //   .updateOne(
    //     { _id: new ObjectId(this._id) },
    //     { $set: { cart: updatedCart } }
    //   );
    const updatedCart = {
      items: [{ productId: new ObjectId(product._id), quantity: 1 }],
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findById(id) {
    const db = getDb();
    return db.collection("users").findOne({ _id: new ObjectId(id) });
  }
}

module.exports = User;
