// Write your code here
import Popup from 'reactjs-popup'
import Checkout from '../Checkout'

const CartSummary = props => {
  const {totalCost, items} = props
  return (
    <div className="summary">
      <h1>
        Order Total: <span>Rs {totalCost}/-</span>
      </h1>
      <p>{items} items in cart</p>
      <Popup
        trigger={
          <button type="button" className="checkout">
            Checkout
          </button>
        }
        modal
      >
        {close => (
          <Checkout close={close} totalCost={totalCost} items={items} />
        )}
      </Popup>
    </div>
  )
}

export default CartSummary
