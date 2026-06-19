import { useNavigate } from "react-router-dom"

const Button = ({totalPrice}) => {
  const Navigation = useNavigate()
  return (
    <div className="flex justify-between items-center mt-20 gap-4">
            <span>გადასახდელი <br/> თანხა: {totalPrice}₾</span>
            <button onClick={()=>Navigation("/payment")}
             className="w-fit h-fit px-5 py-2 bg-mauve-800 text-white font-bold rounded-lg hover:bg-mauve-900 hover:scale-102">გადახდა</button>
          </div>
  )
}

export default Button