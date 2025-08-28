// import { FaStar } from "react-icons/fa";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Showroom({ sneaker, onNext, onPrev, addtoCart }) {
//   if (
//     !sneaker ||
//     !sneaker.image ||
//     !Array.isArray(sneaker.image) ||
//     sneaker.image.length === 0
//   ) {
//     return <div className="text-red-500">No image available</div>;
//   }

//   return (
//     <div className="flex flex-col-reverse lg:flex-row h-full">
//       <div className="flex-1 bg-white flex flex-col justify-center p-8 lg:p-12 text-center lg:text-left">
//         <h1 className="text-3xl lg:text-4xl font-extrabold">{sneaker.brand}</h1>
//         <div className="flex justify-center lg:justify-start text-yellow-500 my-3">
//           {[...Array(5)].map((_, i) => (
//             <FaStar key={i} />
//           ))}
//         </div>
//         <h2 className="text-xl lg:text-2xl font-semibold">{sneaker.name}</h2>
//         <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mt-2">
//           {sneaker.description}
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
//           <button
//             onClick={addtoCart}
//             className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:scale-105 transition"
//           >
//             ADD TO CART
//           </button>
//           <span className="text-red-500 text-xl lg:text-2xl font-bold">
//             ${sneaker.price}
//           </span>
//         </div>

//         <div className="flex justify-center lg:justify-start gap-6 mt-8">
//           <button
//             onClick={onPrev}
//             className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
//           >
//             <ChevronLeft /> Prev
//           </button>
//           <button
//             onClick={onNext}
//             className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
//           >
//             Next <ChevronRight />
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 bg-red-500 relative flex items-center justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none p-6">
//         <img
//           src={sneaker.image[0]}
//           alt={sneaker.name}
//           className="w-64 sm:w-80 lg:w-[420px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
//         />
//         <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-lg sm:text-xl">
//           {sneaker.name}
//         </span>
//         <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-base sm:text-lg">
//           {sneaker.brand}
//         </span>
//       </div>
//     </div>
//   );
// }

import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Showroom({ sneaker, onNext, onPrev, addtoCart }) {
  const isLoading =
    !sneaker ||
    !sneaker.image ||
    !Array.isArray(sneaker.image) ||
    sneaker.image.length === 0;

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-full">
  //       <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col h-full">
        {/* Image Section */}
        <div className="bg-red-500 relative flex items-center justify-center rounded-t-3xl p-6">
          <img
            src={sneaker.image[0]}
            alt={sneaker.name}
            className="w-64 sm:w-80 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-lg sm:text-xl">
            {sneaker.name}
          </span>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-base sm:text-lg">
            {sneaker.brand}
          </span>
        </div>

        {/* CTA + Navigation Section */}
        <div className="flex flex-col items-center p-6 gap-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <button
              onClick={addtoCart}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:scale-105 transition"
            >
              ADD TO CART
            </button>
            <span className="text-red-500 text-xl font-bold">
              ${sneaker.price}
            </span>
          </div>
          <div className="flex justify-center gap-6 w-full">
            <button
              onClick={onPrev}
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
            >
              <ChevronLeft /> Prev
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
            >
              Next <ChevronRight />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white flex flex-col justify-center p-8 text-center">
          <h1 className="text-3xl font-extrabold">{sneaker.brand}</h1>
          <div className="flex justify-center text-yellow-500 my-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <h2 className="text-xl font-semibold">{sneaker.name}</h2>
          <p className="text-gray-600 max-w-md mx-auto mt-2">
            {sneaker.description}
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex flex-row h-full">
        {/* Info Section */}
        <div className="flex-1 bg-white flex flex-col justify-center p-12 text-left">
          <h1 className="text-4xl font-extrabold">{sneaker.brand}</h1>
          <div className="flex text-yellow-500 my-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <h2 className="text-2xl font-semibold">{sneaker.name}</h2>
          <p className="text-gray-600 max-w-md mt-2">{sneaker.description}</p>

          {/* CTA + Navigation */}
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex items-center gap-4">
              <button
                onClick={addtoCart}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:scale-105 transition"
              >
                ADD TO CART
              </button>
              <span className="text-red-500 text-2xl font-bold">
                ${sneaker.price}
              </span>
            </div>
            <div className="flex gap-6">
              <button
                onClick={onPrev}
                className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
              >
                <ChevronLeft /> Prev
              </button>
              <button
                onClick={onNext}
                className="flex items-center gap-2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 bg-red-500 relative flex items-center justify-center rounded-l-3xl p-6">
          <img
            src={sneaker.image[0]}
            alt={sneaker.name}
            className="w-64 sm:w-80 lg:w-[420px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-xl">
            {sneaker.name}
          </span>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-semibold tracking-widest text-lg">
            {sneaker.brand}
          </span>
        </div>
      </div>
    </>
  );
}