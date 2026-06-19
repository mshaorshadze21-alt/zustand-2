
const CartItem = ({item}) => {
  return (
    <li className="text-md flex justify-between gap-8 "> 
              <span className="w-30 font-bold">{item.name}</span> 
              <span className="w-30 flex justify-start">რაოდენობა: {item.count}</span> 
              <span className="w-10">{item.price}₾</span>
              </li>
  )
}

export default CartItem