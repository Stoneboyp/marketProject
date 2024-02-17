import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Sellers } from "@pages/Sellers";
import { AppProvider } from "@contexts/AppContexts";
import { ProductTypes } from "@pages/ProductTypes";
import { Checks } from "@pages/Checks";

function App() {
  return (
    <AppProvider>
      <Router>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/sellers">
            <h2>Sellers</h2>
          </Link>
          <Link to="/products">
            <h2>ProductTypes</h2>
          </Link>
          <Link to="/checks">
            <h2>Checks</h2>
          </Link>
        </div>
        <Routes>
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/products" element={<ProductTypes />} />
          <Route path="/checks" element={<Checks />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
