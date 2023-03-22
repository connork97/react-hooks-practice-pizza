import React from "react";

function Pizza({ pizza, onEditPizza }) {

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Vegetarian" : "Meat Lover"}</td>
      <td>
        <button id={pizza.id} type="button" className="btn btn-primary" onClick={(event) => onEditPizza(event.target.id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
