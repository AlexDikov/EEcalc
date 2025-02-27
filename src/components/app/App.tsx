import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BRACKETDATA, ROOT, SYSTEMDATA, WALLDATA } from '../../constants';
import { FirstPage, SecondPage, ThirdPage, FourthPage } from '../../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<FirstPage />}></Route>
        <Route path={WALLDATA} element={<SecondPage />}></Route>
        <Route path={SYSTEMDATA} element={<ThirdPage />}></Route>
        <Route path={BRACKETDATA} element={<FourthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
