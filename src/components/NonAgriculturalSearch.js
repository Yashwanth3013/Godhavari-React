import React from 'react';

const NonAgriculturalSearch = () => {
    
  return(
      <>
     
    <div>
          <div>
            <div class=" tab" style={{width:'100%'}}>
              <button class=""  onclick="openCity(event, 'London')" style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "222px",height: "80px"}}>Home</button>
              <button class="" onclick="openCity(event, 'Paris')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>About Department</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Resources</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>External Links</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Right to Information</button>
              <button class="" onclick="openCity(event, 'Tokyo')"  style={{borderStyle:'solid',borderColor:'#E8E8E8',top: "120px",left: "0px",width: "225px",height: "80px"}}>Help</button>
            </div>
        </div>
        <div  class="card " style={{top: "20px",left: "40px",width: "1260px",height: "1050px",borderStyle:'solid',borderColor:'#E8E8E8'}} >
            <div className="mt-4 ml-4">
                <span class="glyphicon glyphicon-chevron-left" /><a href='#' style={{color:"black",textDecoration: "none"}}>Back</a> <br />
            </div>

            <br />
            <div class="row mt-4" >
                <div class="p-4 col-md-3 ">
                    <img src='assets/img/avatars/Hello.png' style={{top: "275px",left: "75px",width: "200px",height: "149px"}} />
                </div>
                <div class=" p-4 col-md-9 mt-4">
                    <img src='assets/img/avatars/bhumi.png' />
                   
                </div>  
            </div>
            <div class="card-body" style={{marginTop:"60px",marginLeft:"100px"}}>
                <div class="row ml-4" >
                    <div class="col-md-4 "  >
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}} ><b>DISTRICT</b></lable><br /><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "48px",borderRadius:"5px"}} >
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-4"  >
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}}><b>TALUKA</b></lable><br /><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-4" >
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}}><b>HOBLI</b></lable><br /><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                 
                    <div class="col-md-4" style={{marginTop:"20px"}}>
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}}><b>VILLAGE/ TOWN</b></lable><br /><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-4" style={{marginTop:"20px"}} >
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}} ><b>PID NO.</b></lable><br /><br />
                        <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",borderRadius:"5px",padding:"5px"}} placeholder='Value' /> 
                    </div>
                    </div>
                </div>
                <div style={{marginLeft:"130px",marginBottom:"70px"}} >
                    <h4><b>PROPERTY NUMBER DETAILS</b></h4>
                    <p>Enter one or more details to further improve your search</p>
                    <hr ></hr>
               
                
               <div className='row' >
                   
               <div class="col-md-4" style={{marginTop:"50px"}}>
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}}><b>PROPERTY NUMBER TYPE</b></lable><br /><br />
                        <select style = {{top: "559px", left: "440px", width: "240px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-4" style={{marginTop:"50px"}} >
                        <lable style = {{top: "522px",left: "440px",width: "170px",height: "21px"}} ><b>PRESENT PROPERTY NUMBER DETAILS</b></lable><br /><br />
                        <input style = {{top: "559px", left: "440px", width: "240px", height: "42px",borderRadius:"5px",padding:"5px"}} placeholder='Value' /> 
                    </div>
                    <div class="col-md-4" style={{marginTop:"50px"}} >
                       <a href='#'style={{textDecoration:"none"}}>Delete</a>
                    </div>
                    <div style={{marginTop:"30px"}}>
                    <hr ></hr>
                    </div>
                    <div>
                   <h4><a href='#' style={{textDecoration:"none"}} >Add more details</a></h4>
               </div>
               <div class="col-md-3">
                   <a class="button "  style={{marginLeft:'480px', width:'150px', height:'40px',marginTop:"50px",
                        color:'white',paddingTop:'10px',borderRadius:"10px"}}>Continue</a>
                </div>

               </div>  
               </div> 
            </div>
               
            <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"100px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div>
           </div>
    </>
  );
};

export default NonAgriculturalSearch;
