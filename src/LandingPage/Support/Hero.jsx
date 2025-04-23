import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 >Support Portal</h4>
        <a className="track-ticket"  href="">Track Tickets</a>
      </div>
      <div className="row p-5 ms-5  ">
        <div className="col-6 p-3 ">
          <h1 className="fs-3 mb-5 ">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="bg-light text-dark mb-3  "
           placeholder="Eg. how do I activate F&O"
            style={{width:'90%', height:"3.5rem"}} 
            
            
             />
             <i  className="fa-solid fa-magnifying-glass text-dark text-muted fs-5 search-icon "></i>
          <br/>

          <a className="  first-link" style={{lineHeight:"2", }}  href="">Track account opening</a> &nbsp; &nbsp;
          <a className=" second-link  " style={{lineHeight:"2"}} href="">Track segment activation</a> &nbsp; &nbsp;
          <a className=" third-link   " style={{lineHeight:"2"}} href="">Intraday margins</a> &nbsp; &nbsp; 
          <a className=" fourth-link   " style={{lineHeight:"2"}} href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-3 mt-4 fs-5 " >
              <a  style={{textDecoration:"underline", marginBottom:"1rem" }} href="">Current Takeovers and Delisting - April 2025</a>

               
            </li>
            <li className=" mt-4 fs-5 " >
              <a style={{textDecoration:"underline"}} href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
