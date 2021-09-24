import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// images
import Basket from "../../../../assets/basket.svg";
import AddOrRemoveBtn from "../../AddOrRemoveBtn/AddOrRemoveBtn";

// styles
import {
  Buttons,
  Cart,
  CartImage,
  CartItem,
  CartItemsLength,
  CartNav,
  Image,
  Img,
  Info,
  NavLink,
  Total,
  ViewBag,
} from "../Navbar.styles";

// redux
import {
  addToCart,
  removeFromCart,
  setIsCartOpen,
} from "../../../../redux/actions/cartActions";

class MiniCart extends PureComponent {
  constructor() {
    super();

    this.setCartRef = this.setCartRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.cartRef && !this.cartRef.contains(event.target)) {
      this.props.setIsCartOpen(false);
    }
  }

  setCartRef(node) {
    this.cartRef = node;
  }

  render() {
    const {
      cart,
      isCartOpen,
      price,
      addToCart,
      removeFromCart,
      setIsCartOpen,
    } = this.props;

    const totalItems = cart.reduce((ack, item) => ack + item.amount, 0);

    const result = cart.reduce((ack, pd) => {
      const pdPrice = pd.prices.find(
        (item) => item.currency === price.currency
      );
      return ack + pdPrice.amount * pd.amount;
    }, 0);

    return (
      <CartNav>
        <NavLink onClick={() => setIsCartOpen(true)}>
          <Img src={Basket} alt="" />
          {cart.length ? (
            <CartItemsLength>{totalItems}</CartItemsLength>
          ) : (
            <div></div>
          )}
        </NavLink>
        {isCartOpen === true && (
          <>
            <Cart ref={this.setCartRef} id="mini-cart">
              <h5>My Bag, {cart.length} items</h5>
              {cart.map((item) => (
                <>
                  <CartItem>
                    <Info>
                      <h4>{item.name}</h4>
                      {item.prices.map(
                        (newItem) =>
                          newItem.currency === price.currency && (
                            <p>
                              {price.symbol}{" "}
                              {(newItem.amount * item.amount).toFixed(2)}
                            </p>
                          )
                      )}
                    </Info>
                    <Image>
                      <Buttons>
                        <AddOrRemoveBtn
                          value="+"
                          verticalPadding={3}
                          horizontalPadding={8}
                          onClick={() => addToCart(item)}
                        />
                        <span style={{ margin: "5px" }}>{item.amount}</span>
                        <AddOrRemoveBtn
                          value="-"
                          verticalPadding={4}
                          horizontalPadding={10}
                          onClick={() => removeFromCart(item.id)}
                        />
                      </Buttons>
                      <CartImage src={item.gallery[0]} alt="" />
                    </Image>
                  </CartItem>
                </>
              ))}
              <Total>
                <h4>Total</h4>
                <p style={{ display: "block" }}>
                  {price.symbol} {result.toFixed(2)}
                </p>
              </Total>
              <ViewBag
                as={Link}
                to="/cart"
                type="button"
                onClick={() => setIsCartOpen(false)}
              >
                View Bag
              </ViewBag>
            </Cart>
          </>
        )}
      </CartNav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
    cart: state.cart,
    isCartOpen: state.isCartOpen,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  setIsCartOpen: setIsCartOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
