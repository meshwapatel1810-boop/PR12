import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function CurrentOrders() {
  return (
    <div className="card">
      <h2>📦 Current Orders</h2>
      <p>Your orders are being processed!</p>
      <h3>Order #101</h3>
      <span className="status">🚚 In Progress</span>
    </div>
  );
}

function OrderHistory() {
  return (
    <div className="card">
      <h2>📋 Order History</h2>
      <p>Check your previously completed orders.</p>
      <h3>Order #100</h3>
      <span className="delivered">✅ Delivered</span>
    </div>
  );
}

function CancelledOrders() {
  return (
    <div className="card">
      <h2>❌ Cancelled Orders</h2>
      <p>Here you can see your cancelled orders.</p>
      <h3>Order #099</h3>
      <span className="cancelled">Cancelled</span>
    </div>
  );
}

function Orders() {
  return (
    <div className="container">
      <header>
        <h1>🛍️ ShopEase</h1>
        <p>Your Orders, Your Way!</p>
      </header>

      <h2 className="title">Order Management</h2>
      <p className="subtitle">Manage and track your orders easily.</p>

      <nav>
        <NavLink to="current">📦 Current Orders</NavLink>
        <NavLink to="history">📋 Order History</NavLink>
        <NavLink to="cancelled">❌ Cancelled Orders</NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
          <Route path="*" element={<CurrentOrders />} />
        </Routes>
      </div>

      <footer>© 2026 ShopEase | Happy Shopping 💙</footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders/*" element={<Orders />} />
        <Route path="*" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}