
import React from 'react'

import Dropdown from './DropDown'

function TeamMembers(){
    return(
        <div className="container mb-4 ">
            <div className="row mt-5 ms-5 me-5 p-3">
                <div className="col-4 p-5 text-center"> 
                    <img src="media/images/first.jpg" alt=""
                    
                    style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className='mt-4 text-muted ' > Jainul Mirza </h4>
                    <h6 className='text-muted' > Co-founder & CFO </h6>
                    <Dropdown position={'Co-founder & CFO'}
                    
                        description={"Jainul Mirza is a co-founder and CFO of the company. He has a strong background in finance and has been instrumental in shaping the financial strategy of the organization. Jainul is known for his analytical skills and ability to navigate complex financial landscapes. He is committed to ensuring the company's financial health and sustainability."}

                    />
                </div>
                <div className="col-4 p-5 text-center"> 
                    <img src="media/images/second.jpg" alt=""
                    
                    style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' > Sachin Mishra </h4>
                    <h6 className='text-muted' > CTO </h6>

                    <Dropdown position={'CTO'}
                    
                        description={"Sachin Mishra is the Chief Technology Officer (CTO) of the company. He is responsible for overseeing the technological development and innovation within the organization. Sachin has a deep understanding of technology trends and is dedicated to leveraging technology to drive business growth and efficiency."}
                        />
                    
                </div>
                <div className="col-4 p-5 text-center">
                    <img src="media/images/third.jpg" alt=""
                     style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' >Aman</h4>
                    <h6 className='text-muted' > Director Strategy </h6>

                    <Dropdown position={'Director Strategy'}
                    
                        description={"Aman is the Director of Strategy at the company. He plays a crucial role in formulating and executing the company's strategic initiatives. Aman is known for his strategic thinking and ability to identify growth opportunities. He works closely with the leadership team to align the company's goals with its long-term vision."}
                        />  

                </div>

                <div className="col-4 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt=""
                     style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' > Akash Shrivastav </h4>
                    <h6 className='text-muted' > COO </h6>

                    <Dropdown position={'COO'}
                    
                        description={"Akash Shrivastav is the Chief Operating Officer (COO) of the company. He is responsible for overseeing the day-to-day operations and ensuring that the company's processes run smoothly. Akash has a strong background in operations management and is dedicated to optimizing efficiency and productivity within the organization."}
                        />  


                </div>

                <div className="col-4 p-5 text-center">
                    <img src="media/images/annu.jpg" alt=""
                     style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' >Anshika Bajpai </h4>
                    <h6 className='text-muted' > Director </h6>

                    <Dropdown position={'Director'}
                    
                        description={"Anshika Bajpai is a Director at the company. She plays a key role in shaping the company's vision and strategy. Anshika is known for her leadership skills and ability to inspire teams. She is committed to driving innovation and fostering a positive work culture within the organization."}
                        />  

                </div>

                <div className="col-4 p-5 text-center">
                    <img src="media/images/five.jpg" alt=""
                     style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' > Farman Khan </h4>
                    <h6 className='text-muted' > Chief of Education </h6>

                    <Dropdown position={'Chief of Education'}
                    
                        description={"Farman Khan is the Chief of Education at the company. He is responsible for overseeing the educational initiatives and programs. Farman has a strong background in education and is dedicated to enhancing the learning experience for students. He works closely with educators and stakeholders to ensure that the company's educational offerings are of the highest quality."}
                        />  

                </div>

                <div className="col-4 p-5 text-center">
                    <img src="media/images/six.jpg" alt=""
                     style={{borderRadius:'100%',width:'80%'}}
                    />
                    <h4 className=' mt-4 text-muted' >Anuj Kumar</h4>
                    <h6 className='text-muted' > CCO </h6>

                    <Dropdown  position={'Coo'}
                    
                    description={"Anuj Kumar is the Chief Commercial Officer (CCO) of the company. He is responsible for overseeing the commercial strategy and development of the organization. Anuj has a strong background in sales and marketing and is dedicated to driving revenue growth and building strong customer relationships. He works closely with the sales and marketing teams to align strategies with business objectives."} 
                    />

                </div>







             </div>
                    
                    


                
                
            
        </div>
    )
}
export default TeamMembers