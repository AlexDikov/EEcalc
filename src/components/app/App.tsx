import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROOT } from '../../constants';
import { FirstPage } from '../../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<FirstPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
