"use client";

import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeItem, notify } =
    useCart();

  const total = cart.reduce((s, i) => s + i.rawPrice * i.qty, 0);

  return (
    <>
      {/* Notify Toast */}
      {notify && <div className="notify">✓ {notify}</div>}

      {/* Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <div
            style={{
              fontFamily: "var(--ff-head)",
              fontSize: 22,
              color: "var(--white)",
              fontWeight: 700,
            }}
          >
            Your Cart
          </div>
          <button
            style={{
              cursor: "pointer",
              fontSize: 20,
              color: "var(--muted)",
              background: "none",
              border: "none",
            }}
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.3 }}>
                🛒
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Your cart is empty
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div style={{ flex: 1 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{item.price}</div>
                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <div className="cart-total">
            <span
              style={{
                fontSize: 14,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontWeight: 600,
              }}
            >
              SUBTOTAL
            </span>
            <span
              style={{
                fontFamily: "var(--ff-head)",
                fontSize: 24,
                color: "var(--gold)",
                fontWeight: 700,
              }}
            >
              KES {total.toLocaleString()}
            </span>
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", marginBottom: 10 }}
          >
            Proceed to Checkout →
          </button>
          <button
            className="btn-outline"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setCartOpen(false)}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
