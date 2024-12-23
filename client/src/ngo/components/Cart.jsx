const Cart = ({ cartItems}) => {
    return (
      <div className="container mt-4">
        <h3>Your Cart</h3>
        {cartItems > 0 ? (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              item.qty > 0 && (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.item}
                  <span className="badge bg-primary rounded-pill">{item.qty}</span>
                </li>
              )
            ))}
          </ul>
        ) : <p>Your cart is empty.</p>}
  
        <button className="btn btn-success mt-3">Proceed to Checkout</button>
      </div>
    );
  };
  
  export default Cart;
  