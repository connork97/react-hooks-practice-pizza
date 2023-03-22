import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const PIZZA_URL = "http://localhost:3001/pizzas"

  const [pizzaState, setPizzaState] = useState([]);
  const [editPizzaState, setEditPizzaState] = useState({
    topping: "",
    size: "",
    vegetarian: null
  })

  useEffect(() => {
    fetch(PIZZA_URL)
    .then((response) => response.json())
    .then((pizzaArr) => setPizzaState(pizzaArr))
  }, [])

  const handleEditPizza = (pizzaId) => {
    console.log(pizzaId)
    const pizzaToEdit = pizzaState.filter(pizza => pizza.id == pizzaId)
    setEditPizzaState(pizzaToEdit[0])
  }

  const handleSubmitPizzaState = (editedPizza) => {
    const newPizzaState = pizzaState.map((pizza) => {
      if(pizza.id == editedPizza.id) {
        return pizza = editedPizza;
      } else {
        return pizza;
      }
    })
    setPizzaState(newPizzaState)
    // setPizzaState(pizzaState.pizzaToEdit: editedPizza)
  }

  return (
    <>
      <Header />
      <PizzaForm editPizzaState={editPizzaState} setEditPizzaState={setEditPizzaState} onSubmitPizzaState={handleSubmitPizzaState} />
      <PizzaList pizzaState={pizzaState} onEditPizza={handleEditPizza} />
    </>
  );
}

export default App;
