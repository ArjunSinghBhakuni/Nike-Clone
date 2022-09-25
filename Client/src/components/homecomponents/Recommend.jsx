import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homestyle from '../homestyles/home.module.css'

const Recommend = () => {
    // data.......//
const recc =[
    {
       image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/2af56a34-7459-48de-82cf-60a848ff063d/nike-just-do-it.png" ,
       title:"ALL FRUITS",
       description:"Pick and choose from a wide range of delicious fruits"
    },
    {
        image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/c804f931-0c54-4be7-b286-f0e0f9fca67b/nike-just-do-it.png" ,
        title:"FRESH CUTS",
        description:"We want to spoon-feed you… quite literally"
     },
     {
        image:"https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_383,c_limit/35bd3be8-6283-4ff8-b057-12b9d54d87fe/nike-just-do-it.png" ,
        title:"FRUIT COMBOS",
        description:"Indulge in fruit combinations created by us"
     },
     {
        image:"https://i.pinimg.com/564x/5d/b1/90/5db19056c14674f83ec6f58496326a5a.jpg" ,
        title:"GIFTS BY KIMAYE",
        description:"Healthy & memorable gifts for your loved ones"
     }
]
// ********************************************//
  return (

    <div className={homestyle.parent}>
        <h1>KIMAYE RECOMMENDS</h1>
       <h3>A Handpicked and Curated Fruit offering</h3>
        <br/>
    <div className={homestyle.box1}>

   {
    recc.map((el)=>(
       <div className={homestyle.box2}>
        <div>
        <img src={el.image}/>
        </div>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <br/>
        <br/>
        <Link className={homestyle.link} to='/allfruits'>
        <button> Shop Now</button>
        </Link>
       </div> 
    ))
   }

    </div>
    <br/>
    <br/>
    <br/>
    <div>
    <img className={homestyle.bimg} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-top-cut.png?v=1599122573"/>
    <div className={homestyle.zigzag}>
      <span>
         <div className={homestyle.innerzig}>
         <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438"/>
         <div>
            <h1>WE’D LIKE TO SAY KIMAHI…</h1>
            <p>Many of us share common safety concerns about the food we eat.</p>
            <br/>
            <p>When it comes to fruits, these concerns are even more serious in terms of the
                way they are grown and handled throughout their farm-to-home journey. 
               We make eating fruits a worry-free and enjoyable experience for you.</p>
               <p>Since 2009, we have set the benchmark for fruit safety and quality in 35 countries. 
                  Kimaye is now expanding its footprint in India, bringing you multiple varieties of fruit that are grown, packaged, 
                  and delivered in the safest and most socially responsible manner.</p>
                  <h2>Kimaye is #allSafe#allGood</h2>
                
                
                  <button>KNOW MORE</button>
         </div>
         </div>
         </span>
</div>
<img className={homestyle.bimg} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-bottom-cut.png?v=1599122574"/>


    </div>
    </div>

  )
}

export default Recommend