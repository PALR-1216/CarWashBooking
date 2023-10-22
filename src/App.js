import './App.css';
import Header from './Header';
import Navigation from './Navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm';
//learn to use ionic v6

function App() {
  return (
 
    <Router>
      <div>
        <Navigation/>
      </div>
      <Routes>

        <Route path="/" element={<Header />} />
        <Route path="/Booking" element={<BookingForm />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
