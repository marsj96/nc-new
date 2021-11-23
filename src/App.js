import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import { UserProvider } from './contexts/User';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
