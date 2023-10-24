// import Login from "./components/Login";

// const App = (): JSX.Element  => {
//   return (
//     <>
//       <Login/>
//     </>
//   );
// };

// export default App;

import { useState } from "react";
import Routes from "./routes";

const App = (): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false)

  return (
    <>
      <Routes logged={logged} setLogged={setLogged} />
    </>
  );
};

export default App;