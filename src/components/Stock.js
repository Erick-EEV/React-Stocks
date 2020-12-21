import React from "react";
import StockContainer from "../containers/StockContainer";

const Stock = (props) => (
  <div>
    <div className="card">
      <div
        className="card-body"
        onClick={() => props.clickAction(props.stock)}
      >
        <h5 className="card-title">
          {
            //Company Name
            props.stock.name
          }
        </h5>
        <p className="card-text">
          {props.stock.ticker} : {props.stock.price}
        </p>
      </div>
    </div>
  </div>
);

export default Stock;
