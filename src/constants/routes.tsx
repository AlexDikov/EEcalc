import { Route } from "react-router-dom"
import ObjData from "../components/ObjData";
import WallData from "../components/WallData";

//routes
const homeRoute = () => <Route path="/" element={<ObjData />}></Route>;
const wallRoute = () => <Route path="/walldata" element={<WallData />}></Route>;
// const systRoute = <Route path="/systdata" element={<SystData />}></Route>;
// const bracketRoute = <Route path="/bracketdata" element={<BracketData />}></Route>;
// const coverRoute = {vaporCalc && <Route path="/coverdata" element={<CoverData />}></Route>};
// const finalRoute = <Route path="/final" element={<Final />}></Route>;

export {homeRoute, wallRoute} ;