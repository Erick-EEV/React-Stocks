import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks
          .filter((stock) => stock.type === this.props.type)
          .map((stock, index) => {
            return (
              <Stock
                stock={stock}
                key={index}
                clickAction={this.props.buyStock}
              />
            );
          })}
      </div>
    );
  }
}

export default StockContainer;
