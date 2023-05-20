import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import Marquee from "react-fast-marquee";



const Banner = () => {
    return (
        <div className="carousel  h-[700px]">

             
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1}className="w-full " />

 
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
    <Marquee className=' text-error font-bold'>
    `Transform playtime into a safari adventure with our collection of animal-inspired toys.`
</Marquee>
      <a href="#slide3" className="btn btn-square btn-secondary mr-5">❮</a> 
      <a href="#slide2" className="btn btn-square btn-secondary">❯</a>

     
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2}className="w-full" />
 
  <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
      <Marquee className=' text-error font-bold'>
      `Transform playtime into a safari adventure with our collection of animal-inspired toys.`
  </Marquee>
        <a href="#slide4" className="btn btn-square btn-secondary mr-5">❮</a> 
        <a href="#slide3" className="btn btn-square btn-secondary">❯</a>
  
       
      </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3}className="w-full" />
  
  <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
      <Marquee className=' text-error font-bold'>
      `Transform playtime into a safari adventure with our collection of animal-inspired toys.`
  </Marquee>
        <a href="#slide5" className="btn btn-square btn-secondary mr-5">❮</a> 
        <a href="#slide4" className="btn btn-square btn-secondary">❯</a>
  
       
      </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4}className="w-full" />
 
  <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
      <Marquee className=' text-error font-bold'>
      `Transform playtime into a safari adventure with our collection of animal-inspired toys.`
  </Marquee>
        <a href="#slide6" className="btn btn-square btn-secondary mr-5">❮</a> 
        <a href="#slide5" className="btn btn-square btn-secondary">❯</a>
  
       
      </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img src={img5}className="w-full" />
  
  <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      
      <Marquee className=' text-error font-bold'>
      `Transform playtime into a safari adventure with our collection of animal-inspired toys.`
  </Marquee>
        <a href="#slide1" className="btn btn-square btn-secondary mr-5">❮</a> 
        <a href="#slide6" className="btn btn-square btn-secondary">❯</a>
  
       
      </div>
  </div>
</div>
    );
};

export default Banner;