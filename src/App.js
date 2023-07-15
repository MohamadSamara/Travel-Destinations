import './App.css';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Home from './components/home/Home';
import db from './data/db.json';
import Header from './components/header/Header';
import Footer from './components/footer/Footer' ;
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home tour={db} />} />
        <Route path="/city/:id" element={<TourDetails tour={db} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
