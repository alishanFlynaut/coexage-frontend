import React from 'react';

const PaymentDetails = () => {
  return (
    <div class="container-scroller">
    {/* <!-- partial:partials/_navbar.html --> */}
    <div class="header-nav-wrap fixed-top d-flex flex-row">
      <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo" href="#"><img src="images/logo-white.png" alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <nav class="header-nav sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="menu-title">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="menu-title">Workspace</span>
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Request
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="select-project-type-blog-article-step-1.html">Content Writing</a></li>
                <li><a class="dropdown-item" href="select-project-type-website-step-1.html">Graphic Design</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="menu-title">My Campaigns</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="menu-title">My Requests</span>
              </a>
            </li>
          </ul>
        </nav>

          <ul class="navbar-nav navbar-nav-right">
            {/* <!-- Notifications --> */}
            <li class="nav-item dropdown">
              <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <img src="images/akar-icons_bell.png" alt="image" />
                <span class="count-symbol bg-orange">2</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 class="p-3 mb-0">Notifications</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p class="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Settings</h6>
                    <p class="text-gray ellipsis mb-0"> Update dashboard </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 class="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                    <p class="text-gray ellipsis mb-0"> New admin wow! </p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <h6 class="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
            {/* <!-- Notifications --> */}

            <li class="nav-item nav-logout d-none d-lg-block">
              <a class="nav-link" href="#">
                <img src="images/ant-design_search-outlined.png" alt="image" />                
              </a>
            </li>

            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="nav-profile-img">
                  <img src="images/faces/face1.jpg" alt="image" />
                  {/* <!-- <span class="availability-status online"></span> --> */}
                </div>
                <div class="nav-profile-text">
                  <p class="mb-1 text-black">Jane Doe</p>
                </div>
              </a>
              <div class="dropdown-menu navbar-dropdown profile-wrap" aria-labelledby="profileDropdown">
                <a href="#" class="dropdown-item nav-profile-wrap">
                  <div class="nav-profile-image">
                    <img src="images/faces/face1.jpg" alt="profile" />
                    <span class="login-status online"></span>
                    {/* <!--change to offline or busy as needed--> */}
                  </div>
                  <div class="nav-profile-text d-flex flex-column">
                    <span class="font-weight-bold">Jane Doe</span>
                    <span class="text-secondary text-small user-email">jane@gmail.com</span>
                  </div>
                </a>

                <div class="dropdown-divider mb1"></div>

                <a class="dropdown-item" href="#">Profile & Preferences </a>
                <a class="dropdown-item" href="#">Accounts & Billing </a>
                <a class="dropdown-item" href="#">Pricing & Features </a>
                <a class="dropdown-item" href="#">Privacy Policy </a>

                <div class="dropdown-divider mb1"></div>
                <a class="dropdown-item item-logout" href="#"><img src="images/ri_logout-circle-r-line.png" alt="Logout" /> Logout</a>

                  
              </div>
            </li>
            
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </div>
    {/* <!-- partial --> */}
    <div class="container-fluid page-body-wrapper pt-70 payment-details-page">
    
      {/* <!-- partial --> */}
      <div class="main-panel">
        <div class="header-title-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex page-title">
                    <div class="title">
                      <h1>Payment in process...</h1>
                      <p>Please Enter Valid Card Details</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-wrapper text-center">
          <div class="container h-100 container-ord-summary">
            
            <div class="row h-100">

              <div class="col-md-5 ord-summary-row">
                <div class="ord-summary-wrap">
                  <div class="ord-summary-card">
                    <div class="ord-card-title">
                      <h2>Order <span>Summary</span></h2>
                    </div>
                    <div class="ord-summary-body">
                      <img src="images/blog-article-icon.png" alt="" />

                      <div class="ord-summary-item">
                        <div class="ord-summary-info">
                          <span class="label-info">Project Type</span>
                          <h5 class="title-info">Blog / Article</h5>
                        </div>
                      </div>

                      <div class="ord-summary-item">
                        <div class="ord-summary-info pri-info">
                          <span class="label-info">Pricing</span>
                          <h5 class="title-info">$74.40 <span class="subs-limit">/ month</span></h5>
                        </div>
                      </div>

                      <div class="ord-summary-item">
                        <div class="ord-summary-info">
                          <span class="label-info">Delivery</span>
                          <h5 class="title-info">7 -10 Business Days</h5>
                        </div>
                      </div>

                      <div class="ord-summary-item">
                        <div class="ord-summary-info">
                          <span class="label-info">Word Limit</span>
                          <h5 class="title-info">100</h5>
                        </div>
                      </div>

                    </div>
                    <div class="ord-summary-footer">
                      <a href="#">Subscribe to packages <img src="images/title-edit-icon.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 offset-md-1 pay-details-row">
                <div class="pay-details-wrap">
                  <div class="pay-details-card">
                    <div class="pay-card-title">
                      <h2>Enter Payment Details</h2>
                    </div>
                    <div class="pay-card-body">
                      <form>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="col-form-label">Enter Card Number</label>
                              <div class="single-input">
                                <img src="images/credit-card-outlined.png" alt="" />
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Your Card Number" 
                                value={''}
                                onChange={''}
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label class="col-form-label">Name On Card</label>
                              <div class="single-input">
                                <img src="images/user-circle.png" alt="" />
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Your Cardholder Name" 
                                value={''}
                                onChange={''}
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group">
                              <label class="col-form-label">Valid Through</label>
                              <div class="single-input">
                                <img src="images/calendar-outlined.png" alt="" />
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="MM/YY" 
                                value={''}
                                onChange={''}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="form-group">
                              <label class="col-form-label">CVV</label>
                              <div class="single-input cvv-input">
                                <img src="images/question-fill-icon.png" alt="" />
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Enter CVV"
                                value={''}
                                onChange={''}
                                 />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="text-center">
                          <input 
                          type="submit" 
                          class="btn btn-primary me-2" 
                          name="" 
                          value={"Pay $74.40"}
                          onChange={''} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

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

export default PaymentDetails;
