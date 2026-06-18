

const ProductsCard = ({product, addProduct, removeProduct}) => {
  return (
    <div className="rounded-2xl bg-white">
            <div className=" rounded-2xl w-70 h-fit flex flex-col justify-between items-center gap-3 p-5 bg-white">
              <div className="w-full h-40 rounded-lg">
                <img src={product.image} alt="" className=" w-full h-full rounded-lg object-cover"/>
              </div>
              <div className="w-full flex justify-between">
                <span> {product.name} </span>    
                <span>{product.price} ₾</span>
              </div>
              <button className="border p-2 w-full bg-mauve-800 rounded-lg text-white font-bold hover:bg-mauve-900 hover:scale-102" onClick={() => addProduct(product) }>add</button>
              <button className="p-2 w-full bg-white text-mauve-900 font-bold rounded-lg border-2 border-mauve-800 hover:scale-102" onClick={() => removeProduct(product)}>remove</button>
            </div>
              
          </div> 
  )
}

export default ProductsCard