    import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context/AppContext";

export default function Cart() {
  const { state, dispatch } = useGlobalContext();
  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {state.cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 gap-4"
              >
            
                <div className="flex items-center gap-4">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>

                    
                    <div className="flex items-center gap-2 mt-2 bg-gray-100 p-1 rounded w-fit">
                      <button
                        onClick={() =>
                          dispatch({ type: "DECREASE_QTY", payload: item })
                        }
                        className="px-3 py-1 text-lg font-bold hover:bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="text-red-500 font-semibold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREASE_QTY", payload: item })
                        }
                        className="px-3 py-1 text-lg font-bold hover:bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                  className="self-end  sm:self-center bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 font-bold text-xl gap-4">
              <p>Total:</p>
              <p className="text-green-600">${total.toFixed(2)}</p>
            </div>

            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="w-full sm:w-auto mt-4 bg-red-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
