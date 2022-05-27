import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from "./Cart";
import { useCart } from "react-use-cart";

import { CartProvider } from "react-use-cart";
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Routes

} from "react-router-dom";

export default function App() {
  return (
    <div>
        <CartProvider>
      <Router>
        <ul>
          <li>
          <Link to="/"> home</Link>
          </li>
          <li>
          <Link to="/Card"> Card</Link>
          </li>
        </ul>
     
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Card' element={<Cart />} />
      </Routes>
    </Router>

      </CartProvider>
    </div>
  );
}
