import plate from "../assets/plate.png";
import recipe2 from "../assets/recipe2.jpg";
import recipe1 from "../assets/recipe1.jpg";
import recipe3 from "../assets/recipe3.jpg";
import joseandres from "../assets/joseandres.jpg";
import burger from "../assets/burger.png"
import salad from "../assets/salad.png"
import chicken from "../assets/chicken.png"
import pizza from "../assets/pizza.png"
import ramen from "../assets/ramen.png"
import Turkeyburger from "../assets/Turkeyburger.png"
import Veggieburger from "../assets/Veggieburger.png"
import Cheeseburger from "../assets/Cheeseburger.png"
import salad1 from "../assets/salad1.png"
import salad2 from "../assets/salad2.png"
import salad3 from "../assets/salad3.png"
import salad4 from "../assets/salad4.png"
import ramen1 from "../assets/ramen1.png"
import ramen2 from "../assets/ramen2.png"
import ramen3 from "../assets/ramen3.png"
import ramen4 from "../assets/ramen4.png"
import chicken1 from "../assets/chicken1.png"
import chicken2 from "../assets/chicken2.png"
import chicken3 from "../assets/chicken3.png"
import chicken4 from "../assets/chicken4.png"
import chicken5 from "../assets/chicken5.png"
import pizza1 from "../assets/pizza1.png"
import pizza2 from "../assets/pizza2.png"
import pizza3 from "../assets/pizza3.png"
import pizza4 from "../assets/pizza4.png"
const dishes=[
    {
        id:1,
        photo:burger,
        title:'Burger',
    },
    {
        id:2,
        photo:salad,
        title:'Salad',
    },
    {
        id:3,
        photo:chicken,
        title:'Chicken',

    },
    {
        id:4,
        photo:pizza,
        title:'Pizza',

    }
    ,
    {
        id:5,
        photo:ramen,
        title:'Ramen',

    }
    
]




const menu=[
    {
        id:1,
        photo:pizza1,
        title:'Brick Oven Pizza',
        text:"Brick Oven Pizza delivers a crispy and flavorful dining experience.",
        price:8.00,
    },
    {
        id:2,
        photo:salad1,
        title:'Crunchy Asian salad',
        text:"Crunchy Asian salad delights with vibrant flavors and refreshing textures.",
        price:5.00,
    },
    {
        id:3,
        photo:ramen2,
        title:'Miso Ramen',
        text:"Miso ramen is a flavorful and comforting Japanese noodle dish.",
        price:4.75,
    },
    {
        id:4,
        photo:Veggieburger,
        title:'Veggieburger',
        text:"Veggieburger offers a flavorful and plant-based option for burger lovers.",
        price:7.20,
    },
    {
        id:5,
        photo:chicken5,
        title:'Chargha',
        text:"Chargha is a popular Pakistani deep-fried chicken dish with aromatic spices.",
        price:20.25,
    },
    {
        id:6,
        photo:Cheeseburger,
        title:'Cheeseburger',
        text:"Cheeseburger combines juicy beef and melted cheese for irresistible indulgence.",
        price:9.00,
    },
    {
        id:7,
        photo:pizza4,
        title:'California Pizza',
        text:"California Pizza is known for its innovative toppings and unique flavors.",
        price:5.00,
    },
    {
        id:8,
        photo:pizza2,
        title:'Italian Pizza',
        text:
        "Italian Pizza is a classic dish known for its simplicity and quality ingredients.",
        price:6.50,
    },
    {
        id:9,
        photo:pizza3,
        title:'Neapolitan Pizza',
        text:
        "Neapolitan Pizza is a traditional Italian pizza with a soft, chewy crust.",
        price:6.25,
    },
    {
        id:10,
        photo:chicken1,
        title:'Ayam bakar',
        text:"Ayam bakar is an Indonesian grilled chicken dish with flavorful marinade.",
        price:4.25,
    },
    {
        id:11,
        photo:ramen3,
        title:'Shio ramen',
        text:"Shio ramen is a light and delicate salt-based Japanese noodle soup.",
        price:2.25,
    },
    {
        id:12,
        photo:salad4,
        title:'Greek Salad',
        text:"Greek salad offers a delightful combination of flavors and textures.",
        price:8.00,
    },
    {
        id:13,
        photo:Turkeyburger,
        title:'Turkeyburger',
        text:"Turkeyburger is a tasty and healthier option for burger lovers.",
        price:7.00,
    }

]
const Pizza=[
    {
        id:1,
        photo:pizza3,
        title:'Neapolitan Pizza',
        text:
        "Neapolitan Pizza is a traditional Italian pizza with a soft, chewy crust.",
        price:6.25,

        quantity: 0,
    },
    {
        id:2,
        photo:pizza2,
        title:'Italian Pizza',
        text:
        "Italian Pizza is a classic dish known for its simplicity and quality ingredients.",
        price:6.50,
        quantity: 0,
    },
    {
        id:3,
        photo:pizza3,
        title:'Neapolitan Pizza',
        text:
        "Neapolitan Pizza is a traditional Italian pizza with a soft, chewy crust.",
        price:6.25,

        quantity: 0,
    },
    {
        id:4,
        photo:pizza1,
        title:'Brick Oven Pizza',
        text:"Brick Oven Pizza delivers a crispy and flavorful dining experience.",
        price:8.00,
        quantity:0,
    }
    ,
    {
        id:5,
        photo:pizza4,
        title:'California Pizza',
        text:"California Pizza is known for its innovative toppings and unique flavors.",
        price:5.00,
        quantity: 0,
    }
    ,
    {
        id:6,
        photo:pizza3,
        title:'Neapolitan Pizza',
        text:
        "Neapolitan Pizza is a traditional Italian pizza with a soft, chewy crust.",
        price:6.25,

        quantity: 0,
    }
    ,
    {
        id:7,
        photo:pizza2,
        title:'Italian Pizza',
        text:
        "Italian Pizza is a classic dish known for its simplicity and quality ingredients.",
        price:6.50,
        quantity: 0,
    }
    ,
    {
        id:8,
        photo:pizza4,
        title:'California Pizza',
        text:"California Pizza is known for its innovative toppings and unique flavors.",
        price:5.00,
        quantity: 0,
    },
    {
        id:9,
        photo:pizza1,
        title:'Brick Oven Pizza',
        text:"Brick Oven Pizza delivers a crispy and flavorful dining experience.",
        price:8.00,
        quantity:0,
    },

]



