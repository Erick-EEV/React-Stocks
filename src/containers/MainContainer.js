import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          filterByType={this.props.filterByType}
          filterByAlph={this.props.filterByAlph}
          filterByPrice={this.props.filterByPrice}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              type={this.props.type}
              filterByType={this.props.filterByType}
              stocks={this.props.stocks}
              buyStock={this.props.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              sellStock={this.props.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
