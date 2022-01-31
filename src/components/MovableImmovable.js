import React from 'react';

const MovableImmovable = () => {
    const openform = () => {
        document.getElementById("myForm").style.display = "block";
      };
  return (
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
        <div  class="card " style={{top: "20px",left: "40px",width: "1260px",height: "600px",borderStyle:'solid',borderColor:'#E8E8E8'}} >
            <div className="mt-4 ml-4">
                <span class="glyphicon glyphicon-chevron-left" /><a href='#' style={{color:"black",textDecoration: "none"}}>Back</a> <br />
            </div>

            <br />
            <div class="row mt-4" >
                <div class="p-4 col-md-3 ">
                    <img src='assets/img/avatars/Hello.png' style={{top: "275px",left: "75px",width: "200px",height: "149px"}} />
                </div>
                <div class=" p-4 col-md-9 mt-4">
                    <img src='assets/img/avatars/move.png' />
                    {/* <h4 style={{top: "500px",width: "596px",height: "27px", color:'black'}} ><b>What kind of Power of Attorney do you want to have?</b></h4>
                    <h6 style={{width: "596px",height: "27px"}}>Select one to Continue</h6> */}
                </div>  
            </div>
            <div class="card-body">
                <div class="row ml-4" >
                <div class="col-md-2"  >
                       
                    </div>
                    <div class="col-md-4"  >
                        <img src="assets/img/avatars/immovable.png" style={{cursor: 'pointer' ,top: "456px",left: "247px",width: "150px",height: "152px"}}/>
                    </div>
                    <div class="col-md-4" >
                        <img src="assets/img/avatars/movable.png" style={{cursor: 'pointer' , top: "456px",left: "247px",width: "150px",height: "152px"}}/>
                    </div>
                    <div class="col-md-2"  >
                       
                       </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"30px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div>
  </div>
    );
};

export default MovableImmovable;
