import person from "../assets/person.png"
import glasses from "../assets/glasses.png"
import birthday from "../assets/birthday.png"
import handshake from "../assets/handshake.png"
import clock from "../assets/clock.png"
import celebration from "../assets/celebration.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import person4 from "../assets/person4.png"
import person8 from "../assets/person8.png"
const DropDownData=[
    {
    id:1,
    Label:"Number of Diners",
    img:person,
    text:'No. Of Dishes',
    value:1,
    options:[
        {
        NumberOfTabels:"1 Diner",
        icon:person,
        value:1
    },
    {
        NumberOfTabels:"2 Diners",
        icon:person2,
        value:2

    },
    {
        NumberOfTabels:"3 Diners",
        icon:person3,
        value:3

    },
    {
        NumberOfTabels:"4 Diners",
        icon:person4,
        value:4

    },
    {
        NumberOfTabels:"5 Diners",
        icon:person8,
        value:5

    },
    {
        NumberOfTabels:"6 Diners",
        icon:person8,
        value:6

    },
    {
        NumberOfTabels:"7 Diners",
        icon:person8,
        value:7

    },
    {
        NumberOfTabels:"8 Diners",
        icon:person8,
        value:8

    },
    {
        NumberOfTabels:"9 Diners",
        icon:person8,
        value:9

    },
    {
        NumberOfTabels:"10 Diners",
        icon:person8,
        value:10

    },
]
},


{
    id:2,
    Label:"Occasion",
    img:glasses,
    text:'Occasion',
    value:2,
    options:[
        {
        NumberOfTabels:"Birthday",
        icon:birthday,
        value:1
    },
    {
        NumberOfTabels:"Engagement",
        icon:handshake,
        value:2

    },
    {
        NumberOfTabels:"Anniversary",
        icon:celebration,
        value:3

    },
    
]
},
{
    id:3,
    Label:"Time",
    img:clock,
    text:'Select time',
    value:3,
    options:[
        {
        NumberOfTabels:"5:00 pm",
        icon:clock,
        value:1
    },
    {
        NumberOfTabels:"6:00 pm",
        icon:clock,
        value:2

    },
    {
        NumberOfTabels:"7:00 pm",
        icon:clock,
        value:3

    },
    {
        NumberOfTabels:"8:00 pm",
        icon:clock,
        value:4

    },
    {
        NumberOfTabels:"9:00 pm",
        icon:clock,
        value:5

    },
    {
        NumberOfTabels:"10:00 pm",
        icon:clock,
        value:6

    },
]
}
]
export  {DropDownData}
