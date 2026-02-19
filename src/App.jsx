import { useState, useEffect } from "react";
import productsData from "./data.json";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false); // modal visibility

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleConfirm = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCart([]); // clear cart after confirming
  };

  return (
    <>
      <h1 className="page-title">Desserts</h1>

      <div className="container">
        <ProductList products={productsData} cart={cart} setCart={setCart} />

        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 && <p>No items yet</p>}
          {cart.map((item, index) => (
            <div className="cart-row" key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}

          {cart.length > 0 && (
            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm Order
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;