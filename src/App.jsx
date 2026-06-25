import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;