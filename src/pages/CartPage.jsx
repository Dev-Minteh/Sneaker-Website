export default function Cart({ items }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>No sneakers added yet.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((sneaker, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{sneaker.name}</span>
              <span className="text-green-600">${sneaker.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
