import './App.css';
import Navbar from "./components/organisms/Navbar"
import Header from "./components/organisms/Header"
import Cards from "./components/molecules/Cards"
import Footer from "./components/organisms/Footer"


function App() {
  return (
    <div className="container background-container">
      <Navbar/> 
      <Header/> 
      <Cards/> 
      <Footer/>
     {/* <div className="item"> </div> */}
    </div>
  );
}

export default App;
