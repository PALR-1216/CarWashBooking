import './App.css';
import Header from './Header';
import Test from './Test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//learn to use ionic v6

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/test" element={<Test />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
