import { create } from "zustand";

import {
  capucchino,
  espresso,
  latte,
  flatwhite,
  moka,
  matcha,
} from "../assets/index.js";

const UseNewCard = create ((set) => ({
    PRODUCTS: [
        { id: 1, name: "ესპრესო", price: 4, count: 0, image: espresso },
        { id: 2, name: "კაპუჩინო", price: 7, count: 0, image: capucchino },
        { id: 3, name: "ლატე", price: 8, count: 0, image: latte },
        { id: 4, name: "ფლეთ ვაიტი", price: 9, count: 0, image: flatwhite },
        { id: 5, name: "მოკა", price: 10, count: 0, image: moka },
        { id: 6, name: "მატჩა", price: 15, count: 0, image: matcha },
      ],

      updateProductCard: (newCard) => 
        set( (state) => (state.PRODUCTS) = [...state.PRODUCTS, newCard]) 

       
}))

export default UseNewCard