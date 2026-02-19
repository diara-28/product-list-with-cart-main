function Cart({ cart, setCart, onConfirm }) {
  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h3>Your Cart</h3>

      {cart.map((item) => (
        <div key={item.id} className="cart-row">
          <span>{item.name}</span>
          <span>x{item.quantity}</span>
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h4>Total: ${total.toFixed(2)}</h4>

      <button onClick={onConfirm} disabled={cart.length === 0}>
        Confirm order
      </button>

      <button onClick={() => setCart([])}>Clear cart</button>
    </div>
  );
}

export default Cart;