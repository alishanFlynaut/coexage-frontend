import React from 'react';

const SelectProjectTypeBlogArticleStep1Screen19 = () => {
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
    <div class="container-fluid page-body-wrapper pt-70 project-type-page type-blog-article">
    
      {/* <!-- partial --> */}
      <div class="main-panel">
        <div class="header-title-wrap">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex page-title">
                    <div class="title">
                      <h1>Create New Request</h1>
                      <p>Get started with your new project...</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-wrapper text-center">
          <div class="container">
            <div class="get-started-frm-wrap">
              <div class="frm-step-wrap">
                <div class="step-wrap-box d-flex">
                  <div class="step-box active">
                    <div class="step-number-wrap">
                      <span class="step-number">1</span>
                    </div>                      
                    <span class="step-text">Add Brand / Company Profile</span>
                  </div>
                  <div class="step-box active">
                    <div class="step-number-wrap">
                      <span class="step-number">2</span>
                    </div>
                    <span class="step-text">Create New Campaign</span>
                  </div>
                </div>
                <div class="step-progress-wrap">
                    <div class="progress">
                      <div class="bar" style={{width:'100%'}}>
                        <p class="percent">100%</p>
                      </div>
                    </div>
                    <div class="complete-percentage">100% Complete</div>
                </div>
              </div>

              <div class="process-bar-area">
                
                <div class="middle-area">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="box active">
                        <div class="dot"></div>
                        <div class="text"><img src="images/select-project-type-org-icon.png" alt="Select Project Type" /> Select Project Type</div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="box">
                        <div class="dot"></div>
                        <div class="text"><img src="images/project-guidelines-icon.png" alt="Project Guidelines" /> Project Guidelines</div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="box">
                        <div class="dot"></div>
                        <div class="text"><img src="images/payment-icon.png" alt="Payment" /> Payment</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div class="project-type-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card active">
                      <div class="card-body d-flex">
                        <h5 class="card-title">Content Writing</h5>
                        <img src="images/content-writing-img.png" alt="content writing" />
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body d-flex">
                        <h5 class="card-title">Graphics Designs</h5>
                        <img src="images/graphics-designs-img.png" alt="graphics designs" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row project-type-tabs">
                  <div class="col-5">
                    {/* <!-- Tab navs --> */}
                    <div
                      class="nav nav-pills text-center project-tabs-navs"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        class="nav-link d-flex flex-column active"
                        id="BlogArticle-tab"
                        data-bs-toggle="pill"
                        href="#BlogArticle"
                        role="tab"
                        aria-controls="BlogArticle"
                        aria-selected="true"
                        ><img src="images/blog-article-icon.png" alt="Blog / Article" /> <span>Blog / Article</span></a
                      >
                      <a
                        class="nav-link d-flex flex-column mr-0"
                        id="Website-tab"
                        data-bs-toggle="pill"
                        href="#Website"
                        role="tab"
                        aria-controls="Website"
                        aria-selected="false"
                        ><img src="images/website-icon.png" alt="Website" /> <span>Website</span></a
                      >
                      <a
                        class="nav-link d-flex flex-column"
                        id="PressRelease-tab"
                        data-bs-toggle="pill"
                        href="#PressRelease"
                        role="tab"
                        aria-controls="PressRelease"
                        aria-selected="false"
                        ><img src="images/press-release-icon.png" alt="Press Release" /> <span>Press Release</span></a
                      >
                      <a
                        class="nav-link d-flex flex-column mr-0"
                        id="ProductDesc-tab"
                        data-bs-toggle="pill"
                        href="#ProductDesc"
                        role="tab"
                        aria-controls="ProductDesc"
                        aria-selected="false"
                        ><img src="images/product-description-icon.png" alt="Product Description" /> <span>Product Description</span></a
                      >
                      <a
                        class="nav-link d-flex flex-column mb-0"
                        id="EmailNewsletter-tab"
                        data-bs-toggle="pill"
                        href="#EmailNewsletter"
                        role="tab"
                        aria-controls="EmailNewsletter"
                        aria-selected="false"
                        ><img src="images/email-newsletter-icon.png" alt="Email Newsletter" /> <span>Email Newsletter</span></a
                      >
                      <a
                        class="nav-link d-flex flex-column mb-0 mr-0"
                        id="Whitepaperebook-tab"
                        data-bs-toggle="pill"
                        href="#Whitepaperebook"
                        role="tab"
                        aria-controls="Whitepaperebook"
                        aria-selected="false"
                        ><img src="images/whitepaper-ebook-icon.png" alt="Whitepaper / ebook" /> <span>Whitepaper / ebook </span></a
                      >
                    </div>
                    {/* <!-- Tab navs --> */}
                  </div>

                  <div class="col-7 project-tabs-content-wrap">
                    {/* <!-- Tab content --> */}
                    <div class="tab-content project-tabs-content" id="v-pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="BlogArticle"
                        role="tabpanel"
                        aria-labelledby="BlogArticle-tab"
                      >
                        <h5>Blog / Article</h5>
                        <p>A blog post is an informational piece of content which provides commentary on a given issue. Often written in a more informal tone, blog posts are a great complement to the content on your main site.</p>

                        <p>Blog posts can be used to promote greater engagement, understanding, or discussion. A blog post is an informational piece of content which provides commentary on a given issue</p>

                        <div class="price-card-info d-flex flex-wrap">
                          <div class="card">
                              <input type="radio" name="pricing" id="card1" defaultChecked />
                              <label for="card1">
                                  <h5>300 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>

                          <div class="card">
                              <input type="radio" name="pricing" id="card2" />
                              <label for="card2">
                                  <h5>500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card3" />
                              <label for="card3">
                                  <h5>750 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card4" />
                              <label for="card4">
                                  <h5>1000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card5" />
                              <label for="card5">
                                  <h5>1500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card6" />
                              <label for="card6">
                                  <h5>2000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card7" />
                              <label for="card7">
                                  <h5>2500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card8" />
                              <label for="card8">
                                  <h5>3000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                        </div>

                      </div>
                      <div
                        class="tab-pane fade"
                        id="Website"
                        role="tabpanel"
                        aria-labelledby="Website-tab"
                      >
                        <h5>Website</h5>
                        <p>A blog post is an informational piece of content which provides commentary on a given issue. Often written in a more informal tone, blog posts are a great complement to the content on your main site.</p>

                        <p>Blog posts can be used to promote greater engagement, understanding, or discussion. A blog post is an informational piece of content which provides commentary on a given issue</p>

                        <div class="price-card-info d-flex flex-wrap">
                          <div class="card">
                              <input type="radio" name="pricing" id="card11" defaultChecked />
                              <label for="card11">
                                  <h5>300 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>

                          <div class="card">
                              <input type="radio" name="pricing" id="card12" />
                              <label for="card12">
                                  <h5>500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card13" />
                              <label for="card13">
                                  <h5>750 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card14" />
                              <label for="card14">
                                  <h5>1000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card15" />
                              <label for="card15">
                                  <h5>1500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card16" />
                              <label for="card16">
                                  <h5>2000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card17" />
                              <label for="card17">
                                  <h5>2500 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                          <div class="card">
                              <input type="radio" name="pricing" id="card18" />
                              <label for="card18">
                                  <h5>3000 words</h5>
                                  <h2>$74.40</h2>
                              </label>
                          </div>
                        </div>

                      </div>
                      <div
                        class="tab-pane fade"
                        id="PressRelease"
                        role="tabpanel"
                        aria-labelledby="PressRelease-tab"
                      >
                        <h5>Press Release</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, illum.</p>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="ProductDesc"
                        role="tabpanel"
                        aria-labelledby="ProductDesc-tab"
                      >
                        <h5>Product Description</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="EmailNewsletter"
                        role="tabpanel"
                        aria-labelledby="EmailNewsletter-tab"
                      >
                        <h5>Email Newsletter</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="Whitepaperebook"
                        role="tabpanel"
                        aria-labelledby="Whitepaperebook-tab"
                      >
                        <h5>Whitepaper / ebook</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                      </div>
                    </div>
                   
                  </div>

                  <div class="text-center mt-5">
                    <button type="submit" class="btn btn-secondary me-2">Reset</button>
                    <input type="submit" class="btn btn-primary me-2" name="" value="Save & Proceed" />
                  </div>

                </div>

              </div>
             
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
    
  </div>
  );
}

export default SelectProjectTypeBlogArticleStep1Screen19;
