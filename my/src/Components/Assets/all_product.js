import p1_img from "../Assets/dress/1.png";
import p2_img from "../Assets/dress/2.png";
import p3_img from "../Assets/dress/3.png";
import p4_img from "../Assets/dress/4.png";
import p5_img from "../Assets/dress/5.png";
import p6_img from "../Assets/dress/6.png";
import p7_img from "../Assets/dress/7.png";
import p8_img from "../Assets/dress/8.png";
import p9_img from "../Assets/dress/9.png";
import p10_img from "../Assets/dress/10.png";
import p11_img from "../Assets/dress/11.png";
import p12_img from "../Assets/dress/12.png";
import p13_img from "../Assets/dress/13.png";
import p14_img from "../Assets/dress/14.png";
import p15_img from "../Assets/dress/15.png";
import p16_img from "../Assets/dress/16.png";
import p17_img from "../Assets/pagdi/1.png";
import p18_img from "../Assets/pagdi/2.png";
import p19_img from "../Assets/pagdi/3.png";
import p20_img from "../Assets/pagdi/4.png";
import p21_img from "../Assets/pagdi/5.png";
import p22_img from "../Assets/pagdi/6.png";
import p23_img from "../Assets/pagdi/7.png";
import p24_img from "../Assets/pagdi/8.png";
import p25_img from "../Assets/other/1.png";
import p26_img from "../Assets/other/2.png";
import p27_img from "../Assets/other/3.png";
import p28_img from "../Assets/other/4.png";
/*import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";*/

let all_products = [
  {
    id: 1,
    name: "Full Multi Patti Holi Special Dress For Laddu Gopal Ji",
    category: "dress",
    image: p1_img,
    new_price: 295.00,
    old_price: 400.00,
  },
  {
    id: 2,
    name: "Beautiful multi dress for holi",
    category: "dress",
    image: p2_img,
    new_price: 300.00,
    old_price: 400.00,
  },
  {
    id: 3,
    name: "Beatiful multi mor dress for laddu gopal ji (Without jewellery)",
    category: "dress",
    image: p3_img,
    new_price: 700.00,
    old_price: 900.00,
  },
  {
    id: 4,
    name: "Beautiful white multi dress with stone flowers",
    category: "dress",
    image: p4_img,
    new_price: 320.00,
    old_price: 450.00,
  },
 {
    id: 5,
    name: "Janmashtami special multicolor heavy dress for laddu gopal ji",
    category: "dress",
    image: p5_img,
    new_price: 340.00,
    old_price: 500.00,
  },
  {
    id: 6,
    name: "laddu gopal plain base feather dress with pagdi",
    category: "dress",
    image: p6_img,
    new_price: 199.00,
    old_price: 399.00,
  },
  {
    id: 7,
    name: "Heavy White dress Special for Holi",
    category: "dress",
    image: p7_img,
    new_price: 485.00,
    old_price: 549.00,
  },
  {
    id: 8,
    name: "Beautiful white mullti feather dress with satin flowers",
    category: "dress",
    image: p8_img,
    new_price: 330.00,
    old_price: 389.00,
  },
  {
    id: 9,
    name: "Shivratri Red Net Dress",
    category: "dress",
    image: p9_img,
    new_price: 330.00,
    old_price: 399.00,
  },
  {
    id: 10,
    name: "laddu gopal special multi flower dress",
    category: "dress",
    image: p10_img,
    new_price: 135.00,
    old_price: 299.00,
  },
  {
    id: 11,
    name: "Beautiful Mehroon dress for laddu gopal ji",
    category: "dress",
    image: p11_img,
    new_price: 270.00,
    old_price: 350.00,
  },
  {
    id: 12,
    name: "Heart Dress For Laddu Gopal Ji With Pagdi",
    category: "dress",
    image: p12_img,
    new_price: 310.00,
    old_price: 399.00,
  },
  {
    id: 13,
    name: "Valentine special red dress for laddu gopal ji",
    category: "dress",
    image: p13_img,
    new_price: 350.00,
    old_price: 450.00,
  },
  {
    id: 14,
    name: "Beautiful Red and white dress for Laddu gopal ji",
    category: "dress",
    image: p14_img,
    new_price: 330.00,
    old_price: 399.00,
  },
  {
    id: 15,
    name: "Shivratri special dress for laddu gopal ji",
    category: "dress",
    image: p15_img,
    new_price: 275.00,
    old_price: 350.00,
  },
  {
    id: 16,
    name: "Holi special multicolour dress for laddu gopal ji",
    category: "dress",
    image: p16_img,
    new_price: 350.00,
    old_price: 499.00,
  },
{
    id: 17,
    name: "Yellow latkan cute pagdi for laddu gopal ji",
    category: "pagdi",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Phf heavy pagdi for laddu gopal ji",
    category: "pagdi",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "laddu gopal designer pagdi (RHC)",
    category: "pagdi",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "heavy pagdi for laddu gopal ji",
    category: "pagdi",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "heavy pagdi for laddu gopal ji",
    category: "pagdi",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "heavy pagdi for laddu gopal ji",
    category: "pagdi",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "designer pagdi for laddu gopal ji",
    category: "pagdi",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "pink pagdi for laddu gopal ji",
    category: "pagdi",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
 {
    id: 25,
    name: "Premium AC Cooler For Your Laddu Gopal Ji",
    category: "other",
    image: p25_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 26,
    name: "laddu gopal bath tub (random colour)",
    category: "other",
    image: p26_img,
    new_price: 805.0,
    old_price: 1200.5,
  },
  {
    id: 27,
    name: "Laddu Gopal Ji Bathtub With Shower {random color}",
    category: "other",
    image: p27_img,
    new_price: 835.0,
    old_price: 1020.5,
  },
  {
    id: 28,
    name: "Bath Set For Laddu Gopal ji",
    category: "other",
    image: p28_img,
    new_price: 875.0,
    old_price: 1200.5,
  },
 /* {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },*/
 /* {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },*/
];

export default all_products;
