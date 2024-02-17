import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import Expenseform from "./Expenseform";
const App = () => {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Homepage />}></Route>
   </Routes>
   <Expenseform />
  </BrowserRouter>
 );
};

export default App;
