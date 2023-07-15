import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="container-scroller">
                <div className="header-nav-wrap fixed-top d-flex flex-row">
                    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                            <a className="navbar-brand brand-logo" href="#"><img src="images/logo-white.png" alt="logo" /></a>
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-stretch">
                            <nav className="header-nav sidebar-offcanvas" id="sidebar">
                                <ul className="nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">
                                            <span className="menu-title">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="workspace.html">
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
                                        <a className="nav-link" href="my-campaigns.html">
                                            <span className="menu-title">My Campaigns</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="campaign-after-creation-assets.html">
                                            <span className="menu-title">My Requests</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <ul className="navbar-nav navbar-nav-right">

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


                                <li className="nav-item nav-logout d-none d-lg-block">
                                    <a className="nav-link" href="#">
                                        <img src="images/ant-design_search-outlined.png" alt="image" />
                                    </a>
                                </li>

                                <li className="nav-item nav-profile dropdown">
                                    <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="nav-profile-img">
                                            <img src="images/faces/face1.jpg" alt="image" />
                                            {/* <span className="availability-status online"></span>  */}
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

                <div className="container-fluid page-body-wrapper pt-70 dashboard-page">


                    <div className="main-panel">
                        <div className="header-title-wrap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex page-title">
                                            <div className="project-type-wrap">
                                                <label className="">Select Project Type</label>
                                                <select className="">
                                                    <option>Content Writing</option>
                                                    <option>Content Writing 1</option>
                                                    <option>Content Writing 2</option>
                                                    <option>Content Writing 3</option>
                                                </select>
                                            </div>


                                            <a className="request-toggle btn request-btn" id="requestDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="images/request-icon.png" /> Request Content
                                            </a>

                                            <div className="dropdown-menu request-dropdown" aria-labelledby="requestDropdown">
                                                <a className="dropdown-item" href="#">Blog / Article</a>
                                                <a className="dropdown-item" href="#">Website</a>
                                                <a className="dropdown-item" href="#">Press Release</a>
                                                <a className="dropdown-item" href="#">Product Description</a>
                                                <a className="dropdown-item" href="#">Email Description</a>
                                                <a className="dropdown-item" href="#">Whitepaper / Ebook</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="hm-info-box-wrap">
                                            <div className="row">
                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-sangria card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">BLOGS / ARTICLES</h4>
                                                            <h2 className="info-box-count"><img src="images/checklist.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of blog / article.</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-bittersweet card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">WEBSITE</h4>
                                                            <h2 className="info-box-count"><img src="images/monitor-icon.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of website.</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-OrangePeel card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">PRESS RELEASE</h4>
                                                            <h2 className="info-box-count"><img src="images/book-icon.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of press release.</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-BondiBlue card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">PRODUCT DESCRIPTION</h4>
                                                            <h2 className="info-box-count"><img src="images/pencil-icon.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of product description.</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-Niagara card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">EMAIL NEWSLETTER</h4>
                                                            <h2 className="info-box-count"><img src="images/mail-icon.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of email newsletter.</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 stretch-card grid-margin">
                                                    <div className="card info-box-bg bg-Lima card-img-holder text-white">
                                                        <div className="card-body">
                                                            <h4 className="font-weight-normal info-box-title">WHITEPAPER / EBOOK</h4>
                                                            <h2 className="info-box-count"><img src="images/tablet-icon.png" alt="circle-image" className="info-box-img" /> 10</h2>
                                                            <h6 className="card-text info-box-text">Click here to view detailed information of whitepaper / ebook.</h6>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="all-projects-wrap">
                                            <h2>My Requests - All Projects</h2>
                                            <a href="#" className="view-pro">View All</a>

                                            <div className="table-responsive">
                                                <table className="table pro-lists-tbl">
                                                    <thead>
                                                        <tr>
                                                            <th>Req ID </th>
                                                            <th>Campaign</th>
                                                            <th>Title</th>
                                                            <th>Status</th>
                                                            <th>Assigned</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#00178</td>
                                                            <td>Demo1 Campaign</td>
                                                            <td className="edit"><a href="#">Blog - (100 words) <img src="/images/title-edit-icon.png" /></a></td>
                                                            <td className="inprocess"><img src="images/inprocess-icon.png" /> Inprocess</td>
                                                            <td>James Warner</td>
                                                        </tr>
                                                        <tr>
                                                            <td>#00179</td>
                                                            <td>Demo2 Campaign</td>
                                                            <td className="edit"><a href="#">Blog - (100 words) <img src="/images/title-edit-icon.png" /></a></td>
                                                            <td className="completed"><img src="images/completed-icon.png" /> Completed</td>
                                                            <td>Cameron D</td>
                                                        </tr>
                                                        <tr>
                                                            <td>#00180</td>
                                                            <td>Demo2 Campaign</td>
                                                            <td className="edit"><a href="#">Blog - (100 words) <img src="/images/title-edit-icon.png" /></a></td>
                                                            <td className="inprocess"><img src="images/inprocess-icon.png" /> Inprocess</td>
                                                            <td>James Warner</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="dashborad-sidebar">
                                            <div className="sidebar-tabs">
                                                <nav>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button className="nav-link active" id="ToDoAction-tab" data-bs-toggle="tab" data-bs-target="#ToDoAction" type="button" role="tab" aria-controls="ToDoAction" aria-selected="true">To Do / Action</button>
                                                        <button className="nav-link" id="Timeline-tab" data-bs-toggle="tab" data-bs-target="#Timeline" type="button" role="tab" aria-controls="Timeline" aria-selected="false">Timeline</button>
                                                    </div>
                                                </nav>
                                                <div className="tab-content" id="nav-tabContent">
                                                    <div className="tab-pane fade show active" id="ToDoAction" role="tabpanel" aria-labelledby="ToDoAction-tab" tabindex="0">
                                                        <ul className="list">
                                                            <li>Content Assigned to James Doe</li>
                                                            <li>Title Assigned to the content </li>
                                                            <li>Content Assigned to James Doe</li>
                                                            <li>Title Assigned to the content </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane fade" id="Timeline" role="tabpanel" aria-labelledby="Timeline-tab" tabindex="0">
                                                        <ul className="list">
                                                            <li>Content Assigned to James Doe</li>
                                                            <li>Title Assigned to the content </li>
                                                            <li>Content Assigned to James Doe</li>
                                                            <li>Title Assigned to the content </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="our-packages-wrap">
                                                <div className="packages-content">
                                                    <div className="packages-text">
                                                        <img src="/images/rocket-icon.png" />
                                                        <h2>Our Packages</h2>
                                                        <p>View our exciting range of packages</p>
                                                        <a href="#">View Our Packages</a>
                                                    </div>
                                                </div>
                                                <img src="images/rocket1.png" className="add-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;