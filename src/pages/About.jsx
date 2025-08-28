import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-blue-600">SneakerHub</span> –
          your one-stop destination for exclusive sneakers. We believe sneakers
          are more than footwear – they’re culture, art, and lifestyle.
        </p>
        <p className="text-gray-600 mb-4">
          From classics like the Air Jordan 1 to the latest Yeezys, our mission
          is to bring you authentic, high-quality sneakers at the best prices.
          Whether you’re a collector or just love clean kicks, we’ve got you covered.
        </p>
        <p className="text-gray-600">
          Our store was built for sneaker lovers, by sneaker lovers. Join our
          community and step into the culture.
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
