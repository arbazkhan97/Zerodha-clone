import React from "react";
import Dropdown from "./Dropdown";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 ">
        <h1 className="text-center text-muted ms-5 fs-1 ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <  img
            src="media/images/arbaz.jpg"
            style={{ borderRadius: "100%", width: "50%",   }}
          />
          <h4 className="mt-5">Arbaz khan</h4>
          <h6>Founder, CEO</h6>
          <Dropdown position={'Founder,CEO'} 
           
            description={
              "Arbaz is a serial entrepreneur and a tech enthusiast. He has been building products for the last 5 years. He is a full stack developer and has worked on various projects in the past. He is passionate about building products that solve real world problems."
            }
           
          
          />

        </div>
        <div className="col-6 ">
          <p className="pt-5" >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a style={{fontSize:'16px'}} className="team-link" href="">Homepage</a> /
             <a style={{fontSize:'16px'}} className="team-link" href="">TradingQnA</a>  /
            <a style={{fontSize:'16px'}} className="team-link" href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
