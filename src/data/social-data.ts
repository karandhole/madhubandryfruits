export type ISocial =  {
  link: string;
  icon: string;
  name: string;
}

const social_links:ISocial[] = [
  {
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.youtube.com/",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
 
]

export default social_links;
