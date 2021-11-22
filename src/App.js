import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
