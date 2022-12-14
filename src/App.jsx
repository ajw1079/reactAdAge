// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import route from '../src/routes/index';
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';
import Main from './pages/components/Main';
import Category from './pages/components/Category';
import Detail from './pages/components/Detail';

import './asset/scss/app.scss';



function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/category/:index" element={<Category/>}></Route>
        {/* 추후에 useParams를 통해 던질 값에 대해서는 변수명을 일치시킬 것 */}
        <Route exact path="/detail/:index" element={<Detail/>}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
