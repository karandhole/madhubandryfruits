import { ICategoryData } from "@/types/category-d-t";

const category_data:ICategoryData[] = [
  {
    id: 1,
    img: "/assets/img/catagory/category-1.jpg",
    name: "Almonds",
    slug: "Almonds",
    parent: "Almonds",
    children: [
      "Onion",
      "Lemon",
      "Kiwi",
      "Ginger",
      "Apricots",
      "Cauliflower",
      "Cranberries",
    ],
    product_id: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    img: "/assets/img/catagory/category-2.jpg",
    name: "Cashews",
    slug: "Cashews",
    parent: "Cashews",
    children: [
      "Chicken Tenders",
      "Lemon",
      "Common Grape",
      "Plum",
      "Mangosteen",
      "Banana",
    ],
    product_id: [8, 9, 10, 11, 12, 13],
  },
  {
    id: 3,
    img: "/assets/img/catagory/category-3.jpg",
    name: "Walnuts",
    slug: "Walnuts",
    parent: "Walnuts",
    children: [
      "Milk",
      "Soda Sparkling"
    ],
    product_id: [14, 15, 16],
  },
  {
    id: 4,
    img: "/assets/img/catagory/category-4.jpg",
    name: "Pistachios",
    slug: "Pistachios",
    parent: "Pistachios",
    children: [
      "Strawberry",
      "Dragon Fruit",
      "Lime Fruit",
      "Apricot Fruit"
    ],
    product_id: [17, 18, 19, 20],
  },
  {
    id: 5,
    img: "/assets/img/catagory/category-5.jpg",
    name: "Raisins",
    slug: "Raisins",
    parent: "Raisins",
    children: [
      "Rice Crisps",
      "Laffy Taffy"
    ],
    product_id: [21, 22],
  },
  {
    id: 6,
    img: "/assets/img/catagory/category-6.jpg",
    name: "Dates",
    slug: "Dates",
    parent: "Dates",
    children: [
      "Beef",
      "Chicken",
      "Meat"
    ],
    product_id: [23, 24, 25],
  },
  {
    id: 7,
    img: "/assets/img/catagory/category-7.jpg",
    name: "Figs (Anjeer)",
    slug: "Figs (Anjeer)",
    parent: "Figs (Anjeer)",
    children: [
      "Milk",
    ],
    product_id: [26],
  },
  {
    id: 8,
    img: "/assets/img/catagory/category-8.jpg",
    name: "Apricots",
    slug: "Apricots",
    parent: "Apricots",
    children: [
 
    ],
    product_id: [],
  }
];

export default category_data;
