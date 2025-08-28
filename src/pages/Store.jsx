import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/AppContext';
import SneakerCard from '../components/SneakerCard';
import Navbar from '../components/Navbar';

function Store() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    fetch("https://sneakers-api-cmkf.onrender.com/")
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_SNEAKERS', payload: data }));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="p-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-500">
            Sneaker Store
          </h1>
          <p className="mt-2 text-gray-600 max-w-lg">
            Explore the latest sneakers with premium designs, exclusive drops, and classic styles.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6"> */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {state.sneakers.map(sneaker => (
            <div
              key={sneaker.id}
            >
              <SneakerCard sneaker={sneaker} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Store;

