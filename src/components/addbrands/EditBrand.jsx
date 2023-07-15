import React from "react";

export default function EditBrand() {
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
            <div className="container-fluid page-body-wrapper pt-70 getting-started-page">

                {/* <!-- partial --> */}
                <div className="main-panel">
                    <div className="header-title-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex page-title">
                                        <div className="title">
                                            <h1>Edit Your Brand</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur. Tortor id tempus massa a nibh platea sed</p>
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
                                        <div className="step-box">
                                            <div className="step-number-wrap">
                                                <span className="step-number">2</span>
                                            </div>
                                            <span className="step-text">Create New Campaign</span>
                                        </div>
                                    </div>
                                    <div className="step-progress-wrap">
                                        <div className="progress">
                                            <div className="bar" style={{width:"50%"}}>
                                                <p className="percent">50%</p>
                                            </div>
                                        </div>
                                        <div className="complete-percentage">50% Complete</div>
                                    </div>
                                </div>

                                <div className="get-started-frm-row">
                                    <form className="get-started-frm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="col-form-label">What is your company name? <span className="required-fill">*</span></label>
                                                    <div className="single-input">
                                                        <input type="text" className="form-control" placeholder="Please enter your company name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="col-form-label">What is your company name? <span className="required-fill">*</span></label>
                                                    <div className="single-input">
                                                        <select id="exampleInputShowing" className="form-select form-select-lg">
                                                            <option selected="">Please Choose</option>
                                                            <option defaultValue="IT Company / Software Company">IT Company / Software Company</option>
                                                            <option defaultValue="Banking Finance & Insurance">Banking Finance & Insurance</option>
                                                            <option defaultValue="Corporate">Corporate</option>
                                                            <option defaultValue="Entertainment / Art / Design">Entertainment / Art / Design</option>
                                                            <option defaultValue="Health & Wellness">Health & Wellness</option>
                                                            <option defaultValue="Other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Upload Brand Logo <span className="required-fill">*</span></label>
                                                    <div className="upload-files-container">
                                                        <div className="drag-file-area">
                                                            <span className="upload-icon"> <img src="images/upload-outlined-icon.png" /> </span>
                                                            <label className="label">
                                                                <span className="browse-files" />
                                                                <input type="file" className="default-file-input" /> <span> Drag and drop or </span><span className="browse-files-text">browse</span>
                                                                <span>your file</span>
                                                            </label>
                                                            <h3 className="dynamic-message">*Maximum file size 3 MB</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <label className="col-form-label">Describe your brand. <span className="required-fill">*</span></label>
                                                    <div className="single-input">
                                                        <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Write about your company. The products & services you offer and what are you known for?"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="col-form-label">Brand Keywords</label>
                                                    <div className="single-input">
                                                        <textarea className="form-control" id="exampleTextarea1" rows="6" placeholder="Write about your company. The products & services you offer and what are you known for?"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="col-form-label">Social media profiles (e.g. Facebook, LinkedIn)</label>
                                                    <div className="single-input">
                                                        <input type="text" className="form-control" placeholder="https://facebook.com/your-company" />
                                                    </div>
                                                    <div className="add-filled-btn">
                                                        <a href="#">Add More Links <img src="images/add-filled.png" /></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="col-form-label">Competitors Links</label>
                                                    <div className="single-input">
                                                        <input type="text" className="form-control" placeholder="https://competitor-website" />
                                                    </div>
                                                    <div className="add-filled-btn">
                                                        <a href="#">Add More Links <img src="images/add-filled.png" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="col-form-label">Target Audience <span className="required-fill">*</span></label>
                                                    <div className="single-input">
                                                        <textarea className="form-control" id="exampleTextarea1" rows="8" placeholder="You could include: age range, gender, interests, education level, race/ethnicity, income level, geographical location, marital/familial status, or career status."></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="frm-title-label mt-4 mb-4">Brand Tone</h3>
                                                <div className="form-group">
                                                    <label className="col-form-label">1. Should your articles sound more casual or more professional?</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault10">
                                                                        Very Casual
                                                                    </label>
                                                                    <h3>Example text for Casual:</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                        Very Professional
                                                                    </label>
                                                                    <h3>Example text for Professional:</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="col-form-label">2. Should your articles be written for a general audience (using layman’s terms) or written for a technical audience (using technical jargon)?</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefault2" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                        General Audience
                                                                    </label>
                                                                    <h3>Example text for General Audience:</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefault3" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                        Technical Audience
                                                                    </label>
                                                                    <h3>Example text for Technical Audience:</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare ultricies nisi quis turpis.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="frm-title-label mt-4 mb-4">Blog Article Structure</h3>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault300" id="flexRadioDefault40" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault40">
                                                                        SEO -Friendly Article Structure
                                                                    </label>
                                                                    <img src="images/analytics_chart_graph_report_icon.png" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="single-input">
                                                                <div className="form-check radio-input">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault300" id="flexRadioDefault401" />
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault401">
                                                                        Narrative Structure
                                                                    </label>
                                                                    <img src="images/news_icon.png" />

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="frm-title-label mt-4 mb-4">Upload Supporting Documents / Files</h3>
                                                <p>Do you have a brand guide, style guide, SEO guide, or any other supporting documentation that might help our writers meet your standards?</p>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div className="upload-files-container">
                                                                    <div className="drag-file-area">
                                                                        <span className="upload-icon"> <img src="images/upload-outlined-icon.png" /> </span>
                                                                        <label className="label">
                                                                            <span className="browse-files" />
                                                                            <input type="file" className="default-file-input" /> <span> Drag and drop or </span><span className="browse-files-text">browse</span>
                                                                            <span>your file</span>
                                                                        </label>
                                                                        <h3 className="dynamic-message">*Maximum file size 3 MB</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <input type="submit" className="btn btn-primary me-2" name="" defaultValue="Save Changes" />
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