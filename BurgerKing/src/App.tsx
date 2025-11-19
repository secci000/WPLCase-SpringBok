import './App.css'
import Menu from './Components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuItemDetail from './Components/MenuItemDetail'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu/:itemId" element={<MenuItemDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
