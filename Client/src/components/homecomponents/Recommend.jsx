import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homestyle from '../homestyles/home.module.css'
import slidestyle from '../homestyles/slide.module.css'
const Recommend = () => {
    // data.......//
const recc =[
    {
       image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/2af56a34-7459-48de-82cf-60a848ff063d/nike-just-do-it.png" ,
       title:"men",
       description:"Pick and choose from a wide range of delicious fruits"
    },
    {
        image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c804f931-0c54-4be7-b286-f0e0f9fca67b/nike-just-do-it.png" ,
        title:"women",
        description:"We want to spoon-feed you… quite literally"
     },
     {
        image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/35bd3be8-6283-4ff8-b057-12b9d54d87fe/nike-just-do-it.png" ,
        title:"kids",
        description:"Indulge in fruit combinations created by us"
     },
     {
        image:"https://i.pinimg.com/564x/5d/b1/90/5db19056c14674f83ec6f58496326a5a.jpg" ,
        title:"kids",
        description:"Healthy & memorable gifts for your loved ones"
     }
]
// ********************************************//
  return (

    <div className={homestyle.parent}>
        <h1>New Outfit</h1>
       <h3>Available Items for Men Woemn Kids</h3>
        <br/>
    <div className={homestyle.box1} style={{"border":"1px solid black"}}  >

   {
    recc.map((el)=>(
       <div style={{"border":"1px solid red"}} className={homestyle.box2}>
        <div style={{"border":"1px solid blue"}}  className={slidestyle.each} >
        {/* <img src={el.image}/> */}
        <div   className={homestyle.child} style={{'backgroundImage': `url(${el.image})`,"border":"1px solid teal"}} >

        <Link   to={`/products/${el.title}`}>
        <button style={{"backgroundColor":"white","borderRadius":"20px" ,"padding":"10px","marginTop":"300px" }}> Shop Now</button>
        </Link>
        </div>
        
        </div>
  
        <br/>
        <br/>
        
       </div> 
    ))
   }

    </div>
    
    </div>

  )
}

export default Recommend