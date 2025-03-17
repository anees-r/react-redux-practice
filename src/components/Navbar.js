import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <nav>
        <div className="d-flex justify-content-between bg-dark p-2 text-light">
          <h3 className="mx-2">ReduxShop</h3>
          <button disabled={true} className="btn btn-light mx-2 py-1 px-3">
            Balanace: ${amount}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
