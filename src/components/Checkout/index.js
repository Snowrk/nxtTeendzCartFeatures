import {useState} from 'react'
import './index.css'

const Checkout = props => {
  const {close, totalCost, items} = props
  const [active, setActive] = useState(false)
  const [toggle, setToggle] = useState(false)
  return (
    <div className="checkout-popup">
      {toggle ? (
        <div className="success">
          <p>Your order has been placed successfully</p>
          <button type="button" className="onclose" onClick={close}>
            Close
          </button>
        </div>
      ) : (
        <>
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
          <div>
            <h1>Order Summary</h1>
            <p>Total Cost: {totalCost}</p>
            <p>Items in Card: {items}</p>
          </div>
          <form>
            <h1>Select Payment Method</h1>
            <div>
              <input id="card" type="radio" name="payment" disabled />
              <label htmlFor="card">Card</label>
            </div>
            <div>
              <input id="upi" type="radio" name="payment" disabled />
              <label htmlFor="upi">UPI</label>
            </div>
            <div>
              <input id="netBanking" type="radio" name="payment" disabled />
              <label htmlFor="netBanking">Net Banking</label>
            </div>
            <div>
              <input id="wallet" type="radio" name="payment" disabled />
              <label htmlFor="wallet">Wallet</label>
            </div>
            <div>
              <input
                id="cashOnDelivery"
                type="radio"
                name="payment"
                onChange={() => setActive(prev => !prev)}
              />
              <label htmlFor="cashOnDelivery">Cash On Delivery</label>
            </div>
            <button
              type="button"
              onClick={() => setToggle(true)}
              disabled={!active}
            >
              Confirm Order
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Checkout
