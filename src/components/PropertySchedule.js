import React from 'react';
import back from "../assets/img/avatars/Group 417.png";
import back1 from "../assets/img/avatars/back1.png";
import fw from "../assets/img/avatars/fw.png";
const PropertySchedule = () => {
  return (
    <>
         <div class="card shadow-lg bg-white rounded-3  " style={{
                width: "1200px",
                height: "180px",
                marginLeft:"80px",
                marginTop:"30px"
              }} >
          <div className="p-5">
            <img
              style={{
                top: "253px",
                left: "55px",
                width: "56px",
                height: "22px",
              }}
              src={back}
            />
          </div>
          <div style={{marginLeft:"50px"}} >
           <h1 ><b>Lets enter the property schedule</b></h1>
          </div>
          </div>

          <div class="card shadow-lg bg-white rounded-3  " style={{
                width: "1200px",
                height: "750px",
                marginLeft:"80px",
                marginTop:"30px"
              }} >
            <div >
                <p style={{marginTop:"30px",marginLeft:"30px"}}> <a href='#'><img src={back1} />
                </a><strong className='m-4 '>PROPERTY 1 OF 3</strong> 
                <a href='#'><img src={fw} /></a> </p>
            </div>
            <div className='row' style={{marginTop:"60px",marginLeft:"30px"}}>
                <div className='col-md-3'>
                    <h4><small>DISTRICT : BENGALURU (RURAL)</small></h4>
                </div>
                <div className='col-md-3'>
                    <h4><small>TALUKA: DEVANAHALLI</small></h4>
                </div>
                <div className='col-md-3'>
                    <h4><small>HOBLI/ TOWN:VIJAYAPURA</small></h4>
                </div>
                <div className='col-md-3'>
                    <h4><small>INDEX II: VILLAGE: KOMMASANDRA</small></h4>
                </div>
            </div>
            <div className='row' style={{marginTop:"30px",marginLeft:"30px"}}>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>Schedule Type</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "42px",borderRadius:"5px"}} className="mt-4">
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div className='col-md-3'>
                         <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}>
                         <b>Total Area</b>
                         </lable>
                         <br />
                         <h4 style={{marginTop:"30px"}}><strong>2.59 Acres</strong></h4>
                    </div>
                    <div className='col-md-3'>
                         <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}>
                         <b>East to West</b>
                         </lable>
                         <br />
                         <h4 style={{marginTop:"30px"}}><strong>3000 ft</strong></h4>
                    </div>
                    <div className='col-md-3'>
                         <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}>
                         <b>North to South</b>
                         </lable>
                         <br />
                         <h4 style={{marginTop:"30px"}}><strong>3000 ft</strong></h4>
                    </div>   
            </div>
            <div>
                <h3 style={{marginTop:"40px",marginLeft:"30px"}}><small>BOUNDARIES</small></h3>
            </div>
            <div className='row' style={{marginTop:"30px",marginLeft:"30px"}}>
                <div class="col-md-3" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>East</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-3" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>West</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-3" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>North</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
                <div class="col-md-3" >
                    <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>North</b></lable><br />
                    <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",padding:"5px"}} className="mt-4" placeholder='Value' /> 
                </div>
            </div>
            <div style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}}>
                <form>
                    <div class="form-group" >
                    <label for="comment">Description of Property</label>
                    <textarea class="form-control" rows="8"  style={{marginTop:"20px"}} placeholder="Value"></textarea>
                    </div>
                </form>
            </div>
            <div style={{marginTop:"30px",marginLeft:"530px"}}>
                <button type="button" class="btn btn-primary btn-lg" >Save and Continue</button>
            </div>
          </div>
          {/* Footer */}
          <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"50px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div> 
    </>
  );
};

export default PropertySchedule;