import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      let totalCost = 0
      for (let i = 0; i < cartList.length; i += 1) {
        totalCost += cartList[i].price * cartList[i].quantity
      }
      const items = cartList.length
      // TODO: Update the functionality to remove all the items in the cart
      const onRemoveAllCartItems = () => removeAllCartItems()

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="remove-all"
                  type="button"
                  onClick={onRemoveAllCartItems}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary totalCost={totalCost} items={items} />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