const Salad=[
    {
        id:1,
        photo:salad1,
        title:'Crunchy Asian salad',
        text:"Crunchy Asian salad delights with vibrant flavors and refreshing textures.",
        price:5.00,
        quantity: 0,

    },
    {
        id:2,
        photo:salad2,
        title:'Caesar Salad',
        text:"Classic Caesar salad offers a perfect blend of crispness and creaminess.",
        price:5.20,

        quantity: 0,

    },
    {
        id:3,
        photo:salad3,
        title:'Leafy Green Salad',
        text:"Leafy green salad brings freshness and nourishment with every bite.",
        price:5.75,

        quantity: 0,

    },
    {
        id:4,
        photo:salad4,
        title:'Greek Salad',
        text:"Greek salad offers a delightful combination of flavors and textures.",
        price:8.00,

        quantity: 0,

    },
    {
        id:5,
        photo:salad1,
        title:'Crunchy Asian salad',
        text:"Crunchy Asian salad delights with vibrant flavors and refreshing textures.",
        price:5.00,
        quantity: 0,


    },
    {
        id:6,
        photo:salad2,
        title:'Caesar Salad',
        text:"Classic Caesar salad offers a perfect blend of crispness and creaminess.",
        price:5.20,

        quantity: 0,

    },
    {
        id:7,
        photo:salad3,
        title:'Leafy Green Salad',
        text:"Leafy green salad brings freshness and nourishment with every bite.",
        price:5.75,

        quantity: 0,

    },
    {
        id:8,
        photo:salad4,
        title:'Fattoush',
        text:"Fattoush is a refreshing Middle Eastern salad with a tangy twist.",
        price:10.00,

        quantity: 0,

    },
    {
        id:9,
        photo:salad3,
        title:'Leafy Green Salad',
        text:"Leafy green salad brings freshness and nourishment with every bite.",
        price:5.75,

        quantity: 0,

    },
    
]
const Ramen=[
    {
        id:1,
        photo:ramen1,
        title:'Tonkotsu ramen',
        text:"Tonkotsu ramen is a rich and savory Japanese noodle soup.",
        price:4.25,
        quantity: 0,

    },
    {
        id:2,
        photo:ramen2,
        title:'Miso Ramen',
        text:"Miso ramen is a flavorful and comforting Japanese noodle dish.",
        price:4.75,

        quantity: 0,

    },
    {
        id:3,
        photo:ramen3,
        title:'Shio ramen',
        text:"Shio ramen is a light and delicate salt-based Japanese noodle soup.",
        price:2.25,

        quantity: 0,

    },
    {
        id:4,
        photo:ramen1,
        title:'Tonkotsu ramen',
        text:"Tonkotsu ramen is a rich and savory Japanese noodle soup.",
        price:4.25,
        quantity: 0,

    },
    {
        id:5,
        photo:ramen2,
        title:'Miso Ramen',
        text:"Miso ramen is a flavorful and comforting Japanese noodle dish.",
        price:4.75,

        quantity: 0,

    },
    {
        id:6,
        photo:ramen3,
        title:'Shio ramen',
        text:"Shio ramen is a light and delicate salt-based Japanese noodle soup.",
        price:2.25,

        quantity: 0,

    },
    {
        id:7,
        photo:ramen1,
        title:'Tonkotsu ramen',
        text:"Tonkotsu ramen is a rich and savory Japanese noodle soup.",
        price:4.25,
        quantity: 0,

    },
    {
        id:8,
        photo:ramen3,
        title:'Shio ramen',
        text:"Shio ramen is a light and delicate salt-based Japanese noodle soup.",
        price:2.25,

        quantity: 0,

    },
    {
        id:9,
        photo:ramen4,
        title:'Tsukemen',
        text:"Tsukemen is a dipping ramen dish with separate noodles and broth.",
        price:6.25,

        quantity: 0,

    },
    
]
const Burger=[
    {
        id:1,
        photo:Turkeyburger,
        title:'Turkeyburger',
        text:"Turkeyburger is a tasty and healthier option for burger lovers.",
        price:7.00,
        quantity: 0,

    },
    {
        id:2,
        photo:Veggieburger,
        title:'Veggieburger',
        text:"Veggieburger offers a flavorful and plant-based option for burger lovers.",
        price:7.20,

        quantity: 0,

    },
    {
        id:3,
        photo:Cheeseburger,
        title:'Cheeseburger',
        text:"Cheeseburger combines juicy beef and melted cheese for irresistible indulgence.",
        price:6.75,

        quantity: 0,

    },
    {
        id:4,
        photo:Turkeyburger,
        title:'Turkeyburger',
        text:"Turkeyburger is a tasty and healthier option for burger lovers.",
        price:7.00,
        quantity: 0,

    },
    {
        id:5,
        photo:Cheeseburger,
        title:'Cheeseburger',
        text:"Cheeseburger combines juicy beef and melted cheese for irresistible indulgence.",
        price:9.00,

        quantity: 0,

    },
    {
        id:6,
        photo:Turkeyburger,
        title:'Turkeyburger',
        text:"Turkeyburger is a tasty and healthier option for burger lovers.",
        price:7.00,
        quantity: 0,

    },
    {
        id:7,
        photo:Veggieburger,
        title:'Veggieburger',
        text:"Veggieburger offers a flavorful and plant-based option for burger lovers.",
        price:7.20,

        quantity: 0,

    },
    {
        id:8,
        photo:Cheeseburger,
        title:'Cheeseburger',
        text:"Cheeseburger combines juicy beef and melted cheese for irresistible indulgence.",
        price:9.00,

        quantity: 0,
    },
    {
        id:9,
        photo:Veggieburger,
        title:'Veggieburger',
        text:"Veggieburger offers a flavorful and plant-based option for burger lovers.",
        price:7.20,

        quantity: 0,
    },
    
]
const Chicken=[
    {
        id:1,
        photo:chicken1,
        title:'Ayam bakar',
        text:"Ayam bakar is an Indonesian grilled chicken dish with flavorful marinade.",
        price:4.25,
        quantity: 0,
    },
    {
        id:2,
        photo:chicken2,
        title:'Airline chicken',
        text:"Airline chicken is a tender and juicy bone-in chicken breast.",
        price:9.25,

        quantity: 0,
    },
    {
        id:3,
        photo:chicken3,
        title:'Backhendl ',
        text:"Backhendl is a traditional Austrian dish consisting of breaded fried chicken.",
        price:12.25,

        quantity: 0,
    },
    {
        id:4,
        photo:chicken4,
        title:'Beer can chicken ',
        text:"Beer can chicken is a flavorful and moist grilled chicken recipe.",
        price:7.65,

        quantity: 0,
    },
    {
        id:5,
        photo:chicken5,
        title:'Chargha',
        text:"Chargha is a popular Pakistani deep-fried chicken dish with aromatic spices.",
        price:20.25,

        quantity: 0,
    },
    {
        id:6,
        photo:chicken1,
        title:'Ayam bakar',
        text:"Ayam bakar is an Indonesian grilled chicken dish with flavorful marinade.",
        price:4.25,
        quantity: 0,
    },
    {
        id:7,
        photo:chicken2,
        title:'Airline chicken',
        text:"Airline chicken is a tender and juicy bone-in chicken breast.",
        price:9.25,

        quantity: 0,
    },
    {
        id:8,
        photo:chicken4,
        title:'Beer can chicken ',
        text:"Beer can chicken is a flavorful and moist grilled chicken recipe.",
        price:7.65,

        quantity: 0,
    },
    {
        id:9,
        photo:chicken3,
        title:'Backhendl ',
        text:"Backhendl is a traditional Austrian dish consisting of breaded fried chicken.",
        price:12.25,

        quantity: 0,
    },
    
]
const News=[
    {
        id:1,
        photo:joseandres,
        photo1:recipe1,
        photo2:recipe2,
        photo3:recipe3,
        text:'Lorem ipsum dolor sit amet',
    },
    {
        id:2,
        photo:plate,
        photo1:recipe1,
        photo2:recipe2,
        photo3:recipe3,
        text:'Lorem ipsum dolor sit amet',
    },
    {
        id:3,
        photo:plate,
        photo1:recipe1,
        photo2:recipe2,
        photo3:recipe3,
        text:'Lorem ipsum dolor sit amet',
    },
]

export  {Ramen,Salad,Chicken,Burger,dishes,menu,Pizza}
