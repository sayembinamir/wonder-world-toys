import img5 from '../../../../assets/images/banner/5.jpg';

const Photo = () => {
    return (
        <div className="mt-8">
        <div className="text-center  mb-3">
        <h3 className="text-3xl text-blue-600 font-bold"> Cors Features</h3>
    
         </div>
        
        <div className="carousel carousel-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
            
        <div className="carousel-item">
          <img  className='w-full h-60' src={img5} alt="Drink" />
        </div> 
        <div className="carousel-item">
          <img  className='w-full h-60' src={img5} alt="Drink" />
        </div> 
        <div className="carousel-item">
          <img   className='w-full h-60' src={img5} alt="Drink" />
        </div> 
        <div className="carousel-item">
          <img   className='w-full h-60' src={img5} alt="Drink" />
        </div> 
        <div className="carousel-item">
          <img   className='w-full h-60' src={img5}alt="Drink" />
        </div> 
      
      
      </div>
      </div>
    );
};

export default Photo;