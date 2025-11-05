import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { StudyProvider } from './contexts/StudyContext';
import { Home } from './pages/Home';
import { DeckSelection } from './pages/DeckSelection';
import { Study } from './pages/Study';

function App() {
  return (
    <StudyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<DeckSelection />} />
          <Route path="/study/:deckId" element={<Study />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </StudyProvider>
  );
}

export default App;
