import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BRACKETPAGE, ROOT, SYSTEMPAGE, WALLPAGE, REPORTPAGE } from '../../constants';
import { ObjectPage, WallPage, SystemPage, BracketPage, ReportPage } from '../../pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<ObjectPage />}></Route>
        <Route path={WALLPAGE} element={<WallPage />}></Route>
        <Route path={SYSTEMPAGE} element={<SystemPage />}></Route>
        <Route path={BRACKETPAGE} element={<BracketPage />}></Route>
        <Route path={REPORTPAGE} element={<ReportPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
