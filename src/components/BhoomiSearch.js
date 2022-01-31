import React from 'react';

const BhoomiSearch = () => {
    const openform = () => {
        document.getElementById("myForm").style.display = "block";
      };
  return(
    <div>
          <div class="header" style={{backgroundColor:'white',height:'100px',position:'sticky',borderStyle:'solid',borderColor:'#E8E8E8'}}>
                     <img src ='assets/img/avatars/gkl.png'  style={{float:'left',width:'70px', height : '70px',marginLeft:'20px',marginTop:"-5px"}}/>
  
                    <a href="/" class="logo" style={{fontFamily:'Segoe UI',color:'black',marginTop:"-5px"}}>Godhavari Online Service</a> <br/> <br/>
                    <h3 style={{float:"left",marginLeft:"-310px",marginTop:'-5px', color:'#808080', fontFamily:'Segoe UI', fontStyle:'italic',fontSize:'17px'}}>Department of Stamp and Registration Government of Andhra Pradesh </h3>
        <form class="form-inline" style={{float:"right"}}>
            <div class="header-right">
                <a class="button " onClick={() => {openform()}   } style={{float:'right', marginRight:'30px', width:'120px', height:'40px',
                        color:'white',paddingTop:'10px',marginTop:'-25px'}}>Logout</a>
                <img src='assets/img/avatars/bell.png' style={{float:'right', marginRight:'30px',top: "54px",left: "1729px",width: "17px",height: "21px",marginTop:'-18px'}} />
                <img src='assets/img/avatars/pro.png' style={{float:'right', marginRight:'20px',top: "54px",left: "1664px",width: "36px",height: "36px",marginTop:'-25px'}} />
                <p style={{float:'right', marginRight:'30px',top: "55px",left: "1563px",width: "81px",height: "21px",marginTop:'-20px'}}>Hello, User</p>
            </div>
            </form>
        </div>
                {/* Heading part End */}

                {/* Navbar Heandings */}

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

                    {/* Navbar Heandings End */}


                    {/*Body Part Start*/}
    <div className="container-fulid mt-3">
        <div  class="card " style={{top: "20px",left: "40px",width: "1260px",height: "800px",borderStyle:'solid',borderColor:'#E8E8E8'}} >
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
            <div class="card-body">
                <div class="row ml-4" >
                    <div class="col-md-3 "  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>DISTRICT</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px"}} >
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>TALUKA</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>HOBLI</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>INDEX II: VILLAGE</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select>    
                    </div>
                    <br /><br />  <br /><br />   <br /><br />  <br /><br />
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>SURVEY NO.</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px"}} placeholder='value' />
                        
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>HISSA NO.</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px"}} placeholder='Value'/> 
                    </div>
                    <div class="col-md-3" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>EXTENT</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "42px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>11 E SKETCH NUMBER</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px"}} placeholder='Value'/>
                       
                    </div>
                </div>
                <div class="col-md-3">
                   <a class="button "  style={{marginLeft:'520px', width:'150px', height:'40px',marginTop:"50px",
                        color:'white',paddingTop:'10px',borderRadius:"10px"}}>Search</a>
                </div>
            </div>
            <div>
                <div class=" w-100 bg-primary text-white" style={{height: "40px",borderStyle:'solid',marginTop:"30px"}}>
                <p className="mt-2 ml-4">Results</p>
                </div>
        </div>
        </div>
        </div>
    
    <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"30px"}}>
        <p className="mt-2 ml-4"><div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"30px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div></p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div>

    </div>
  );
};

export default BhoomiSearch;
