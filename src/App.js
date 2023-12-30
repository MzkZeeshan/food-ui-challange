import CheckoutPage from "./Pages/Checkout";
import Home from "./Pages/Home";
import ItemDetail from "./Pages/ItemDetail";
import MyBucket from "./Pages/MyBucket";
import OrderComp from "./Pages/OrderComp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <div className="">
    <div className="">




    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ItemDetail" element={<ItemDetail />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/OrderComplete" element={<OrderComp />} />
        <Route path="/MyBucket" element={<MyBucket />} />




      </Routes>
    </Router>
    </div>
  </div>
  );
}

export default App;
