import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
          ))}
        </ul>
      )}
      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushroom"
        photoName="pizzas/funghi.jpg"
        price={12}
      ></Pizza> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <li>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </li>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const OpenHour = 12;
  const CloseHour = 22;
  const isOpen = hour >= OpenHour && hour <= CloseHour;
  //   if (isOpen) {
  //     alert("We're open");
  //   }

  //   return React.createElement("footer", null, "We are currently Open!");
  return (
    <footer className="footer">
      {isOpen && (
        <p>We're open until {CloseHour}:00. Come visit us or oder online.</p>
      )}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
