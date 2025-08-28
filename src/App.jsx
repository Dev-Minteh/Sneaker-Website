import {  useEffect } from 'react'
import './App.css'
import { useGlobalContext } from './context/AppContext';
import Home from './pages/Home';

function App() {
   const { state, dispatch } = useGlobalContext(); 
useEffect(() => {
  async function fetchSneakers() {
    try {
      const res = await fetch("https://sneakers-api-cmkf.onrender.com/");
      const data = await res.json();
      console.log(data);
      dispatch({ type: "SET_SNEAKERS", payload: data });
    } catch (error) {
      console.error("Error fetching sneakers:", error);
    }
  }
  fetchSneakers();
}, [dispatch]);

if (state.loading || state.sneakers.length === 0) {
    return(
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
      </div>
    )
  }

  const onNext = () => {
    dispatch({ type: "NEXT_SNEAKER" });
  };

  const  onPrev = () => {
    dispatch({ type: "PREV_SNEAKER" });
  };

  const addtoCart = () => {
  dispatch({ type: "ADD_TO_CART", payload: currentSneaker });
  console.log("Added to cart:", currentSneaker);
};

  const currentSneaker = state.sneakers[state.currentIndex];
  return (
     <div className="min-h-screen">
      <Home sneaker={currentSneaker} onNext={onNext} onPrev={onPrev} addtoCart={addtoCart}/>
    </div>

  )
}

export default App
