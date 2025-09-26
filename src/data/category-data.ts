import { ICategoryData } from "@/types/category-d-t";

const category_data:ICategoryData[] = [
  {
    id: 1,
    img: "/assets/img/catagory/1.png",
    name: "Almonds",
    slug: "Almonds",
    parent: "Almonds",
    children: [
     
    ],
    product_id: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    img: "/assets/img/catagory/2.png",
    name: "Cashews",
    slug: "Cashews",
    parent: "Cashews",
    children: [
      
    ],
    product_id: [8, 9, 10, 11, 12, 13],
  },
  {
    id: 3,
    img: "/assets/img/catagory/3.png",
    name: "Walnuts",
    slug: "Walnuts",
    parent: "Walnuts",
    children: [
      
    ],
    product_id: [14, 15, 16],
  },
  {
    id: 4,
    img: "/assets/img/catagory/4.png",
    name: "pista",
    slug: "pista",
    parent: "pista",
    children: [
      
    ],
    product_id: [17, 18, 19, 20],
  },
  {
    id: 5,
    img: "/assets/img/catagory/5.png",
    name: "raisins",
    slug: "raisins",
    parent: "raisins",
    children: [
      
    ],
    product_id: [21, 22],
  },
  {
    id: 6,
    img: "/assets/img/catagory/6.png",
    name: "Dates",
    slug: "Dates",
    parent: "Dates",
    children: [
     
    ],
    product_id: [23, 24, 25],
  },
  {
    id: 7,
    img: "/assets/img/catagory/7.png",
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
    img: "/assets/img/catagory/8.png",
    name: "seeds",
    slug: "seeds",
    parent: "seeds",
    children: [
 
    ],
    product_id: [],
  },

   {
    id: 8,
    img: "/assets/img/catagory/9.png",
    name: "berries",
    slug: "berries",
    parent: "berries",
    children: [
 
    ],
    product_id: [],
  }
];


export default category_data;
