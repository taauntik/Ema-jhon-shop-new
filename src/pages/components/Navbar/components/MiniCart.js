import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// images
import Basket from "../../../../assets/basket.svg";

// redux
import {
  addToCart,
  removeFromCart,
  setIsCartOpen,
} from "../../../../redux/actions/cartActions";

// functions
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
import { AttrSelector } from "../../../ProductDetail/ProductDetail.styles";

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

  totalItems = () => {
    const { cart } = this.props;
    return cart.reduce((ack, item) => ack + item.amount, 0);
  };

  getTotalPrice = () => {
    const { cart, price } = this.props;
    return cart.reduce((ack, pd) => {
      const pdPrice = pd.prices.find(
        (item) => item.currency === price.currency
      );
      return ack + pdPrice.amount * pd.amount;
    }, 0);
  };

  renderBtnContainer = () => {
    const { setIsCartOpen } = this.props;
    return (
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
    );
  };

  renderTotalComponent = () => {
    const { price } = this.props;
    return (
      <Total>
        <h4>Total</h4>
        <p style={{ display: "block" }}>
          {price.symbol} {this.getTotalPrice().toFixed(2)}
        </p>
      </Total>
    );
  };

  renderItems = () => {
    const { cart, price, addToCart, removeFromCart } = this.props;
    return (
      <Items>
        {cart.map((pd) => (
          <>
            <CartItem>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Info>
                  <CartPdName>{pd.brand}</CartPdName>
                  <CartPdName>{pd.name}</CartPdName>
                  {pd.prices.map(
                    (newItem) =>
                      newItem.currency === price.currency && (
                        <CartPdPrice>
                          {price.symbol}{" "}
                          {(newItem.amount * pd.amount).toFixed(2)}
                        </CartPdPrice>
                      )
                  )}
                </Info>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {pd.attributes.map(({ type, item }) => {
                    return (
                      <AttrSelector
                        style={
                          type === "swatch"
                            ? {
                                backgroundColor: `${item.value}`,
                              }
                            : null
                        }
                        selected={true}
                        miniCart={true}
                      >
                        {type === "swatch" ? "" : item.value}
                      </AttrSelector>
                    );
                  })}
                </div>
              </div>

              <Image>
                <Buttons>
                  <AddOrRemoveBtn
                    value="+"
                    width={24}
                    height={24}
                    size={10}
                    onClick={() => addToCart(pd)}
                  />
                  <span
                    style={{
                      margin: "5px",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    {pd.amount}
                  </span>
                  <AddOrRemoveBtn
                    value="-"
                    height={24}
                    width={24}
                    size={10}
                    onClick={() => removeFromCart(pd.id)}
                  />
                </Buttons>
                <CartImage src={pd.gallery[0]} alt="" />
              </Image>
            </CartItem>
          </>
        ))}
      </Items>
    );
  };

  renderMiniCartCaption = () => {
    const { cart } = this.props;
    return (
      <MiniCartCaption>
        <BoldMiniCartCaption>My Bag,</BoldMiniCartCaption> {cart.length} items
      </MiniCartCaption>
    );
  };

  renderCartNavIcon = () => {
    const { isCartOpen, cart, setIsCartOpen } = this.props;
    return (
      <>
        {isCartOpen === true ? (
          <div>
            <Img src={Basket} alt="" />
            {cart.length ? (
              <CartItemsLength>{this.totalItems()}</CartItemsLength>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <NavLink onClick={() => setIsCartOpen(true)}>
            <Img src={Basket} alt="" />
            {cart.length ? (
              <CartItemsLength>{this.totalItems()}</CartItemsLength>
            ) : (
              <div></div>
            )}
          </NavLink>
        )}
      </>
    );
  };

  renderCart = () => {
    const { isCartOpen } = this.props;
    return (
      <>
        {this.renderCartNavIcon()}
        {isCartOpen === true && (
          <Cart ref={this.setCartRef} id="mini-cart">
            {this.renderMiniCartCaption()}
            {this.renderItems()}
            {this.renderTotalComponent()}
            {this.renderBtnContainer()}
          </Cart>
        )}
      </>
    );
  };

  render() {
    return <CartNav>{this.renderCart()}</CartNav>;
  }
}

const mapStateToProps = ({ price, cart, isCartOpen }) => ({
  price,
  cart,
  isCartOpen,
});

const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  setIsCartOpen: setIsCartOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
