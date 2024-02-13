import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";

const App = () => {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Homepage />}></Route>
   </Routes>
  </BrowserRouter>
 );
};

export default App;
