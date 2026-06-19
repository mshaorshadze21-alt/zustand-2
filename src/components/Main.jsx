import ProductsCard from "./ProductsCard"
import CartItem from "./CartItem"

import capucchino from "../assets/capuchino.webp"
import espresso from "../assets/espresso_d93cf1fb-0d4d-4da2-877f-c8226560ea4a.webp"
import latte from "../assets/latte.jpg"
import flatwhite from "../assets/flatwhite.png"
import moka from "../assets/moka.webp"
import matcha from "../assets/matcha.webp"
import Button from "./Button"


const Main = ({cart, setCart, totalPrice, setTotalPrice}) => {

    const PRODUCTS = [
        { id: 1, name: "ესპრესო", price: 4, count:0, image: espresso},
        { id: 2, name: "კაპუჩინო", price: 7, count:0, image: capucchino },
        { id: 3, name: "ლატე", price: 8, count:0, image: latte},
        { id: 4, name: "ფლეთ ვაიტი", price: 9, count:0, image: flatwhite },
        { id: 5, name: "მოკა", price: 10, count:0, image: moka},
        { id: 6, name: "მატჩა", price: 15, count: 0, image: matcha}
      ];

      function addProduct(product) {

  const existingProduct = cart.find(item => item.id === product.id);


  if (existingProduct) {

    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, count: item.count + 1, price: item.price + product.price}
        : item
    );

    



    setTotalPrice(totalPrice + existingProduct.price)
    

    setCart(updatedCart);
    

  } else {

    setCart([
      ...cart,
      { ...product, count: 1 }
    ]);

  }
   setTotalPrice(totalPrice+product.price)
 

}

function removeProduct(product){
  const existingProduct = cart.find(item => item.id === product.id);
  
  if(!existingProduct) return

  if(existingProduct.count > 1) {
  
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, count: item.count - 1, price: item.price - product.price}
        : item

        
    );

    setCart(updatedCart)
  }else {
    setCart(cart.filter((item) => item.id !== product.id))
  }

  setTotalPrice(totalPrice-product.price)

}

  return (
    <div className="w-full h-fit p-10 bg-mauve-800 flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl font-bold text-white">Coffee Shop</h1>
      <div className="w-full h-fit flex gap-20">
        
        <div className="w-fit grid grid-cols-3 gap-5 justify-center">
          {PRODUCTS.map((p) => <ProductsCard key={p.id} product={p} addProduct={addProduct} removeProduct={removeProduct} /> )}
       </div>


        <div className=" w-fit h-fit bg-mauve-300 rounded-2xl p-10 flex flex-col gap-5 shadow-lg shadow-white-100/50">
          <p className="text-2xl font-bold text-shadow-mauve-800">თქვენი შეკვეთა</p>
          <ul>
            {cart.map((i) => <CartItem key={i.id} item = {i}/>)}
          </ul>
          
          
          <Button totalPrice={totalPrice} />
        </div>

      </div>
    </div>
  )
}

export default Main