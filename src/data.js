import {
  Brownie,
  Burger,
  Burrito,
  Pancake,
  Pizza,
  Ramen,
  Rice,
  Salad,
  Steak
} from "./images/index"

import {nanoid} from "nanoid"

const data = [
  {
    name: "Brownie",
    src: Brownie,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Burger",
    src: Burger,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Burrito",
    src: Burrito,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Pancake",
    src: Pancake,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Pizza",
    src: Pizza,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Ramen",
    src: Ramen,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Rice",
    src: Rice,
    clicked: false,
    id: nanoid()
  },
  {
    name: "Salad",
    src: Salad,
    clicked: false,
    id: nanoid()
  },
  // {
  //   name: "Steak",
  //   src: Steak,
  //   clicked: false,
  //   id: nanoid()
  // }
]

export default data