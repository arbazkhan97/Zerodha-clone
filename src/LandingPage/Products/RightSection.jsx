import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,

}) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6 p-5 mt-5">
          <h2  className=" mt-2 mb-4" >{productName}</h2>
          <p>{productDesription}</p>
          <div>
            
            <a className="product-link" href={learnMore} >
              Learn More &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          
        </div>

        <div className="col-6 ">
          <img className="left-image" src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
