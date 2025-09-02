// import { useParams} from "react-router";
// import { useState } from "react";
// import { useGlobalContext } from "../context/AppContext";
// import Navbar from "../components/Navbar";
// import Modal from "../components/Modal";
// export default function SneakerDetail() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//    const { id } = useParams();
//   const { state, dispatch } = useGlobalContext();

//   const sneaker =
//     state.selectedSneaker ||
//     state.sneakers.find((s) => s.id.toString() === id);
//   console.log("SneakerDetail - sneaker:", sneaker);
//   if (!sneaker || !sneaker.image) return <div>No Sneaker Data</div>;


//   return (
//     <>
//     <Navbar/>
//       <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-xl">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 bg-red-500 relative rounded-2xl flex items-center justify-center p-6">
//           <img
//             src={sneaker.image[0]}
//             alt={sneaker.name}
//             className="w-72 sm:w-96 lg:w-full drop-shadow-2xl transition-transform duration-500 hover:scale-105 rounded-xl"
//           />
//           <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg sm:text-xl">
//             {sneaker.name}
//           </span>
//           <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-base sm:text-lg">
//             {sneaker.brand}
//           </span>
//         </div>
//         <div className="flex-1 flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-extrabold text-gray-900">{sneaker.name}</h2>
//             <p className="text-gray-500 mt-1">{sneaker.brand}</p>
//             <p className="text-gray-400 text-sm mt-1">Released: {sneaker.released}</p>
//             <p className="text-xl font-semibold text-red-500 mt-3">${sneaker.price}</p>

//             <p className="text-gray-700 mt-4">{sneaker.description}</p>
//             <div className="mt-4 flex flex-wrap gap-4">
//               <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
//                 Silhouette: {sneaker.silhouette}
//               </span>
//               {sneaker.color && (
//                 <span
//                   className="w-6 h-6 rounded-full border border-gray-300"
//                   style={{ backgroundColor: sneaker.color.toLowerCase() }}
//                   title={sneaker.color}
//                 />
//               )}
//             </div>
//             {sneaker.sizes && sneaker.sizes.length > 0 && (
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {sneaker.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => dispatch({ type: "ADD_TO_CART", payload: sneaker })}
//               className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//         <p>You’re about to buy: {sneaker.name}</p>
//         <p className="text-green-600 font-bold mt-2">${sneaker.price}</p>

//         <button
//           onClick={() => {
//             dispatch({ type: "ADD_TO_CART", payload: sneaker });
//             setIsModalOpen(false);
//           }}
//           className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Confirm Purchase
//         </button>
//       </Modal>
//     </div>
//     </>
  
//   );
// }

import { useParams } from "react-router";
import { useState } from "react";
import { useGlobalContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

export default function SneakerDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();

  const sneaker =
    state.selectedSneaker ||
    state.sneakers.find((s) => s.id.toString() === id);
  
  const [selectedSize, setSelectedSize] = useState(
    sneaker?.sizes?.[0] || null
  );
  const [showSizes, setShowSizes] = useState(false);

  if (!sneaker || !sneaker.image) return <div>No Sneaker Data</div>;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...sneaker, selectedSize } });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sneaker Image */}
          <div className="flex-1 bg-red-500 relative rounded-2xl flex items-center justify-center p-6">
            <img
              src={sneaker.image[0]}
              alt={sneaker.name}
              className="w-72 sm:w-96 lg:w-full drop-shadow-2xl transition-transform duration-500 hover:scale-105 rounded-xl"
            />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg sm:text-xl">
              {sneaker.name}
            </span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-base sm:text-lg">
              {sneaker.brand}
            </span>
          </div>

          {/* Sneaker Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">{sneaker.name}</h2>
              <p className="text-gray-500 mt-1">{sneaker.brand}</p>
              <p className="text-gray-400 text-sm mt-1">Released: {sneaker.released}</p>
              <p className="text-xl font-semibold text-red-500 mt-3">${sneaker.price}</p>

              <p className="text-gray-700 mt-4">{sneaker.description}</p>

              <div className="mt-4 flex flex-wrap gap-4">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                  Silhouette: {sneaker.silhouette}
                </span>
                {sneaker.color && (
                  <span
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: sneaker.color.toLowerCase() }}
                    title={sneaker.color}
                  />
                )}
              </div>

              {/* Expandable Size Selector */}
              {sneaker.sizes && sneaker.sizes.length > 0 && (
                <div className="mt-4 relative ">
                  <button
                    onClick={() => setShowSizes(!showSizes)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                  >
                    Size: {selectedSize}
                  </button>

                  {showSizes && (
                    <div className="absolute z-10 mt-2 p-2 bg-white border rounded-lg shadow-lg flex flex-wrap gap-2">
                      {sneaker.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setShowSizes(false);
                          }}
                          className={`px-3 py-1 border rounded-lg hover:bg-gray-200 transition ${
                            size === selectedSize ? "bg-red-100 border-red-400" : ""
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Add to Cart / Buy Now */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <p>You’re about to buy: {sneaker.name}</p>
          <p className="text-green-600 font-bold mt-2">${sneaker.price}</p>

          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: { ...sneaker, selectedSize } });
              setIsModalOpen(false);
            }}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Confirm Purchase
          </button>
        </Modal>
      </div>
    </>
  );
}


