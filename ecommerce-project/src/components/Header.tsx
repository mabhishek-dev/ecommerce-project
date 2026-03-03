import { Link } from "react-router"; //As React is a SPA, we don't need to reload rather we switch between pages
import "./Header.css";

// cart is an array, so we type it as CartItem[]
// Each cart item has:
// - productId (string)
// - quantity (number)
// - deliveryOptionId (string)
type HeaderProps = {
  cart: {
    //this is what is present inside an array
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[]; //here, its an array
};

export function Header({ cart }: HeaderProps) {
  //we create an alias rather directly adding here
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
