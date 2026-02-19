function Modal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Order confirmed</h2>
        <p>Thank you for your order.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;