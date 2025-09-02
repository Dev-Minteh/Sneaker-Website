import React from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context/AppContext';

function SneakerCard({ sneaker }) {
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();

  const handleClick = () => {
    dispatch({ type: 'VIEW_SNEAKER_DETAIL', payload: sneaker });
    navigate(`/store/${sneaker.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
      <img src={sneaker.image[0]} alt={sneaker.name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="mt-2 text-xl text-gray-600 font-semibold">{sneaker.name}</h2>
      <p className="text-gray-500">{sneaker.brand}</p>
      <p className="text-red-500 font-bold">${sneaker.price}</p>
    </div>
  );
}

export default SneakerCard;
