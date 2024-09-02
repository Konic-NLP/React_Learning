import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); // empty array
  function handleAddedItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddedItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // not reload the page, for single page application
    if (!description) return; // if no description input and submit, should not continue the follow code,

    const newItem = {
      // create a new item to be added
      description,
      quantity,
      packaged: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setDescription(""); // after creating new Item set the value to the default one
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity} //should bind to the state
        onChange={(e) => setQuantity(Number(e.target.value))} // bind the state to a onChange function, when selecting different  number, the state also change
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} // also the same , get the state and the front end input
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      {/* conditional style */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you already packaged x</em>
    </footer>
  );
}
