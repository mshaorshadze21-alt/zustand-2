import { useEffect, useState } from "react"
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseHistory from "./UseHistory";

const Card = ({amount,setCart,setTotalPrice, cart}) => {

      useEffect(()=>{
    console.log(cart)
  })
    const {updatePaymentHistory} = UseHistory()
    const Navigate = useNavigate()

    const user = {
        name: "Mariam",
        cardNumber: "123",
        expiryD: 1,
        expiryM: 2026,
        CVC: "123",
        balance: 400,
    }



    const [checked, setChecked] = useState("")

  

    
    
     

    function payment (e) {
        e.preventDefault();
        const name = (e.target.name.value).toLowerCase();
        const cardNumber = e.target.cardNumber.value;
        const expiryD = e.target.expiryD.value;
        const expiryM = e.target.expiryM.value;
        const cvc = e.target.CVC.value;
        const userName = user.name.toLowerCase()

        const cardArr = [name, cardNumber, expiryD, expiryM, cvc]
        

        if (userName !== name) return

        
        

        if (user.balance < Number(amount)) {
            toast.error("ანგარიშზე არ არის საკმარისი თანხა")
        }else{
            if (name == userName && cardNumber == user.cardNumber && expiryD == user.expiryD && expiryM == user.expiryM && cvc == user.CVC) {
                

                user.balance = user.balance - Number(amount)

                toast.success("გადახდა შესრულებულია")

                const newPaymentHistory = {
                    name: userName,
                    items: cart,
                    totalPrice: amount
                }

                updatePaymentHistory(newPaymentHistory)


                setCart([])

    
                 setTimeout(() => {
                    setTotalPrice(0)

                  }, 3000);

                if (checked == true){
                    localStorage.setItem("card", cardArr)
                }
            }else{
                toast.error("მონაცემები არასწორია")
            }
        }

       
    }

  

    useEffect(()=>{
        if(amount <1){
            Navigate(-1)
        }

    },[amount,Navigate])
    
  return (
    <div className="flex justify-center items-center w-full h-screen bg-mauve-900 ">
        <div className="w-220 h-160 bg-mauve-700 relative text-white rounded-2xl">
            <h1 className="text-5xl font-bold text-white absolute top-5 left-15">Payment Page</h1>
            <div className="w-160 h-110 flex justify-center items-center mt-25 ml-15 p-10 bg-mauve-900 shadow-2xl shadow-mauve-950 rounded-2xl">
                <div className="w-5/8 flex flex-col justify-around items-start gap-10 pr-20">
                    <h1 className="text-3xl font-bold text-white">Payment</h1>
                        
                    <div className="flex w-full justify-between items-center ">
                        <span className="text-lg font-semibold ">Amount to pay:</span>
                        <span className="text-xl font-bold text-white">${amount}</span>
                    </div>

                    <div className="flex w-full items-center gap-4 mt-20">
                        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)}/>
                        <label htmlFor="">Remember bank card</label>
                    </div>
                </div>
                <form onSubmit={(e)=>payment(e)} className="w-3/8 h-full flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-white">Card Details</h1>

                    <div className="flex flex-col gap-7">
                        <div>
                            <label htmlFor=""  className="text-md text-white">Cardholder's Name</label>
                            <input type="text" name="name" className="border-b-2" />
                        </div>

                        <div>
                            <label htmlFor="" className="text-md text-white">Card Number</label>
                            <input type="number" name="cardNumber" className="border-b-2"/>
                        </div>

                        <div className="flex justify-center items-center gap-10">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-md text-white">Expiry Date</label>
                                </div>
                            
                            
                                <div className="flex gap-4">
                                    <input type="number" className=" w-10 border-b-2" name="expiryD"/>
                                    <input type="number" className=" w-15 border-b-2" name="expiryM"/>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4 ">
                                <label htmlFor="" className="text-sm text-white">CVC/CVV</label>
                                <input type="password" placeholder="***" className=" w-15 border-b-2" name="CVC"/>
                            </div>
                            
                        
                        </div>

                        <button type="submit"  className="w-fit h-fit px-5 py-2 rounded-lg bg-white text-md font-extrabold text-mauve-900 shadow-lg shadow-amber-50/20 hover:cursor-pointer hover:scale-105">Pay now</button>
                    </div>
                </form>
            </div>

        </div>

        <Toaster position-top-right/>
    </div>
  )
}

export default Card