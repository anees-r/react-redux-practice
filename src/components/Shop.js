import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { sellShare, buyShare } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div className="container col-md-3 my-4 border border-dark p-4 rounded shadow mx-auto">
        <h3 className="text-center">Share price: $10</h3>
        <div className="d-flex justify-content-evenly align-items-center">
          {/* <button className="btn btn-dark rounded" style={{borderRadius:"100px"}} onClick={()=>{dispatch(actionCreators.sellShare(10))}}>-</button>
          <p className="text-center">Sell or Buy</p>
          <button className="btn btn-dark rounded" style={{borderRadius:"100px"}}onClick={()=>{dispatch(actionCreators.buyShare(10))}}>+</button> */}

          <button
            className="btn btn-dark rounded"
            style={{ borderRadius: "100px" }}
            onClick={() => {
              sellShare(10);
            }}
          >
            -
          </button>
          <p className="text-center">Sell or Buy</p>
          <button
            className="btn btn-dark rounded"
            style={{ borderRadius: "100px" }}
            onClick={() => {
              buyShare(10);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
