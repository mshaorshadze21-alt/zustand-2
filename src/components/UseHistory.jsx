import {create} from "zustand"

const UseHistroy = create((set) => ({
  paymentHistory: [],
  updatePaymentHistory: (newPayment) => set((state) => (state.paymentHistory = [...state.paymentHistory, newPayment])),
  
}))

export default UseHistroy;