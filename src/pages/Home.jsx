import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Showroom from "../components/Showroom";
export default function Home({sneaker, onNext, onPrev, addtoCart}) {
  return (
       <div className="w-full h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      <Showroom sneaker={sneaker} onNext={onNext} onPrev={onPrev} addtoCart={addtoCart}/>
      </main>
      <Footer />
    </div>
  );
}