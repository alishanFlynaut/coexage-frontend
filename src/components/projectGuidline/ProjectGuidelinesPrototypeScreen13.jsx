import React from 'react';

const ProjectGuidlinesPrototypeScreen13 = () => {
  return (
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
                  <li><a className="dropdown-item" href="select-project-type-blog-article-step-1.html">Content Writing</a></li>
                  <li><a className="dropdown-item" href="select-project-type-website-step-1.html">Graphic Design</a></li>
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
                  <img src="images/akar-icons_bell.png" alt="image" />
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
                  <img src="images/ant-design_search-outlined.png" alt="image" />                
                </a>
              </li>

              <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="nav-profile-img">
                    <img src="images/faces/face1.jpg" alt="image" />
                    {/* <!-- <span className="availability-status online"></span> --> */}
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">Jane Doe</p>
                  </div>
                </a>
                <div className="dropdown-menu navbar-dropdown profile-wrap" aria-labelledby="profileDropdown">
                  <a href="#" className="dropdown-item nav-profile-wrap">
                    <div className="nav-profile-image">
                      <img src="images/faces/face1.jpg" alt="profile" />
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
                  <a className="dropdown-item item-logout" href="#"><img src="images/ri_logout-circle-r-line.png" alt="Logout" /> Logout</a>

                    
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
      <div className="container-fluid page-body-wrapper pt-70 project-guidelines-page">
      
        {/* <!-- partial --> */}
        <div className="main-panel">
          <div className="header-title-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex page-title">
                      <div className="title">
                        <h1>Create New Request</h1>
                        <p>Here are some tips and setup tasks to help you get started</p>
                      </div>
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
                        <div className="bar" style={{width:'100%'}}>
                          <p className="percent">100%</p>
                        </div>
                      </div>
                      <div className="complete-percentage">100% Complete</div>
                  </div>
                </div>

                <div className="process-bar-area">
                  
                  <div className="middle-area">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="box active blue-right">
                          <div className="dot"></div>
                          <div className="text"><img src="images/select-project-type-org-icon.png" alt="Select Project Type" /> Select Project Type</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="box active blue-left">
                          <div className="dot"></div>
                          <div className="text"><img src="images/project-guidelines-icon.png" alt="Project Guidelines" /> Project Guidelines</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="box">
                          <div className="dot"></div>
                          <div className="text"><img src="images/payment-icon.png" alt="Payment" /> Payment</div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="content-bg-white">
                  <div className="row">
                    <div className="col-md-12">
                      <form className="CreateNewRequest-frm frm-wrap text-left">
                        <div className="row">

                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Select project guidelines from previous request (Below fields will be automatically repopulated)</label>
                              <div className="single-input drop-img">
                                <select id="exampleInputShowing" className="form-select form-select-lg">
                                  <option selected="">Select Option</option>
                                  <option value="Blog - The Easiest Way to Become a Successful Creator">Blog - The Easiest Way to Become a Successful Creator</option>
                                  <option value="Blog - The Science Of Simplicity">Blog - The Science Of Simplicity:</option>
                                  <option value="Corporate">Corporate</option>
                                  <option value="Newsletter - 9 Marketing Mistakes ">Newsletter - 9 Marketing Mistakes </option>
                                  <option value="Website - Healthify">Website - Healthify</option>
                                  <option value="No, I  want to create new guidelines" style={{color:'#EC5563'}}>No, I  want to create new guidelines</option>
                                </select>
                              </div>
                            </div>

                            <div className="text-center font-weight-light hr-lines"><span>OR</span></div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Brand Name <span className="required-fill">*</span></label>
                              <div className="single-input">
                                <input type="text" className="form-control" placeholder="ABC Brand Name" /> 
                              </div>
                            </div>
                          </div>
                          
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">Topic <span className="required-fill">*</span></label>
                              <div className="single-input drop-img">
                                <select id="exampleInputShowing" className="form-select form-select-lg">
                                  <option selected="">Select Option</option>
                                  <option value="Art and Design">Art and Design</option>
                                  <option value="Automotive">Automotive</option>
                                  <option value="Banking / Finance / Accounting">Banking / Finance / Accounting</option>
                                  <option value="Business">Business</option>
                                  <option value="Cannabis">Cannabis</option>
                                  <option value="Consumer Electronics">Consumer Electronics</option>
                                  <option value="Cyrptocurrency">Cyrptocurrency</option>
                                  <option value="Digital Marketing">Digital Marketing</option>
                                  <option value="E-commerce & Retail">E-commerce & Retail</option>
                                  <option value="Education">Education</option>
                                  <option value="Entertainment">Entertainment</option>
                                  <option value="Entrepreneurship">Entrepreneurship</option>
                                  <option value="Environment and Sustainability">Environment and Sustainability</option>
                                  <option value="Fashion and Beauty">Fashion and Beauty</option>
                                  <option value="Food">Food</option>
                                  <option value="Health / Medical / Pharma">Health / Medical / Pharma</option>
                                  <option value="Home Improvement">Home Improvement</option>
                                  <option value="Hospitality">Hospitality</option>
                                  <option value="Legal">Legal</option>
                                  <option value="Lifestyle">Lifestyle</option>
                                  <option value="Music">Music</option>
                                  <option value="Personal Development and Self Improvement">Personal Development and Self Improvement</option>
                                  <option value="Pets">Pets</option>
                                  <option value="Photography">Photography</option>
                                  <option value="Politics">Politics</option>
                                  <option value="Psychology">Psychology</option>
                                  <option value="Real Estate">Real Estate</option>
                                  <option value="Sports">Sports</option>
                                  <option value="Technical">Technical</option>
                                  <option value="Technology">Technology</option>
                                  <option value="Travel">Travel</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">Title <span className="required-fill">*</span></label>
                              <div className="single-input">
                                <img src="images/H1.png" alt="" />
                                <input type="text" className="form-control" placeholder="Your project title" />
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                    <div className="form-check form-check-primary">
                                      <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Request a topic research</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check form-check-primary">
                                      <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" /> Surprise me </label>
                                    </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        <div className="row">

                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Outline <span className="required-fill">*</span>
                                <p>Build the outline of your article with subheadings.</p>
                              </label>
                              <div className="down-arrow-input d-flex">
                                <span className="d-flex up-down-arrow">
                                  <img src="images/arrow-up.png" alt="" />
                                  <img src="images/arrow-down.png" alt="" />
                                </span>
                                <div className="single-input1 d-flex">
                                  <div className="title-dropdown">
                                    <img src="images/H2.png" alt="" className="title-icon" />
                                    <div className="m-border"></div>
                                    <img src="assets/images/bxs_down-arrow.png" alt="" />
                                  </div>
                                  
                                  <input type="text" className="form-control" />
                                </div>
                              </div>

                              <div className="down-arrow-input d-flex">
                                <span className="d-flex up-down-arrow">
                                  <img src="images/arrow-up.png" alt="" />
                                  <img src="images/arrow-down.png" alt="" />
                                </span>

                                <div className="single-input1 d-flex">
                                  <div className="title-dropdown">
                                    <img src="images/H2.png" alt="" className="title-icon" />
                                    <div className="m-border"></div>
                                    <img src="images/bxs_down-arrow.png" alt="" />
                                  </div>
                                  
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="add-filled-btn">
                                <a href="#">Add More Subheadings <img src="images/add-filled.png" /></a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Campaign</label>
                              <div className="single-input drop-img">
                                <select id="exampleInputShowing" className="form-select form-select-lg">
                                  <option selected="">Select Option</option>
                                  <option value="Q4 Campaign">Q4 Campaign</option>
                                  <option value="Diwali Campaign">Diwali Campaign</option>
                                  <option value="Christmas Campaign">Christmas Campaign</option>
                                  <option value="ABC Campaign">ABC Campaign</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">SEO Keywords </label>
                              <div className="single-input">
                                <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="What words or phrases would a customer use to search for your brand on Google?"></textarea>
                              </div>
                              <div className="add-filled-btn add-seo">
                                <a href="#">Generate Keywords</a>
                              </div>
                            </div>                            
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Purpose <span className="required-fill">*</span></label>
                              <div className="single-input">
                                <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Write about the main goal of this project."></textarea>
                              </div>
                            </div>                            
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Description <span className="required-fill">*</span></label>
                              <div className="single-input">
                                <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Write about your company. The products & services you offer and what are you known for?"></textarea>
                              </div>
                            </div>                            
                          </div>
                        </div>


                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <label className="col-form-label">Audience & Style
                                <p>Who is this content for and what is the style and tone?</p>
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">Audience</label>
                              <div className="single-input drop-img">
                                <select id="exampleInputShowing" className="form-select form-select-lg">
                                  <option selected="">Select Option</option>
                                  <option value="General Audience">General Audience</option>
                                  <option value="Industry Experts">Industry Experts</option>
                                  <option value="Industry Beginners">Industry Beginners</option>
                                  <option value="Industry Enthusiasts">Industry Enthusiasts</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">Style and Tone</label>
                              <div className="single-input drop-img">
                                <select id="exampleInputShowing" className="form-select form-select-lg">
                                  <option selected="">Select Option</option>
                                  <option value="Casual / Informal">Casual / Informal</option>
                                  <option value="Professional / Formal">Professional / Formal</option>
                                  <option value="Conversational">Conversational</option>
                                  <option value="Exciting">Exciting</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Research Links
                                <p>Add any research links you'd like us to refer to.</p>
                              </label>
                              <div className="single-input">
                                <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="You can add your research links over here"></textarea>
                              </div>
                            </div>                            
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="col-form-label">Links 
                                <p>Add any links from your own website or external websites that you want included in your piece of content.</p>
                              </label>
                              <div className="single-input">
                                <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="What words or phrases would a customer use to search for your brand on Google?"></textarea>
                              </div>
                            </div>                            
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                              <div className="form-check form-check-primary donot-check">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input" /> Do not use AI generated content.</label>
                              </div>
                          </div>
                        </div>


                        

                        <div className="text-center">
                          <input 
                          type="submit" 
                          className="btn btn-primary me-2"
                           name="" 
                           value="Save & Proceed" 
                           />
                        </div>


                      </form>
                    </div>
                  </div>
                </div>
                {/* <!--.content-bg-white--> */}
              </div>
            

            


            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </div>
      {/* <!-- page-body-wrapper ends --> */}
    </div>
  );
}

export default ProjectGuidlinesPrototypeScreen13;
