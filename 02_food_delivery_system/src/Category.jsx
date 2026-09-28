import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerBold } from "react-icons/pi";


const Category = [
{
    id:1,
    name:"All",
    icon:<RiGalleryView2 className="text-orange-500 text-5xl "/>
}
,
{
    id:2,
    name:"Breakfast",
    icon:<MdOutlineFreeBreakfast  className="text-orange-500 text-5xl"/>
}
,
{
    id:3,
    name:"Soups",
    icon:<LuSoup className="text-orange-500 text-5xl" />
},
{
    id:4,
    name:"Pasta",
    icon:<CiBowlNoodles className="text-orange-500 text-5xl"/>
},
{
    id:5,
    name:"Main_Course",
    icon:<MdOutlineFoodBank className="text-orange-500 text-5xl"/>
},
{
    id:6,
    name:"Pizza",
    icon:<GiFullPizza className="text-orange-500 text-5xl"/>
},
{
    id:7,
    name:"Burger",
    icon:<PiHamburgerBold className="text-orange-500 text-5xl"/>
},
]

export default Category;