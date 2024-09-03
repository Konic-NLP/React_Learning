export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPackged = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPackged / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " 🧳You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list and you already packaged
        ${numPackged} (${percentage} %) `}
      </em>
    </footer>
  );
}
