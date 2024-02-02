import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"



function App() {
  return (
    <div className="App">
     <h1> Dave is using react</h1>
    <Navbar></Navbar>
    <Footer></Footer>
    <Catalog></Catalog>
    
    </div>
  );
}

export default App;
