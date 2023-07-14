import React from 'react';

const SelectProjectTypeBlogArticleStep1 = () => {
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
      <div className="container-fluid page-body-wrapper pt-70 project-type-page type-blog-article">
      
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
                        <div className="box active">
                          <div className="dot"></div>
                          <div className="text"><img src="images/select-project-type-org-icon.png" alt="Select Project Type" /> Select Project Type</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="box">
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

                <div className="project-type-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card active">
                        <div className="card-body d-flex">
                          <h5 className="card-title">Content Writing</h5>
                          <img src="images/content-writing-img.png" alt="content writing" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body d-flex">
                          <h5 className="card-title">Graphics Designs</h5>
                          <img src="images/graphics-designs-img.png" alt="graphics designs" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row project-type-tabs">
                    <div className="col-5">
                      {/* <!-- Tab navs --> */}
                      <div
                        className="nav nav-pills text-center project-tabs-navs"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link d-flex flex-column active"
                          id="BlogArticle-tab"
                          data-bs-toggle="pill"
                          href="#BlogArticle"
                          role="tab"
                          aria-controls="BlogArticle"
                          aria-selected="true"
                          ><img src="images/blog-article-icon.png" alt="Blog / Article" /> <span>Blog / Article</span></a
                        >
                        <a
                          className="nav-link d-flex flex-column mr-0"
                          id="Website-tab"
                          data-bs-toggle="pill"
                          href="#Website"
                          role="tab"
                          aria-controls="Website"
                          aria-selected="false"
                          ><img src="images/website-icon.png" alt="Website" /> <span>Website</span></a
                        >
                        <a
                          className="nav-link d-flex flex-column"
                          id="PressRelease-tab"
                          data-bs-toggle="pill"
                          href="#PressRelease"
                          role="tab"
                          aria-controls="PressRelease"
                          aria-selected="false"
                          ><img src="images/press-release-icon.png" alt="Press Release" /> <span>Press Release</span></a
                        >
                        <a
                          className="nav-link d-flex flex-column mr-0"
                          id="ProductDesc-tab"
                          data-bs-toggle="pill"
                          href="#ProductDesc"
                          role="tab"
                          aria-controls="ProductDesc"
                          aria-selected="false"
                          ><img src="images/product-description-icon.png" alt="Product Description" /> <span>Product Description</span></a
                        >
                        <a
                          className="nav-link d-flex flex-column mb-0"
                          id="EmailNewsletter-tab"
                          data-bs-toggle="pill"
                          href="#EmailNewsletter"
                          role="tab"
                          aria-controls="EmailNewsletter"
                          aria-selected="false"
                          ><img src="images/email-newsletter-icon.png" alt="Email Newsletter" /> <span>Email Newsletter</span></a
                        >
                        <a
                          className="nav-link d-flex flex-column mb-0 mr-0"
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

                    <div className="col-7 project-tabs-content-wrap">
                      {/* <!-- Tab content --> */}
                      <div className="tab-content project-tabs-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="BlogArticle"
                          role="tabpanel"
                          aria-labelledby="BlogArticle-tab"
                        >
                          <h5>Blog / Article</h5>
                          <p>A blog post is an informational piece of content which provides commentary on a given issue. Often written in a more informal tone, blog posts are a great complement to the content on your main site.</p>

                          <p>Blog posts can be used to promote greater engagement, understanding, or discussion. A blog post is an informational piece of content which provides commentary on a given issue</p>

                          <div className="price-card-info d-flex flex-wrap">
                            <div className="card">
                                <input type="radio" name="pricing" id="card1" defaultChecked />
                                <label for="card1">
                                    <h5>300 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>

                            <div className="card">
                                <input type="radio" name="pricing" id="card2" />
                                <label for="card2">
                                    <h5>500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card3" />
                                <label for="card3">
                                    <h5>750 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card4" />
                                <label for="card4">
                                    <h5>1000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card5" />
                                <label for="card5">
                                    <h5>1500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card6" />
                                <label for="card6">
                                    <h5>2000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card7" />
                                <label for="card7">
                                    <h5>2500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card8" />
                                <label for="card8">
                                    <h5>3000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                          </div>

                        </div>
                        <div
                          className="tab-pane fade"
                          id="Website"
                          role="tabpanel"
                          aria-labelledby="Website-tab"
                        >
                          <h5>Website</h5>
                          <p>A blog post is an informational piece of content which provides commentary on a given issue. Often written in a more informal tone, blog posts are a great complement to the content on your main site.</p>

                          <p>Blog posts can be used to promote greater engagement, understanding, or discussion. A blog post is an informational piece of content which provides commentary on a given issue</p>

                          <div className="price-card-info d-flex flex-wrap">
                            <div className="card">
                                <input type="radio" name="pricing" id="card11" defaultChecked />
                                <label for="card11">
                                    <h5>300 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>

                            <div className="card">
                                <input type="radio" name="pricing" id="card12" />
                                <label for="card12">
                                    <h5>500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card13" />
                                <label for="card13">
                                    <h5>750 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card14" />
                                <label for="card14">
                                    <h5>1000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card15" />
                                <label for="card15">
                                    <h5>1500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card16" />
                                <label for="card16">
                                    <h5>2000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card17" />
                                <label for="card17">
                                    <h5>2500 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                            <div className="card">
                                <input type="radio" name="pricing" id="card18" />
                                <label for="card18">
                                    <h5>3000 words</h5>
                                    <h2>$74.40</h2>
                                </label>
                            </div>
                          </div>

                        </div>
                        <div
                          className="tab-pane fade"
                          id="PressRelease"
                          role="tabpanel"
                          aria-labelledby="PressRelease-tab"
                        >
                          <h5>Press Release</h5>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, illum.</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="ProductDesc"
                          role="tabpanel"
                          aria-labelledby="ProductDesc-tab"
                        >
                          <h5>Product Description</h5>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="EmailNewsletter"
                          role="tabpanel"
                          aria-labelledby="EmailNewsletter-tab"
                        >
                          <h5>Email Newsletter</h5>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Whitepaperebook"
                          role="tabpanel"
                          aria-labelledby="Whitepaperebook-tab"
                        >
                          <h5>Whitepaper / ebook</h5>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Sequi quasi dicta qui porro eligendi nam doloribus vel minus ullam quam!</p>
                        </div>
                      </div>
                      {/* <!-- Tab content --> */}
                    </div>

                    <div className="text-center mt-5">
                      <button type="submit" className="btn btn-secondary me-2">Reset</button>
                      <input type="submit" className="btn btn-primary me-2" name="" value="Save & Proceed" />
                    </div>

                  </div>

                </div>
              </div>
            

            


            </div>
          </div>
         
        </div>
       
      </div>
     
    </div>
  )
}

export default SelectProjectTypeBlogArticleStep1;
