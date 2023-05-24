import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from '../../pages/Main/Main';
import BrowseList from '../../pages/BrowseList/BrowseList';
import Book from '../../pages/Book/Book';

import Header from '../Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/browse' element={<BrowseList />}/>
      </Routes>
    </div>
  );
}

export default App;
