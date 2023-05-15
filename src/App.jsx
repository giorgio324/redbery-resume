import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { store } from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
