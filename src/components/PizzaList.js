import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaState, onEditPizza }) {

  const renderPizza = pizzaState.map((pizza) => <Pizza pizza={pizza} onEditPizza={onEditPizza} />)
  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {renderPizza}
      </tbody>
    </table>
  );
}

export default PizzaList;
