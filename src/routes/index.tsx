// import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
// import Login from "src/components/Login/Login";

// const Routes = (): JSX.Element => {
//   return (
//     <>
//       <BrowserRouter>
//         <Switch>
//             <Route path="/login" element={<Login/>}/>
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// };

// export default Routes;

import { HashRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Login/Home";
import { useEffect } from "react";

interface IProps {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Routes = ({ logged, setLogged }: IProps): JSX.Element => {
  useEffect(()=>{},[logged])
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={logged ? <Navigate to={"/home"} /> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/home" element={<Home setLogged={setLogged}/>} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;