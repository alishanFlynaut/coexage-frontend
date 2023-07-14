import React from 'react';

const ProjectGuidelinesPrototypeScreen13_2 = () => {
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
                    <form className="frm-wrap text-left">
                      
                      <div className="row">

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Topic <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <input type="text" className="form-control" placeholder="Example: Thanksgiving Dinner Flyer" />
                            </div>
                          </div>
                        </div>
                          

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Social Media Type <span className="required-fill">*</span></label>
                            <div className="single-input drop-img">
                              <select id="exampleInputShowing" className="form-select form-select-lg">
                                <option value="">Select the social media type</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Pinterest">Pinterest</option>
                                <option value="Twitter">Twitter</option>
                                <option value="Youtube">Youtube</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Dimensions <span className="required-fill">*</span>
                              <p>What file sizes and formats do you need? Select all that apply.</p></label>
                            <div className="photos-wrap dims-frmat-wrap d-flex">

                              <div className="photo-box dims-frmat-box active">
                                <h3>Group Cover Photo</h3>
                                <h4>1640 x 846</h4>
                              </div>

                              <div className="photo-box dims-frmat-box">
                                <h3>Profile Photo</h3>
                                <h4>1640 x 846</h4>
                              </div>

                              <div className="photo-box dims-frmat-box">
                                <h3>Cover Photo</h3>
                                <h4>1640 x 846</h4>
                              </div>

                              <div className="photo-box dims-frmat-box">
                                <h3>Shared Image</h3>
                                <h4>1640 x 846</h4>
                              </div>

                              <div className="photo-box dims-frmat-box">
                                <h3>Shared Image</h3>
                                <h4>1640 x 846</h4>
                              </div>

                              <div className="photo-box dims-frmat-box">
                                <h3>Carousel Post</h3>
                                <input type="text" className="form-control" placeholder="" />
                              </div>

                            </div>
                          </div>                            
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Format <span className="required-fill">*</span>
                              <p>What file sizes and formats do you need? Select all that apply.</p></label>
                            <div className="photos-frmat-wrap dims-frmat-wrap d-flex">

                              <div className="photos-frmat-box dims-frmat-box active">
                                <img src="images/jpg-icon.png" alt="images" />
                                <h3>JPG</h3>
                                <p>Standard format for most images/graphics</p>
                              </div>

                              <div className="photos-frmat-box dims-frmat-box">
                                <img src="images/png-icon.png" alt="Payment" />
                                <h3>PNG</h3>
                                <p>Images with transparent background</p>
                              </div>

                              <div className="photos-frmat-box dims-frmat-box">
                                <img src="images/pdf-icon.png" alt="Payment" />
                                <h3>PDF</h3>
                                <p>Most common for documents and print files</p>
                              </div>

                            </div>
                          </div>                            
                        </div>

                      </div>


                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Description <span className="required-fill">*</span></label>
                            <div className="single-input">
                              <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Give an overview for what you'd like your designer to create, then assign specific tasks."></textarea>
                            </div>
                          </div>                            
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Does your design need to have text in it?
                              <p>If yes, include text copy EXACTLY as you would like it to appear in your design.</p>
                            </label>
                            <div className="single-input">
                              <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="What is the exact copy you want on design?"></textarea>
                            </div>
                          </div>                            
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">Supporting Material
                              <p>Add any files that you'd like your designer to use for your design.</p>
                            </label>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="upload-files-container">
                                    <div className="drag-file-area">
                                      <span className="upload-icon"> <img src="images/file-add-outlined-icon.png" /> </span>
                                      <label className="label">
                                        <span className="browse-files"></span>
                                          <input type="file" className="default-file-input"/> <span> Drag and drop or </span><span className="browse-files-text">browse</span>
                                        <span>your file</span>
                                      </label>
                                    </div>

                                    <div className="attachment-wrap d-flex">

                                      <div className="card attachment-box">
                                        <img src="assets/images/close-icon.png" className="close" alt="" />
                                        <div className="attachment-file-frmat">
                                          <img src="images/pdf-icon.png" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                          <h5 className="card-title">Lorem 01.doc</h5>
                                          <p className="card-text file-size">97.47 KB</p>
                                        </div>
                                      </div>

                                      <div className="card attachment-box">
                                        <img src="images/close-icon.png" className="close" alt="" />
                                        <div className="attachment-file-frmat">
                                          <img src="images/pdf-icon.png" className="card-img-top" alt="" />
                                        </div>
                                        <div className="card-body">
                                          <h5 className="card-title">Lorem 01.doc</h5>
                                          <p className="card-text file-size">97.47 KB</p>
                                        </div>
                                      </div>
                                      
                                    </div>                           
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>                            
                        </div>
                      </div>


                      

                      


                      

                      <div className="text-center">
                        <input type="submit" className="btn btn-primary me-2" name="" value="Save & Proceed" />
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

export default ProjectGuidelinesPrototypeScreen13_2;
