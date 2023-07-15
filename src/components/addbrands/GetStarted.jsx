import React from "react";
 
export default function Getstarted(){
    return(
        <div className="container-scroller">
        {/* <!-- partial:partials/_navbar.html --> */}
        <div className="header-nav-wrap fixed-top d-flex flex-row">
          <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="#"><img src="images/logo-white.png" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
              <nav className="header-nav sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="menu-title">Workspace</span>
                  </a>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Request
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Content Writing</a></li>
                    <li><a className="dropdown-item" href="#">Graphic Design</a></li>
                  </ul>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="menu-title">My Campaigns</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="menu-title">My Requests</span>
                  </a>
                </li>
              </ul>
            </nav>
  
              <ul className="navbar-nav navbar-nav-right">
                {/* <!-- Notifications --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                    <img src="images/akar-icons_bell.png" alt="image"/>
                    <span className="count-symbol bg-orange">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <h6 className="p-3 mb-0">Notifications</h6>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="mdi mdi-calendar"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                        <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="mdi mdi-settings"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                        <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="mdi mdi-link-variant"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                        <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                  </div>
                </li>
                {/* <!-- Notifications --> */}
  
                <li className="nav-item nav-logout d-none d-lg-block">
                  <a className="nav-link" href="#">
                    <img src="images/ant-design_search-outlined.png" alt="image"/>                
                  </a>
                </li>
  
                <li className="nav-item nav-profile dropdown">
                  <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="nav-profile-img">
                      <img src="images/faces/face1.jpg" alt="image"/>
                      {/* <!-- <span className="availability-status online"></span> --> */}
                    </div>
                    <div className="nav-profile-text">
                      <p className="mb-1 text-black">Jane Doe</p>
                    </div>
                  </a>
                  <div className="dropdown-menu navbar-dropdown profile-wrap" aria-labelledby="profileDropdown">
                    <a href="#" className="dropdown-item nav-profile-wrap">
                      <div className="nav-profile-image">
                        <img src="images/faces/face1.jpg" alt="profile"/>
                        <span className="login-status online"></span>
                        {/* <!--change to offline or busy as needed--> */}
                      </div>
                      <div className="nav-profile-text d-flex flex-column">
                        <span className="font-weight-bold">Jane Doe</span>
                        <span className="text-secondary text-small user-email">jane@gmail.com</span>
                      </div>
                    </a>
  
                    <div className="dropdown-divider mb1"></div>
  
                    <a className="dropdown-item" href="#">Profile & Preferences </a>
                    <a className="dropdown-item" href="#">Accounts & Billing </a>
                    <a className="dropdown-item" href="#">Pricing & Features </a>
                    <a className="dropdown-item" href="#">Privacy Policy </a>
  
                    <div className="dropdown-divider mb1"></div>
                    <a className="dropdown-item item-logout" href="#"><img src="images/ri_logout-circle-r-line.png" alt="Logout"/> Logout</a>
  
                      
                  </div>
                </li>
                
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
        </div>
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper pt-70 getting-started-page">
        
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="header-title-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex page-title">
                        <div className="title">
                          <h1>Getting Started!</h1>
                          <p>Here are some tips and setup tasks to help you get started</p>
                        </div>
                        <a href="#" className="btn skip-btn"><img src="images/skip-icon.png"/> Skip This Step</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="content-wrapper text-center">
              <div className="container">
                <div className="get-started-frm-wrap">
                  <div className="frm-step-wrap">
                    <div className="step-wrap-box d-flex">
                      <div className="step-box active">
                        <div className="step-number-wrap">
                          <span className="step-number">1</span>
                        </div>                      
                        <span className="step-text">Add Brand / Company Profile</span>
                      </div>
                      <div className="step-box active">
                        <div className="step-number-wrap">
                          <span className="step-number">2</span>
                        </div>
                        <span className="step-text">Create New Campaign</span>
                      </div>
                    </div>
                    <div className="step-progress-wrap">
                        <div className="progress">
                          <div className="bar" style={{width:"100%"}}>
                            <p className="percent">100%</p>
                          </div>
                        </div>
                        <div className="complete-percentage">100% Complete</div>
                      </div>
                  </div>
  
                  <div className="get-started-frm-row">
                    <form className="get-started-frm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Your Campaign Name <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="text" className="form-control" placeholder="Your Campaign Name"/>
                            </div>
                          </div>
                        </div>
  
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Campaign Owner <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="text" className="form-control" placeholder="Campaign Owner"/>
                            </div>
                          </div>
                        </div>                      
                      </div>
  
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="col-form-label">Start Date of Campaign <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="date" className="form-control"/>
                            </div>
                          </div>
                        </div>
  
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="col-form-label">End Date of Campaign <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="date" className="form-control"/>
                            </div>
                          </div>
                        </div>  
  
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Add Campaign Budget <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="text" className="form-control" placeholder="Track the spending on your campaign, with the budget constraints in mind."/>
                            </div>
                          </div>
                        </div>                    
                      </div>
  
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Goal Sales <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Add a goal that summarizes what you want to achieve with your campaign. This will help team members stay on track."></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Target Audience <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <textarea className="form-control" id="exampleTextarea1" rows="8" placeholder="Adding target audience will help your team understand who this campaign is targeting."></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Notes (optional)</label>
                            <div className="single-input">
                              <textarea className="form-control" id="exampleTextarea1" rows="8" placeholder="If you have something in mind add your additional notes"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
  
  
                      <div className="text-center">
                        <button type="submit" className="btn btn-secondary me-2">Reset</button>
                        <input type="submit" className="btn btn-primary me-2" name="" defaultValue="Save & Proceed"/>
                      </div>
  
  
                    </form>
                  {/* </div><!--.get-started-frm--> */}
                </div>
              
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- main-panel ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
      </div>
    );
}