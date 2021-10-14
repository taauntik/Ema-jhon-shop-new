import React, { PureComponent } from "react";
import { connect } from "react-redux";
import DownArrow from "../../../../assets/downArrow.svg";
// images
import UpperArrow from "../../../../assets/upperArrow.svg";
// redux
import {
  changeCurrency,
  setIsCurrencyOpen
} from "../../../../redux/actions/cartActions";
// styles
import {
  CurrencyDropDown,
  CurrencyList,
  CurrencyListItem,
  CurrencyText,
  DownIcon
} from "../Navbar.styles";

// currency data
const currencies = [
  { currency: "USD", symbol: "$" },
  { currency: "GBP", symbol: "£" },
  { currency: "AUD", symbol: "A$" },
  { currency: "JPY", symbol: "¥" },
  { currency: "RUB", symbol: "₽" },
];

class CurrencySwitcher extends PureComponent {
  constructor() {
    super();
    this.setCurrencyRef = this.setCurrencyRef.bind(this);
    this.handleClickOutSide = this.handleClickOutSide.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutSide(event) {
    if (this.currencyRef && !this.currencyRef.contains(event.target)) {
      // this.props.setIsCurrencyOpen(false);
    }
  }

  setCurrencyRef(node) {
    this.currencyRef = node;
  }

  changeCurrencyOfPrice(currency, symbol) {
    this.props.changeCurrency(currency, symbol);
    this.props.setIsCurrencyOpen(!this.props.isCurrencyOpen);
  }

  renderCurrencyDropDownIcon = ({ icon }) => {
    const { price } = this.props;
    return (
      <>
        <CurrencyText>{price.symbol}</CurrencyText>
        <DownIcon src={icon} alt="upper" />
      </>
    );
  };

  renderCurrencyList = () => {
    return (
      <CurrencyList ref={this.setCurrencyRef}>
        {currencies.map((item) => (
          <CurrencyListItem
            key={`${new Date()}${Math.random() * 10000}`}
            onClick={() =>
              this.changeCurrencyOfPrice(item.currency, item.symbol)
            }
          >
            {item.symbol} {item.currency}
          </CurrencyListItem>
        ))}
      </CurrencyList>
    );
  };

  renderCurrencySwitcher = () => {
    const { setIsCurrencyOpen, isCurrencyOpen } = this.props;
    return (
      <>
        <CurrencyDropDown onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}>
          {isCurrencyOpen === true
            ? this.renderCurrencyDropDownIcon({ icon: UpperArrow })
            : this.renderCurrencyDropDownIcon({ icon: DownArrow })}
        </CurrencyDropDown>
        {isCurrencyOpen === true && this.renderCurrencyList()}
      </>
    );
  };

  render() {
    return this.renderCurrencySwitcher();
  }
}

const mapStateToProps = ({ isCurrencyOpen, price }) => ({
  isCurrencyOpen,
  price,
});

const mapDispatchToProps = {
  setIsCurrencyOpen: setIsCurrencyOpen,
  changeCurrency: changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
