import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import { Routes, Route} from 'react-router-dom';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <Header />
        <Routes>
          <Route path='card/:holiday' element={<Card />} />
          <Route path='/' element={<EmptyCard />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
