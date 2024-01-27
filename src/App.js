import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './footer';
import QuanityPicker from './quanityPicker';

function App() {
  return (
    <div className="App">
     <h1> Dave is using react</h1>
    <Navbar></Navbar>
    <Footer></Footer>
    <QuanityPicker></QuanityPicker>
    </div>
  );
}

export default App;
