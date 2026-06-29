import { create } from "zustand";

const UseHistroy = create((set) => ({
  paymentHistory: [
    {
      date: "17:10 Thu Jun 25 2026",
      name: "mariam",
      totalPrice: 8,
      items: [
        {
          id: 3,
          name: "ლატე",
          price: 8,
          count: 1,
        },
      ],
    },
    {
      date: "18:25 Thu Jun 25 2026",
      name: "giorgi",
      totalPrice: 19,
      items: [
        {
          id: 1,
          name: "კაპუჩინო",
          price: 7,
          count: 1,
        },
        {
          id: 2,
          name: "ჩიზქეიქი",
          price: 6,
          count: 2,
        },
      ],
    },
    {
      date: "09:45 Fri Jun 26 2026",
      name: "nino",
      totalPrice: 24,
      items: [
        {
          id: 4,
          name: "ამერიკანო",
          price: 6,
          count: 2,
        },
        {
          id: 5,
          name: "კრუასანი",
          price: 4,
          count: 3,
        },
      ],
    },
    {
      date: "14:30 Fri Jun 26 2026",
      name: "luka",
      totalPrice: 33,
      items: [
        {
          id: 6,
          name: "მოკა",
          price: 9,
          count: 2,
        },
        {
          id: 7,
          name: "ბრაუნი",
          price: 5,
          count: 3,
        },
      ],
    },
    {
      date: "11:20 Sat Jun 27 2026",
      name: "ana",
      totalPrice: 15,
      items: [
        {
          id: 8,
          name: "ფლეთ ვაითი",
          price: 9,
          count: 1,
        },
        {
          id: 9,
          name: "დონატი",
          price: 3,
          count: 2,
        },
      ],
    },
  ],
  updatePaymentHistory: (newPayment) =>
    set(
      (state) => (state.paymentHistory = [...state.paymentHistory, newPayment]),
    ),
}));

export default UseHistroy;
