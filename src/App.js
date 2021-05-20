import './App.css';
import Header from './components/Header';
import TinderPhotoCard from './components/TinderPhotoCard';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
      //BEM class naming convention
    <div className="app">
        {/* Tinder Header Component */}
        <Header></Header>
        {/* Tinder Photo Card */}
        <TinderPhotoCard></TinderPhotoCard>
        {/* Swipe Buttons */}
        <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;


