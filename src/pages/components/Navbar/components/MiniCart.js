import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// images
import Basket from "../../../../assets/basket.svg";
import AddOrRemoveBtn from "../../AddOrRemoveBtn/AddOrRemoveBtn";

// styles
import {
  BoldMiniCartCaption,
  BtnContainer,
  Buttons,
  Cart,
  CartImage,
  CartItem,
  CartItemsLength,
  CartNav,
  CartPdName,
  CartPdPrice,
  CheckoutBtn,
  Image,
  Img,
  Info,
  Items,
  MiniCartCaption,
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
    if (!this.props.isCartOpen) {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (this.props.isCartOpen) {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
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
        {isCartOpen === true ? (
          <div>
            <Img src={Basket} alt="" />
            {cart.length ? (
              <CartItemsLength>{totalItems}</CartItemsLength>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <NavLink onClick={() => setIsCartOpen(true)}>
            <Img src={Basket} alt="" />
            {cart.length ? (
              <CartItemsLength>{totalItems}</CartItemsLength>
            ) : (
              <div></div>
            )}
          </NavLink>
        )}
        {isCartOpen === true && (
          <>
            <Cart ref={this.setCartRef} id="mini-cart">
              <MiniCartCaption>
                <BoldMiniCartCaption>My Bag,</BoldMiniCartCaption> {cart.length}{" "}
                items
              </MiniCartCaption>
              <Items>
                {cart.map((item) => (
                  <>
                    <CartItem>
                      <Info>
                        <CartPdName>{item.brand}</CartPdName>
                        <CartPdName>{item.name}</CartPdName>
                        {item.prices.map(
                          (newItem) =>
                            newItem.currency === price.currency && (
                              <CartPdPrice>
                                {price.symbol}{" "}
                                {(newItem.amount * item.amount).toFixed(2)}
                              </CartPdPrice>
                            )
                        )}
                      </Info>
                      <Image>
                        <Buttons>
                          <AddOrRemoveBtn
                            value="+"
                            width={24}
                            height={24}
                            size={10}
                            onClick={() => addToCart(item)}
                          />
                          <span
                            style={{
                              margin: "5px",
                              fontSize: "24px",
                              fontWeight: "600",
                            }}
                          >
                            {item.amount}
                          </span>
                          <AddOrRemoveBtn
                            value="-"
                            height={24}
                            width={24}
                            size={10}
                            onClick={() => removeFromCart(item.id)}
                          />
                        </Buttons>
                        <CartImage src={item.gallery[0]} alt="" />
                      </Image>
                    </CartItem>
                  </>
                ))}
              </Items>
              <Total>
                <h4>Total</h4>
                <p style={{ display: "block" }}>
                  {price.symbol} {result.toFixed(2)}
                </p>
              </Total>
              <BtnContainer>
                <ViewBag
                  as={Link}
                  to="/cart"
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                >
                  View Bag
                </ViewBag>
                <CheckoutBtn
                  as={Link}
                  to="/cart"
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                >
                  Check out
                </CheckoutBtn>
              </BtnContainer>
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
