import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import { UserProvider } from './contexts/User';
import Article from './components/Article';
import Topics from './components/Topics';
import AllTopics from './components/AllTopics';

function App() {

  return (
    <UserProvider>
      <BrowserRouter> 
      <div className="App">
        <Nav />
        <main className="main">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/articles/:article_id' element={<Article/>}/>
          <Route path='/topics' element={<AllTopics/>}/>
          <Route path='/topics/:topic' element={<Topics/>}/>
        </Routes>
        </main>
      </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
