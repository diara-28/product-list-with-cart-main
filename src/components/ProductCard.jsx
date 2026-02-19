function ProductCard({ product, cart, setCart }) {
  const itemInCart = cart.find((i) => i.id === product.id);

  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increase = () => {
    setCart(
      cart.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrease = () => {
    setCart(
      cart
        .map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>

      {!itemInCart ? (
        <button onClick={addToCart}>Add to cart</button>
      ) : (
        <div className="qty">
          <button onClick={decrease}>-</button>
          <span>{itemInCart.quantity}</span>
          <button onClick={increase}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;