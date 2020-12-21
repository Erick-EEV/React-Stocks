import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    type: "Tech",
  };

  componentDidMount() {
    let url = "http://localhost:3000/stocks";
    fetch(url)
      .then((response) => response.json())
      .then((allStocks) =>
        this.setState({
          stocks: allStocks,
        })
      );
  }

  buyStock = (stock) => {
    !this.state.portfolio.includes(stock) ? 
    this.setState({
      portfolio: [...this.state.portfolio, stock],
      //Using the spread operator to take the current array of portfolio
      //Then placing the stock within that array
    }) : null
  };

  sellStock = (soldStock) => {
    let newPortfolio = this.state.portfolio.filter(
      (stock) => stock != soldStock
    );
    //Creating a new variable to filter the array of portfolio
    //with only the stocks that do not match the id of the clicked stock
    this.setState({
      portfolio: newPortfolio,
    });
  };

  filterByAlph = (stocksArray) => {
    stocksArray = this.state.stocks;
    stocksArray.sort((stock1, stock2) => (stock1.name > stock2.name ? 1 : -1));

    this.setState({
      stocks: stocksArray,
    });
  };

  filterByPrice = (stocksArray) => {
    stocksArray = this.state.stocks;
    stocksArray.sort((stock1, stock2) =>
      stock1.price > stock2.price ? 1 : -1
    );

    this.setState({
      stocks: stocksArray,
    });
  };

  filterByType = (newType) => {
    this.setState({
      type: newType,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          type={this.state.type}
          filterByType={this.filterByType}
          filterByPrice={this.filterByPrice}
          filterByAlph={this.filterByAlph}
          sellStock={this.sellStock}
          buyStock={this.buyStock}
          stocks={this.state.stocks}
          portfolio={this.state.portfolio}
        />
      </div>
    );
  }
}

export default App;
