import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BRACKETFORM, ROOT, SYSTEMFORM, WALLFORM } from '../../constants';
import { FirstPage, SecondPage, ThirdPage, FourthPage } from '../../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<FirstPage />}></Route>
        <Route path={WALLFORM} element={<SecondPage />}></Route>
        <Route path={SYSTEMFORM} element={<ThirdPage />}></Route>
        <Route path={BRACKETFORM} element={<FourthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
