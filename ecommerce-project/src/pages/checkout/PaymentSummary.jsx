import axios from "axios";
import { useNavigate } from "react-router"; //allows navigation to another page
import formatMoney from "../../utils/money";
export function PaymentSummary({ paymentSummary, loadCart }) {
  const navigate = useNavigate();
  const createOrder = async () => {
    await axios.post("/api/orders"); //this post, after creating an order actually clears the cart
    await loadCart(); //loading the cart as cart is empty
    navigate("/orders"); //after ordering, we go to the orders page
  };
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      {/* run only if payment summary is not null */}
      {paymentSummary && (
        <>
          <div className="payment-summary-row">
            <div>Items ({paymentSummary.totalItems}):</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.productCostCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.shippingCostCents)}
            </div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.totalCostCents)}
            </div>
          </div>

          <button
            className="place-order-button button-primary"
            onClick={createOrder}
          >
            Place your order
          </button>
        </>
      )}
    </div>
  );
}
