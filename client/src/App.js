import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MangaList from './components/MangaList';
import MangaDetail from './components/MangaDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MangaList />} />
          <Route path="/manga/:id" element={<MangaDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
