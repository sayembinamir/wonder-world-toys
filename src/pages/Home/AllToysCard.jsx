

const AllToysCard = ({allToys}) => {
    const {title,img,price,name}=allToys;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-500">Price:${price}</p>
    <p className="text-xl text-orange-500">{name}</p>
    <div className="card-actions">
      <button className="btn btn-square btn-secondary">Buy Now</button>
    </div>
    
  </div>


</div>


    );
};

export default AllToysCard;
