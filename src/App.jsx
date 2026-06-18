import capucchino from "./assets/capuchino.webp"
import espresso from "./assets/espresso_d93cf1fb-0d4d-4da2-877f-c8226560ea4a.webp"
import latte from "./assets/latte.jpg"
import flatwhite from "./assets/flatwhite.png"
import moka from "./assets/moka.webp"
import matcha from "./assets/matcha.webp"
import ProductsCard from "./components/ProductsCard"
import { useState } from "react";
import CartItem from "./components/CartItem"
import Button from "./components/Button"




//   const [quantity, setQuantity] = useState([
//     { id: 2, count: 10, name: PRODUCTS[1].name },
//     { id: 3, count: 4, name: PRODUCTS[2].name },
//   ]);
//   const [total, setTotal] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   function addItem(id) {
//     let newQuantity = quantity.map((el) =>
//       el.id === id ? { ...el, count: el.count + 1 } : el,
//     );

//     if (!quantity.find((el) => el.id === id)) {
//       newQuantity.push({ id, count: 1, name: PRODUCTS[id - 1].name });
//     }

//     setQuantity(newQuantity);
//   }

//   function decreaseItem(id) {
//     let newQuantity = quantity.map((el) =>
//       el.id == id ? { ...el, count: el.count - 1 } : el,
//     );

//     newQuantity = newQuantity.filter((el) => el.count !== 0);

//     setQuantity(newQuantity);
//   }

//   useMemo(() => {
//     const sum = quantity.map((el) => el.count * PRODUCTS[el.id - 1].price);
//     const red = sum.reduce((a, b) => a + b);
//     const totalAmount = quantity.reduce((a, b) => a + b.count, 0);
//     console.log(totalAmount);
//     return ()=> {
//       setTotal(red);
//     setTotalAmount(totalAmount);
//     }
//   }, [quantity]);

//   return (
//     <div className="flex flex-col justify-around">
//       <div className="flex justify-around">
//         {quantity.map((el) => (
//           <div
//             key={el.id}
//             className="flex flex-col gap-2 w-[200px] p-2 border mt-2 border-gray-600 rounded-lg justify-between"
//           >
//             <h1>name: {el.name}</h1>
//             <h2>count: {el.count}</h2>
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col">
//         {PRODUCTS.map((el) => (
//           <div
//             key={el.id}
//             className="flex gap-2 w-[200px] p-2 border mt-2 border-gray-600 rounded-lg justify-between "
//           >
//             <h2>{el.name}</h2>
//             <h2>{el.price}</h2>
//             <button
//               className="p-2 border border-gray-600 rounded-lg"
//               onClick={() => addItem(el.id)}
//             >
//               +
//             </button>
//             <button
//               className="p-2 border border-gray-600 rounded-lg"
//               onClick={() => decreaseItem(el.id)}
//             >
//               -
//             </button>
//           </div>
//         ))}

//         <div className="flex gap-2">
//           <h1>total Price: {total}</h1>
//           <h1>total Amount: {totalAmount}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


const App = () => {

    const PRODUCTS = [
    { id: 1, name: "ესპრესო", price: 4, count:0, image: espresso},
    { id: 2, name: "კაპუჩინო", price: 7, count:0, image: capucchino },
    { id: 3, name: "ლატე", price: 8, count:0, image: latte},
    { id: 4, name: "ფლეთ ვაიტი", price: 9, count:0, image: flatwhite },
    { id: 5, name: "მოკა", price: 10, count:0, image: moka},
    { id: 6, name: "მატჩა", price: 15, count: 0, image: matcha}
  ];

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)



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


        <div className=" w-fit h-fit bg-white rounded-2xl p-10 flex flex-col gap-5 shadow-lg shadow-white-100/50">
          <p className="text-2xl font-bold text-shadow-mauve-800">თქვენი შეკვეთა</p>
          <ul>
            {cart.map((i) => <CartItem key={i.id} item = {i}/>)}
          </ul>
          
          <Button totalPrice={totalPrice}/>
        </div>

      </div>
    </div>
  )
}

export default App