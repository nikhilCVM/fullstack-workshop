function createShoppingCart() {
  const items = [];
  let discount = 0;

  return {
    addItem(newItem) {
      const existing = items.find(item => item.id === newItem.id);
      if (existing) {
        existing.quantity += newItem.quantity;
      } else {
        items.push({ ...newItem });
      }
    },

    getItems() {
      return items;
    },

    updateQuantity(id, qty) {
      const item = items.find(item => item.id === id);
      if (item && qty > 0) {
        item.quantity = qty;
      }
    },

    removeItem(id) {
      const index = items.findIndex(item => item.id === id);
      if (index !== -1) items.splice(index, 1);
    },

    getTotal() {
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      if (discount > 0) {
        const discounted = total - (total * discount) / 100;
        return Number(discounted.toFixed(2));
      }
      return total;
    },

    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    isEmpty() {
      return items.length === 0;
    },

    applyDiscount(code, percent) {
      if (percent > 0) discount = percent;
    },

    clear() {
      items.length = 0;
      discount = 0;
    }
  };
}

// ===== Test Run (same as your example) =====
const cart = createShoppingCart();

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // increases quantity

console.log(cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(cart.getTotal());
console.log(cart.getItemCount());
console.log(cart.isEmpty());

cart.applyDiscount('SAVE10', 10);
console.log(cart.getTotal());

cart.clear();
console.log(cart.isEmpty());
