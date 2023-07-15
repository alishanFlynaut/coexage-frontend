import React from 'react';

const RequestEbook = () => {
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
                <li><a class="dropdown-item" href="#">Content Writing</a></li>
                <li><a class="dropdown-item" href="#">Graphic Design</a></li>
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
    <div class="container-fluid page-body-wrapper pt-70 request-ebook-page requests-page-wrap">
    
      {/* <!-- partial --> */}
      <div class="main-panel">
        <div class="header-title-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex page-title">
                  <div class="title">
                      <h1>Whitepaper / Ebook</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header-title-after-div"></div>
        </div>


        <div class="content-wrapper requests-content-wrap">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="left-img">
                  <div class="bg-img"></div>
                  <img src="images/whitepaper-ebook-img.png" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-content">
                  <h2>Whitepaper / Ebook</h2>
                  <p>Press Release is an informational piece of content which provides commentary on a given issue. Often written in a more informal tone, blog posts are a great complement to the content on your main site.</p>

                  <p>Press Release posts can be used to promote greater engagement, understanding, or discussion. A blog post is an informational piece of content which provides commentary on a given issue</p>

                  <div class="text-left mt-5">
                    
                    <a href="#" class="btn btn-primary mb-3 me-3">Create New Whitepaper Ebook</a>
                    <a href="#" class="btn btn-secondary mb-3">Subscribe to our pacakges</a>
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

export default RequestEbook;
