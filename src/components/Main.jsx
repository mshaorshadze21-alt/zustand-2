import ProductsCard from "./ProductsCard";
import CartItem from "./CartItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UseNewCard from "./useNewCard.jsx"; 
import { v4 as uuidv4 } from 'uuid';


const Main = ({ cart, setCart, totalPrice, setTotalPrice }) => {
  const naviagtion = useNavigate();
    const [activeForm, setActiveForm] = useState(false)

  const { PRODUCTS,updateProductCard } = UseNewCard()

  function addProduct(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              count: item.count + 1,
              price: item.price + product.price,
            }
          : item,
      );

      setTotalPrice(totalPrice + existingProduct.price);

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
    setTotalPrice(totalPrice + product.price);
  }

  function removeProduct(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (!existingProduct) return;
    
    if (existingProduct.count > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
      ? {
        ...item,
        count: item.count - 1,
        price: item.price - product.price,
            }
          : item,
        );
        
        setCart(updatedCart);
      } else {
        setCart(cart.filter((item) => item.id !== product.id));
      }

      setTotalPrice(totalPrice - product.price);
    }



  function saveCard(e) {
      
      e.preventDefault()
      const newCard = {
        id: uuidv4(),
        name: e.target.name.value,
        price: Number(e.target.price.value),
        count: 0,
        photo: e.target.photo.value
      }

      if (newCard.name.trim() !== "" || newCard.price.trim() !== "" || newCard.photo.trim() !== "") {
        updateProductCard(newCard)
      }
     


      setActiveForm(false)

    }

  function removeProducts() {
      setCart([])
      setTotalPrice(0)
    }


  return (
    <main className="w-full h-fit p-10 bg-mauve-800 flex flex-col items-center justify-center gap-10 relative">
      <h1 className="text-5xl font-bold text-white">Coffee Shop</h1>
      <div className="sm: w-full h-fit  justify-center gap-5 sm:flex flex-col lg:flex-row">
        <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {PRODUCTS.map((p) => (
            <ProductsCard
              key={p.id}
              product={p}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          ))}
        </div>

        {totalPrice > 0 && <div className=" mt-2 sm:w-full h-fit  md:w-[30%] bg-mauve-300 rounded-2xl p-5 flex flex-col gap-5 shadow-lg shadow-white-100/50">
          <div className="flex justify-between">
            <p className="text-2xl font-bold text-shadow-mauve-800">
              თქვენი შეკვეთა
            </p>
            <button onClick={() => removeProducts()}><i class="fa-solid fa-trash-can"></i> Delete All</button>
          </div>
          <ul>
            {cart.map((i) => (
              <CartItem key={i.id} item={i} />
            ))}
          </ul>
          

          <Button totalPrice={totalPrice} />

          <button
            className="w-full py-2 rounded-lg shadow-lg shadow-white-100/50 bg-white text-blue-400"
            onClick={() => naviagtion("/paymentHistory")}
          >
            Payment History Page
          </button>
        </div>}

        <button className="w-fit h-fit bg-white text-black border-2 rounded-lg p-2 absolute top-10 right-10"
        onClick={() => setActiveForm(!activeForm)}>Add Coffee</button>

        {activeForm &&
        <div className="w-screen h-screen absolute flex justify-center items-center"> 
          <form action="" className="w-100 h-60 rounded-2xl bg-linear-to-b from-mauve-500 to-mauve-100 border-white p-10 flex flex-col gap-5 -translate-y-20"
          onSubmit={saveCard}>
            <input type="text" placeholder="name" className="text-white border-white borde-1" name="name"/>
            <input type="text" placeholder="price" name="price"/>
             <input type="text" placeholder="photo" name="photo"/>
            <button>Save</button>
           
          </form>
        </div>
        }

      </div>
    </main>
  );
};

export default Main;
