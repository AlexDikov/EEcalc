import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BRACKETPAGE, ROOT, SYSTEMPAGE, WALLPAGE } from '../../constants';
import { ObjectPage, WallPage, SystemPage, BracketPage } from '../../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<ObjectPage />}></Route>
        <Route path={WALLPAGE} element={<WallPage />}></Route>
        <Route path={SYSTEMPAGE} element={<SystemPage />}></Route>
        <Route path={BRACKETPAGE} element={<BracketPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
