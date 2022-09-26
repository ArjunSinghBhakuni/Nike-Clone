import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slidestyle from '../homestyles/slide.module.css'

const slideImages = [
  "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/ac972e94-9c39-4517-9af3-1e5867382d09/nike-just-do-it.jpg",
  "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/2c553fec-2638-484e-b3fc-2eec849d1a94/men-s-shoes-clothing-accessories.jpg",
  "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/16e314b6-f8aa-4f85-aa49-fa627d24d65f/women-s-shoes-clothing-accessories.png",
  "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/1ac1ef70-731b-41fe-9537-decd9f1584d7/nike-just-do-it.jpg",
  "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/8237cd46-4ba5-4fcf-8c3d-c857a0d8b1ba/nike-kids.jpg"

]
const properties={ 


  indicators: true,
};

// const slidestyle={

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "350px"
// }

const Slideshow = () => {
  const navigate = useNavigate()
    return (
      <div className={slidestyle.top}>
        <Slide easing="ease"  {...properties}>
        {slideImages.map((e)=>(
          <div key={e}  className={slidestyle.each}>
      

           <div  onClick={()=>navigate('/products')} style={{'backgroundImage': `url(${e})`,"cursor":"pointer"}} >
           
           
            </div>
          
            {/******************************************* */ }
          </div>
          ))}
          {/* <div className={slidestyle.each}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
           
            </div>
          </div> */}
          {/* ************************************************************ */}
          {/* <div className={slidestyle.each}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          
            </div>
          </div> */}
          {/* *************************************************************** */}
          {/* <div className={slidestyle.each}>
          <div style={{'backgroundImage': `url(${slideImages[3]})`}} >
          
           
            </div>
          </div> */}
          {/* ********************************************************* */}
          {/* <div className={slidestyle.each}>
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
           
            </div>
          </div> */}
          
        </Slide>
      </div>
    )
};

export default Slideshow;
