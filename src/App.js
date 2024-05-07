import './App.css';
import Navbar from "./components/organisms/Navbar"
import Header from "./components/organisms/Header"
import Cards from "./components/molecules/Cards"
import Footer from "./components/organisms/Footer"
import Button from "./components/atoms/Button"


function App() {
  return (
    <div className="container background-container">
      <Navbar/> 
      <Header/> 
      <Cards/> 
      <Button/>
      <Footer/>
     {/* <div className="item"> </div> */}
    </div>
  );
}

export default App;
