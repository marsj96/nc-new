import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import { UserProidver } from './contexts/user';


function App() {
  return (
    <UserProidver>
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </UserProidver>
  );
}

export default App;
