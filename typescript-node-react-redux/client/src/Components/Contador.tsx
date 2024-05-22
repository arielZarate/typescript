import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Redux/feactures/counter/CounterSlices";

import { Dispatch } from "@reduxjs/toolkit";
const Contador = () => {
  /**
   ==========metodo viejo cin redux con useSate=============
  const [contador, SetContador] = useState(0);
  const handleIncrement = () => SetContador(contador + 1);
 */

  //metodo con redux/slices
  const contador = useSelector((state: RootState) => state.counterSlices.count);

  const dispatch: Dispatch = useDispatch();

  return (
    <>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "blueviolet", margin: "10px 20px" }}>Contador</h2>
        <div style={{ display: "flex" }}>
          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //   onClick={() => SetContador(contador - 1)}
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span
            style={{
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            {contador}
          </span>
          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "60px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //onClick={() => SetContador(contador + 1)}
            onClick={() => dispatch(increment())}
          >
            +
          </button>

          <button
            type="button"
            style={{
              backgroundColor: "cyan",
              padding: "4px 0",
              width: "200px",
              borderRadius: "15px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
            //onClick={() => SetContador(contador + 1)}
            onClick={() => dispatch(incrementByAmount(2))}
          >
            increment x 2
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
