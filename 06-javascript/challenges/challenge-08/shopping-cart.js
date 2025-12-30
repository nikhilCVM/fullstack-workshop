const cart = createShoppingCart();

function createShoppingCart() {
  let discount = 0; // discount percent
  let Items = [];

  return {
    addItem(newItem) {
      const existing = Items.find(i => i.id === newItem.id);

      if (existing) {
        existing.quantity += newItem.quantity;
        console.log(`Updated item → ${existing.name}, new quantity: ${existing.quantity}`);
      } else {
        Items.push({ ...newItem });
        console.log(`Added new item → ${newItem.name}, quantity: ${newItem.quantity}`);
      }

      console.log(`Cart items now: ${JSON.stringify(Items)}`);
    },

    getItems() {
      console.log(`Returning ${Items.length} item(s) from cart`);
      return Items;
    },

    updateQuantity(reqId, newQuan) {
      const item = Items.find(i => i.id === reqId);
      if (item) {
        item.quantity = newQuan;
        console.log(`Quantity set → ${item.name}: ${item.quantity}`);
      } else {
        console.log(`Item with ID ${reqId} not found`);
      }
    },

    removeItem(remId) {
      const before = Items.length;
      Items = Items.filter(i => i.id !== remId);
      const after = Items.length;
      console.log(`Removed item ID ${remId}. Items before: ${before}, after: ${after}`);
    },

    getTotal() {
      let total = Items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const final = total - (total * discount) / 100;

      console.log(`Cart subtotal: $${total}`);
      console.log(`Discount applied: ${discount}%`);
      console.log(`Final total after discount: $${final.toFixed(2)}`);

      return final;
    },

    getItemCount() {
      const count = Items.reduce((sum, i) => sum + i.quantity, 0);
      console.log(`Total item count: ${count}`);
      return count;
    },

    isEmpty() {
      console.log(`Cart empty status: ${Items.length === 0}`);
      return Items.length === 0;
    },

    applyDiscount(code, percent) {
      if (percent > 0) {
        discount = percent;
        console.log(`Discount code "${code}" accepted → ${percent}% off`);
      } else {
        console.log(`Discount code "${code}" invalid or 0%`);
      }
    },

    clear() {
      Items = [];
      console.log(`Cart cleared. Items: ${Items.length}`);
    }
  };
}

// TESTING
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
console.log(`Status check: why?`);
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });

console.log(cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(`Total price: $${cart.getTotal().toFixed(2)}`);
console.log(`Total items: ${cart.getItemCount()}`);
console.log(`Is empty?: ${cart.isEmpty()}`);

cart.applyDiscount(`SAVE10`, 10);
console.log(`Total after discount: $${cart.getTotal().toFixed(2)}`);

cart.clear();
console.log(`Is empty after clear?: ${cart.isEmpty()}`);
