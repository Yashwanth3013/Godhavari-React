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
        <div  class="card " style={{top: "20px",left: "40px",width: "1260px",height: "900px",borderStyle:'solid',borderColor:'#E8E8E8'}} >
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
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}} >
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>TALUKA</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>HOBLI</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>INDEX II: VILLAGE</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "48px",borderRadius:"5px"}}>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select>    
                    </div>
                    <br /><br />  <br /><br />   <br /><br />  <br /><br />
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>SURVEY NO.</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} placeholder='value' />
                        
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>HISSA NO.</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} placeholder='Value' disabled/> 
                    </div>
                    <div class="col-md-3" >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}} ><b>EXTENT</b></lable><br />
                        <select style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} disabled>
                        <option>Value</option> 
                        <option>1</option> 
                        <option>2</option>
                        <option>3</option>
                        </select> 
                    </div>
                    <div class="col-md-3"  >
                        <lable style = {{top: "522px",left: "440px",width: "135px",height: "21px"}}><b>11 E SKETCH NUMBER</b></lable><br />
                        <input style = {{top: "559px", left: "440px", width: "200px", height: "42px",borderRadius:"5px"}} placeholder='Value' disabled/>
                       
                    </div>
                </div>
                <div class="col-md-3">
                   <a class="button "  style={{marginLeft:'520px', width:'150px', height:'40px',marginTop:"50px",
                        color:'white',paddingTop:'10px',borderRadius:"10px"}}>Search</a>
                </div>
            </div>
            <div>
                <div >
                <table class="table table-bordered mt-4 ">
          <thead
            style={{
              backgroundColor: "#0A429B",
            }}
          >
            <tr className="text-white " style={{ fontSize: "14px" }}>
              <th
                style={{
                  top: "1136px",
                  left: "83px",
                  width: "1762px",
                  height: "48px",
                }}
                scope="col"
              >
                <p class="ml-3 font-weight-normal">Results</p>
              </th>
            </tr>
          </thead>
          <thead>
            <tbody>
              <tr>
                <th
                  style={{
                    top: "784px",
                    left: "40px",
                    width: "90px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">S.NO.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "130px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Survey No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "330px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Hissa No.</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "530px",
                    width: "360px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Owner Name</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "890px",
                    width: "200px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relationship</p>
                </th>
                <th
                  style={{
                    top: "784px",
                    left: "1090px",
                    width: "310px",
                    height: "80px",
                  }}
                  scope="row"
                >
                  <p className="text-center font-weight-bold">Relative Name</p>
                </th>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "784px",
                        left: "1400px",
                        width: "480px",
                        height: "40px",
                      }}
                      colspan="3"
                      scope="colgroup"
                    >
                      <p className="text-center">Available Extent</p>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th
                      style={{
                        top: "824px",
                        left: "1400px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1461px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Acre
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1560px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1614px",
                          width: "80px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Gunta
                      </p>
                    </th>
                    <th
                      style={{
                        top: "824px",
                        left: "1720px",
                        width: "160px",
                        height: "40px",
                      }}
                      scope="col"
                    >
                      <p
                        className="text-center"
                        style={{
                          top: "832px",
                          left: "1726px",
                          width: "120px",
                          height: "24px",
                        }}
                      >
                        {" "}
                        Fraction of Gunta
                      </p>
                    </th>
                  </tr>
                </thead>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  className="text-center font-weight-normal"
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "40px",
                    width: "90px",
                    height: "48px",
                  }}
                  scope="row"
                >
                  1
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "130px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>56</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "330px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>1</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "530px",
                    width: "360px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Owner Name</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "864px",
                    left: "890px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Father</text>
                  </div>
                </td>
                <td
                  style={{
                    fontFamily: "sans-serif",
                    top: "1280px",
                    left: "1480px",
                    width: "200px",
                    height: "48px",
                  }}
                >
                  <div className="text-center font-weight-normal">
                    <text>Name</text>
                  </div>
                </td>
                <tr>
                  <colgroup span="3"></colgroup>
                  <td
                    style={{
                      top: "864px",
                      left: "1400px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">2</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1560px",
                      width: "100px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">3</p>
                  </td>
                  <td
                    style={{
                      top: "864px",
                      left: "1720px",
                      width: "140px",
                      height: "48px",
                    }}
                    scope="row"
                  >
                    <p className="text-center font-weight-normal">45</p>
                  </td>
                </tr>
              </tr>
            </tbody>
          </thead>
        </table>
     </div>
        </div>
        </div>
        </div>
    
    <div >
    <div className=" col-md-3">
        <a class="button "  style={{marginLeft:'520px', width:'150px', height:'40px',marginBottom:"100px",
                        color:'white',paddingTop:'10px',borderRadius:"10px"}}>Search</a> 
        </div>
      
            <div class=" w-100 bg-dark text-white" style={{height: "40px",borderStyle:'solid',borderColor:'#E8E8E8',marginTop:"100px"}}>
        <p className="mt-2 ml-4">Accessibility Statement | Terms & Conditions | Website Policies | Help | Feedback | Contact Us | Web Information Manager | FAQ | Sitemap | Visitors Analytics</p>
    </div>

    </div>
    <div class=" w-100 ml-4" style={{top: "1032px",left: "60px",width: "414px",height: "21px"}}>
        <h5>©2021, Department of Stamps and Registration, Karnataka</h5>
    </div>

    </div>
  );
};

export default BhoomiSearch;
