import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
       
        <div className="col-6 ">
          <img className="left-image" src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h2 className="mb-4"  >{productName}</h2>
          <p>{productDesription}</p>
          <div>
            <a className="product-link" href={tryDemo}>Try Demo  &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="product-link" href={learnMore} style={{ marginLeft: "80px" }}>
              Learn More &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
              
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
