import React from 'react';

const My_Campaigns = () => {
  return (
    <>
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

              <li className="nav-item active">
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
      <div className="container-fluid page-body-wrapper pt-70 my-campaigns-page">
      
        {/* <!-- partial --> */}
        <div className="main-panel">
          <div className="header-title-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex page-title">
                    <div className="title">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Flynaut Brand</a></li>
                        <li className="breadcrumb-item active">Campaigns</li>
                      </ol>
                    </div>
                    <div className="title-right">
                      <a href="#" className="btn arc-camp-btn">Archived Campaigns</a>
                      <a href="#" className="btn crt-camp-btn" data-bs-toggle="modal" data-bs-target="#AddNewCampaignModal">Create Campaign</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search-filter-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form className="search-filter-frm">
                    <div className="input-group">
                      <input 
                      value={''}
                      onChange={''}
                      type="text"
                       className="" 
                       placeholder="Search campaigns" />
                      <div className="input-group-append">
                        <button className="btn" type="button">
                          <img src="images/bx_search-alt-2.png" className="search-icon" alt="search" />
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="filter-frm-wrap">
                    <a href="#" className="filter-popup" data-bs-toggle="modal" data-bs-target="#FilterModal"><img src="images/mi_filter.png" className="filter-icon" alt="filter" />Search By Filter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--.Search By Filter--> */}

          <div className="content-wrapper text-center">
            <div className="container">
              <div className="compaings-tbl-wrap">
                <div className="table-responsive">
                  <table className="table compaings-tbl">
                        <thead>
                          <tr>
                            <th>Campaign Name</th>
                            <th>Campaign Owner</th>
                            <th>Comments</th>
                            <th>Created On</th>
                            <th>Campaign Budget</th>
                            <th>Actions</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="campaign-after-creation-assets.html">Q4 Campaign</a></td>
                            <td>John Doe</td>
                            <td>0</td>
                            <td>Jul 6, 2022</td>
                            <td>$100.00</td>
                            <td className="actions-btn">
                              <span className="add-assets">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddAssetsModal">
                                  <img src="images/carbon_add-alt.png" />
                                  <p>Add</p>
                                </a>
                              </span>
                              <span className="add-archive">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddArchiveModal">
                                  <img src="images/archive-icon.png" />
                                  <p>Archive</p>
                                </a>
                                </span>
                              <span className="delete-assets">
                                <a href="">
                                  <img src="images/design_trash-icon.png" />
                                  <p>Delete</p>
                                </a>
                              </span>
                            </td>
                            <td>Jul 6, 2022</td>
                            <td>Jul 7, 2022</td>
                          </tr>

                          <tr>
                            <td><a href="">Diwali Campaign</a></td>
                            <td>John Doe</td>
                            <td>0</td>
                            <td>Jul 6, 2022</td>
                            <td>$100.00</td>
                            <td className="actions-btn">
                              <span className="add-assets">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddAssetsModal">
                                  <img src="images/carbon_add-alt.png" />
                                  <p>Add</p>
                                </a>
                              </span>
                              <span className="add-archive">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddArchiveModal">
                                  <img src="images/archive-icon.png" />
                                  <p>Archive</p>
                                </a>
                                </span>
                              <span className="delete-assets">
                                <a href="">
                                  <img src="images/design_trash-icon.png" />
                                  <p>Delete</p>
                                </a>
                              </span>
                            </td>
                            <td>Jul 6, 2022</td>
                            <td>Jul 7, 2022</td>
                          </tr>

                          <tr>
                            <td><a href="">Christmas Campaign</a></td>
                            <td>John Doe</td>
                            <td>0</td>
                            <td>Jul 6, 2022</td>
                            <td>$100.00</td>
                            <td className="actions-btn">
                              <span className="add-assets">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddAssetsModal">
                                  <img src="images/carbon_add-alt.png" />
                                  <p>Add</p>
                                </a>
                              </span>
                              <span className="add-archive">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddArchiveModal">
                                  <img src="images/archive-icon.png" />
                                  <p>Archive</p>
                                </a>
                                </span>
                              <span className="delete-assets">
                                <a href="">
                                  <img src="images/design_trash-icon.png" />
                                  <p>Delete</p>
                                </a>
                              </span>
                            </td>
                            <td>Jul 6, 2022</td>
                            <td>Jul 7, 2022</td>
                          </tr>

                          <tr>
                            <td><a href="">ABC Campaign</a></td>
                            <td>John Doe</td>
                            <td>0</td>
                            <td>Jul 6, 2022</td>
                            <td>$100.00</td>
                            <td className="actions-btn">
                              <span className="add-assets">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddAssetsModal">
                                  <img src="images/carbon_add-alt.png" />
                                  <p>Add</p>
                                </a>
                              </span>
                              <span className="add-archive">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddArchiveModal">
                                  <img src="images/archive-icon.png" />
                                  <p>Archive</p>
                                </a>
                                </span>
                              <span className="delete-assets">
                                <a href="">
                                  <img src="images/design_trash-icon.png" />
                                  <p>Delete</p>
                                </a>
                              </span>
                            </td>
                            <td>Jul 6, 2022</td>
                            <td>Jul 7, 2022</td>
                          </tr>

                          <tr>
                            <td><a href="">Marketing Campaign</a></td>
                            <td>John Doe</td>
                            <td>0</td>
                            <td>Jul 6, 2022</td>
                            <td>$100.00</td>
                            <td className="actions-btn">
                              <span className="add-assets">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddAssetsModal">
                                  <img src="images/carbon_add-alt.png" />
                                  <p>Add</p>
                                </a>
                              </span>
                              <span className="add-archive">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#AddArchiveModal">
                                  <img src="images/archive-icon.png" />
                                  <p>Archive</p>
                                </a>
                                </span>
                              <span className="delete-assets">
                                <a href="">
                                  <img src="images/design_trash-icon.png" />
                                  <p>Delete</p>
                                </a>
                              </span>
                            </td>
                            <td>Jul 6, 2022</td>
                            <td>Jul 7, 2022</td>
                          </tr>

                        </tbody>
                      </table>
                </div>                
              </div>
              {/* <!--compaings-tbl--> */}
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </div>
      {/* <!-- page-body-wrapper ends --> */}
    </div>
    {/* <!-- container-scroller --> */}

    {/* <!-- Modal --> */}
    <div className="modal right fade filterModal" id="FilterModal" tabindex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title"><img src="images/white-mi_filter.png" className="filter-icon" alt="filter" /> Search By Filter</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h2>Options</h2>
          <form className="ApplyFilter-frm">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label for="budgetRange" className="form-label">Budget</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="range" 
                    className="form-range " 
                    id="budgetRange" />
                  </div>
                  <div className="input-value">
                    <span>$100.00</span>
                    <span>$1000.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label for="exampleInputCampaignName">Campaign Name</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text"
                     className="form-control" 
                     id="exampleInputCampaignName" 
                     placeholder="Enter Campaign Name" />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label for="exampleInputCampaignOwner">Campaign Owner</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text" 
                    className="form-control" 
                    id="exampleInputCampaignOwner" 
                    placeholder="Enter Campaign Owner" />
                  </div>
                </div>
              </div>


              <div className="col-md-12">
                <div className="form-group">
                  <label for="exampleInputCreatedOn">Created On</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="date" 
                    className="form-control" 
                    id="exampleInputCreatedOn" 
                    placeholder="Enter Campaign Owner" />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label for="exampleInputCampaignStart">Campaign Start Date</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="date" 
                    className="form-control" 
                    id="exampleInputCampaignStart" 
                    placeholder="Enter Campaign Owner" />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label for="exampleInputCreatedEnd">Created End Date</label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="date" 
                    className="form-control" 
                    id="exampleInputCreatedEnd" 
                    placeholder="Enter Campaign Owner" />
                  </div>
                </div>
              </div>


            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Apply Filter</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End FilterModal Modal--> */}

  <div className="modal fade AddAssetsModal" id="AddAssetsModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Assets</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="d-flex align-items-start tabs-btn">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-blog-posts-tab" data-bs-toggle="pill" data-bs-target="#v-blog-posts" type="button" role="tab" aria-controls="v-blog-posts" aria-selected="true">Blog Posts</button>
              <button className="nav-link" id="v-email-tab" data-bs-toggle="pill" data-bs-target="#v-email" type="button" role="tab" aria-controls="v-email" aria-selected="false">Email</button>
              <button className="nav-link" id="v-LandingPages-tab" data-bs-toggle="pill" data-bs-target="#v-LandingPages" type="button" role="tab" aria-controls="v-LandingPages" aria-selected="false">Landing Pages</button>
              <button className="nav-link" id="v-SocialPosts-tab" data-bs-toggle="pill" data-bs-target="#v-SocialPosts" type="button" role="tab" aria-controls="v-SocialPosts" aria-selected="false">Settings</button>

              <button className="nav-link" id="v-WebsitePages-tab" data-bs-toggle="pill" data-bs-target="#v-WebsitePages" type="button" role="tab" aria-controls="v-WebsitePages" aria-selected="true">Website Pages</button>
            </div>
            <div className="tab-content assets-tab-content" id="v-pills-tabContent">
              <div className="input-group">
                <input
                value={''}
                onChange={''}
                 type="text" 
                 className="search-input" 
                 placeholder="Search"/>
                <div className="input-group-append">
                  <button className="btn" type="button">
                    <img src="images/bx_search-alt-2.png" className="search-icon" alt="search"/>
                  </button>
                </div>
              </div>
              <div className="tab-pane fade show tab-panel-empty active" id="v-blog-posts" role="tabpanel" aria-labelledby="v-blog-posts-tab">
                <p>You haven't created any blog posts</p>
                <button type="button" className="btn btn-primary CreateBlog-btn"> Create Blog <img src="images/eva_external-link-fill.png" className="" alt="Create Blog"/></button>
              </div>
              <div className="tab-pane fade" id="v-email" role="tabpanel" aria-labelledby="v-email-tab">
                <h3>Email</h3>
                <div className="form-check form-check-flat form-check-primary mt-3">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" checked="checked"/> Maybach Case Study
                  </label>
                </div>
                <div className="form-check form-check-flat form-check-primary mt-3">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> Take your business from local to global with a custom mobile app
                  </label>
                </div>
                <div className="form-check form-check-flat form-check-primary mt-3">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> 5 digital trend setters
                  </label>
                </div>
                <a href="#" className="create-email-btn">Create Email Description</a>
              </div>
              <div className="tab-pane fade tab-panel-empty" id="v-LandingPages" role="tabpanel" aria-labelledby="v-LandingPages-tab">...</div>
              <div className="tab-pane fade tab-panel-empty" id="v-SocialPosts" role="tabpanel" aria-labelledby="v-SocialPosts-tab">...</div>

              <div className="tab-pane fade tab-panel-empty" id="v-WebsitePages" role="tabpanel" aria-labelledby="v-WebsitePages-tab">...</div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary save-btn">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End AddAssetsModal Modal--> */}


  <div className="modal fade AddArchiveModal" id="AddArchiveModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Archieve Campaign</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h2>Your Campaign has been archieved.</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keep</button>
          <button type="button" className="btn btn-primary">Undo  Action</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End AddArchiveModal Modal--> */}


  <div className="modal fade AddNewCampaign" id="AddNewCampaignModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create New Campaign</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form method="post" action="#" className="AddNewCampaign-frm">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaign" className="col-form-label">Your Campaign Name <span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text" 
                    className="form-control" 
                    id="exampleInputYourCampaign" 
                    placeholder="Enter Campaign Name" 
                    required />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaignOwner" className="col-form-label">Campaign Owner<span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text" 
                    className="form-control" 
                    id="exampleInputYourCampaignOwner"
                     placeholder="Enter Campaign Owner" 
                     required />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputCampaignStartDate" className="col-form-label">Start Date of Campaign <span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="date" 
                    className="form-control"
                     id="exampleInputCampaignStartDate" 
                     placeholder="Enter Campaign Name" 
                     required />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputCampaignEndDate" className="col-form-label">End Date of Campaign<span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="date" 
                    className="form-control" 
                    id="exampleInputCampaignEndDate"
                     placeholder="Enter Campaign Owner" 
                     required />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaign" className="col-form-label">Goal Sales <span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text" 
                    className="form-control" 
                    id="exampleInputYourCampaign" 
                    placeholder="Enter Campaign Name" 
                    required />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaignOwner" className="col-form-label">Target Audience<span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    value={''}
                    onChange={''}
                    type="text" 
                    className="form-control"
                     id="exampleInputYourCampaignOwner" 
                     placeholder="Enter Target Audience"
                      required />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaign" className="col-form-label">Add Campaign Budget <span className="required-fill">*</span></label>
                  <div className="single-input">
                    <input 
                    type="text" 
                    value={''}
                    onChange={''}
                    className="form-control" 
                    id="exampleInputYourCampaign" 
                    placeholder="Enter Campaign Budget"
                    required />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputYourCampaignOwner" className="col-form-label">Notes (optional)</label>
                  <div className="single-input">
                    <input 
                    type="text" 
                    value={''}
                    onChange={''}
                    className="form-control" 
                    id="exampleInputYourCampaignOwner" 
                    placeholder="Enter Notes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-primary" value="Create"/>
          </div>
        </form>

      </div>
    </div>
  </div>
  {/* <!-- End AddNewCampaignModal Modal--> */}

    </>
  );
}

export default My_Campaigns;
