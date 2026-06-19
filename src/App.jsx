import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import PaymentPage from "./components/PaymentPage"
import Main from "./components/Main";


const App = () => {

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  return (

    <Routes>
      <Route path="/" element ={<Main cart = {cart} setCart={setCart} totalPrice= {totalPrice} setTotalPrice={setTotalPrice}/>} />

    <Route path="/payment" element = {<PaymentPage amount = {totalPrice} setCart = {setCart} setTotalPrice={setTotalPrice}/>} /> 

    </Routes>
  )
}

export default App