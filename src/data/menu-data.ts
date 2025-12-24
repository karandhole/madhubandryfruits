import { IMenuData } from "@/types/menu-d-t";

const menu_data:IMenuData[] = [
  {
    id:1,
    name:'Home',
    link:'/',
  },
  {
    id:2,
    name:'Shop',
    link:'/shop',
  },
   {
    id:3,
    name:'About Us',
    link:'/about',
  },
  {
    id:4,
    name:'Blog',
    link:'/',
   
  },
  // {
  //   id:4,
  //   name:'Pages',
  //   link:'',
  //   has_dropdown:true,
  //   dropdown_menus:[
  //     {title:'Shop Location One',link:'/shop-location'},
  //     {title:'Shop Location Two',link:'/shop-location-2'},
  //     {title:'FAQs',link:'/faq'},
  //     {title:'Checkout',link:'/checkout'},
  //     {title:'Cart Page',link:'/cart'},
  //     {title:'Compare Page',link:'/compare'},
  //     {title:'Wishlist',link:'/wishlist'},
  //     {title:'Sign In',link:'/login'},
  //     {title:'Coming soon',link:'/coming-soon'},
  //     {title:'Page 404',link:'/404'},
  //   ]
  // },
 
  {
    id:6,
    name:'Contact Us',
    link:'/contact',
  },
]

export default menu_data;

// mobile menus 
export const mobile_menus = [
  {
    id:1,
    name:'Home',
    link:'/',
    
  },
  {
    id:2,
    name:'Shop',
    link:'/shop-2',
    
  },
  // {
  //   id:3,
  //   name:'Shop Details',
  //   link:'/shop-details',
  //   has_dropdown:true,
  //   dropdown_menus:[
  //     {title:'Image scroll',link:'/shop-details'},
  //     {title:'Product grid',link:'/shop-details-2'},
  //     {title:'Top Thumb Product',link:'/shop-details-3'},
  //     {title:'Simple Product',link:'/shop-details'},
  //   ]
  // },
   {
    id:3,
    name:'About Us',
    link:'/about',
  },
  {
    id:4,
    name:'Blog',
    link:'/',
   
  },
  // {
  //   id:5,
  //   name:'Pages',
  //   link:'/about',
  //   has_dropdown:true,
  //   dropdown_menus:[
  //     {title:'Shop Location One',link:'/shop-location'},
  //     {title:'Shop Location Two',link:'/shop-location-2'},
  //     {title:'FAQs',link:'/faq'},
  //     {title:'Checkout',link:'/checkout'},
  //     {title:'Cart Page',link:'/cart'},
  //     {title:'Compare Page',link:'/compare'},
  //     {title:'Wishlist',link:'/wishlist'},
  //     {title:'Sign In',link:'/login'},
  //     {title:'Coming soon',link:'/coming-soon'},
  //     {title:'Page 404',link:'/404'},
  //   ]
  // },
 
  {
    id:7,
    name:'Contact Us',
    link:'/contact',
  },
]