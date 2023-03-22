import React from "react";

function PizzaForm({ editPizzaState, setEditPizzaState, onSubmitPizzaState }) {

  const editYourPizza = (event) => {
    event.target.name === "vegetarian" ?
    setEditPizzaState({...editPizzaState, [event.target.name]: event.target.value.includes("Not") ? false : true })
    : setEditPizzaState({...editPizzaState, [event.target.name]: event.target.value})
  }

  const handlePizzaEditSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/pizzas/" + editPizzaState.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: editPizzaState.topping,
        size: editPizzaState.size,
        vegetarian: editPizzaState.vegetarian
      })
    })
    .then((response) => response.json())
    .then((editedPizza) => onSubmitPizzaState(editedPizza))
  }
  

  return (
    <form id={editPizzaState.id} onSubmit={handlePizzaEditSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editPizzaState.topping}
            onChange={editYourPizza}
          />
        </div>
        <div className="col">
          <select onChange={editYourPizza} value={editPizzaState.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={editPizzaState.vegetarian ? "checked" : null}
              onChange={editYourPizza}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={editPizzaState.vegetarian ? null : "checked"}
              onChange={editYourPizza}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
