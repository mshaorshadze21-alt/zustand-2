import UseHistory from "./UseHistory";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const { paymentHistory } = UseHistory();

  const navigation = useNavigate();

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <button
        className="w-fit p-2 bg-blue-400 rounded-lg text-white font-bold m-5"
        onClick={() => navigation("/")}
      >
        Home Page
      </button>
      <div>
        {paymentHistory.map((payment) => (
          <div className="w-full flex justify-between p-5 shadow-lg">
            <span className="text-xl font-bold text-black">
              {payment.totalPrice} ₾
            </span>

            <div className="flex flex-col items-center">
              {payment.items.map((i) => {
                return (
                  <span key={i.id}>
                    {i.count} ცალი {i.name}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col justify-end items-end gap-1">
              <p className="text-xl font-bold">{payment.name}</p>
              <p className="text-sm font-light">{payment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
