import { useState, useEffect } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, changeCount] = useState(0); // states and change the status of states
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    changeCount((c) => c + 1);
  }
  useEffect(function () {
    //the function would be executed while logging the page
    getAdvice();
  }, []);
  return (
    <div>
      <h1> {advice}</h1>
      <button onClick={getAdvice}>Get advice </button>

      <Message count={count} />
      {/* // use the props, refer to the second function */}
    </div> // return the JSX
  );
}

function Message(props) {
  // another function and call with props
  return (
    <p>
      You have read <strong>{props.count}</strong> pirce of advice
    </p>
  );
}
