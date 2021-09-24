import React, { PureComponent } from "react";
import { connect } from "react-redux";

// images
import UpperArrow from "../../../../assets/upperArrow.svg";
import DownArrow from "../../../../assets/downArrow.svg";

// styles
import {
  CurrencyDropDown,
  CurrencyText,
  DownIcon,
  CurrencyList,
  CurrencyListItem,
} from "../Navbar.styles";

// redux
import {
  changeCurrency,
  setIsCurrencyOpen,
} from "../../../../redux/actions/cartActions";

// currency data
const currencies = [
  { currency: "USD", symbol: "$" },
  { currency: "GBP", symbol: "£" },
  { currency: "AUD", symbol: "A$" },
  { currency: "JPY", symbol: "¥" },
  { currency: "RUB", symbol: "₽" },
];

class CurrencySwitcher extends PureComponent {
  changeCurrencyOfPrice(currency, symbol) {
    this.props.changeCurrency(currency, symbol);
    this.props.setIsCurrencyOpen(!this.props.isCurrencyOpen);
  }

  render() {
    const { setIsCurrencyOpen, isCurrencyOpen, price } = this.props;
    return (
      <>
        <CurrencyDropDown
          onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
          style={{ marginRight: "20px" }}
        >
          {isCurrencyOpen === true ? (
            <>
              <CurrencyText>{price.symbol}</CurrencyText>
              <DownIcon src={UpperArrow} alt="upper" />
            </>
          ) : (
            <>
              <CurrencyText>{price.symbol}</CurrencyText>
              <DownIcon src={DownArrow} alt="upper" />
            </>
          )}
        </CurrencyDropDown>
        {isCurrencyOpen === true && (
          <CurrencyList>
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
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCurrencyOpen: state.isCurrencyOpen,
    price: state.price,
  };
};

const mapDispatchToProps = {
  setIsCurrencyOpen: setIsCurrencyOpen,
  changeCurrency: changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
