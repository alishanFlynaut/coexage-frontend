import React from "react";

export default function PricingFeatures() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper pricing-features-page">
        {/* <!-- partial --> */}
        <div className="main-panel">
          <div className="header-title-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex page-title">
                    <div className="title">
                      <h1>
                        Grow At Your Own Pace With Purpose And The Right Plans
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-wrapper text-center pricing-wrapper">
            <div className="container">
              <div className="pricing-top">
                <div className="toggle-btn">
                  <span className="label-text active">Monthly</span>
                  <label className="switch">
                    <input type="checkbox" id="checbox" onClick={() => {}} />
                    <span className="slider round"></span>
                  </label>
                  <span className="label-text">Yearly</span>
                </div>
              </div>

              <div className="package-container package-wrap">
                <div className="packages">
                  <div className="pack-icon-wrap">
                    <div className="pack-icon">
                      <img src="/images/apple-icon.png" alt="" />
                    </div>
                  </div>
                  <h2 className="pack-title">SEED</h2>
                  <h3 className="text1 price-tags">
                    $397.00 <span className="pack-duration">/ month</span>
                  </h3>
                  <h4 className="text2 price-limit">1500 words per month</h4>

                  <div className="pack-btn-wrap text-center">
                    <a href="#" className="btn btn-secondary pack-btn">
                      Get Started{" "}
                      <img src="/images/arrow-right-icon.png" alt="" />
                    </a>
                  </div>

                  <ul className="list">
                    <li>Publish ready content</li>
                    <li>
                      Strategic interview to align with your business goals
                    </li>
                    <li>Setting up brand guidelines & tones</li>
                    <li>SEO editing for optimal search performance</li>
                    <li>Keyword optimization & strategy</li>
                    <li>
                      Title suggestion, meta description, linking & citation
                    </li>
                    <li>Upto 3 revisions + professional proofreading</li>
                    <li>Monthly strategy call</li>
                  </ul>
                </div>

                <div className="packages">
                  <div className="pack-icon-wrap">
                    <div className="pack-icon">
                      <img src="/images/ph_ladder.png" alt="" />
                    </div>
                  </div>
                  <h2 className="pack-title">BUILD</h2>
                  <h3 className="text1 price-tags">
                    $797.00 <span className="pack-duration">/ month</span>
                  </h3>
                  <h4 className="text2 price-limit">3500 words per month</h4>

                  <div className="pack-btn-wrap text-center">
                    <a href="#" className="btn btn-secondary pack-btn">
                      Get Started{" "}
                      <img src="/images/arrow-right-icon.png" alt="" />
                    </a>
                  </div>

                  <ul className="list">
                    <li>
                      All of <b>SEED</b> plus
                    </li>
                    <li>Complete content audit</li>
                    <li>Personalized content style guide</li>
                    <li>Competitor research</li>
                    <li>1 custom royalty-free image per article</li>
                    <li>Upto 5 revisions + professional proofreading</li>
                    <li>
                      2 emails per article - so you can easily share your
                      content to your list
                    </li>
                    <li>3 custom social post per article</li>
                    <li>Monthly strategy call</li>
                  </ul>
                </div>

                <div className="packages">
                  <div className="pack-icon-wrap">
                    <div className="pack-icon">
                      <img src="/images/paper-plane-message.png" alt="" />
                    </div>
                  </div>
                  <h2 className="pack-title">Grow</h2>
                  <h3 className="text1 price-tags">
                    $1497.00 <span className="pack-duration">/ month</span>
                  </h3>
                  <h4 className="text2 price-limit">5500 words per month</h4>

                  <div className="pack-btn-wrap text-center">
                    <a href="#" className="btn btn-secondary pack-btn">
                      Get Started{" "}
                      <img src="/images/arrow-right-icon.png" alt="" />
                    </a>
                  </div>

                  <ul className="list">
                    <li>
                      All of <b>BUILD</b> plus
                    </li>
                    <li>Three custom royalty-free image per article</li>
                    <li>Persona development</li>
                    <li>Industry based writer</li>
                    <li>Unlimited revisions + professional proofreading</li>
                    <li>
                      3 emails per article - to easily share your content to
                      your list
                    </li>
                    <li>4 custom social post per article</li>
                    <li>Hashtag recommendation</li>
                    <li>Content calendar with strategic content planning</li>
                    <li>Dedicated success manager</li>
                    <li>Bi-weekly strategy call</li>
                  </ul>
                </div>

                <div className="packages active">
                  <div className="pack-icon-wrap">
                    <div className="pack-icon">
                      <img src="/images/codicon_rocket.png" alt="" />
                    </div>
                  </div>
                  <h2 className="pack-title">ACCELERATE</h2>
                  <h3 className="text1 price-tags">
                    $1997.00 <span className="pack-duration">/ month</span>
                  </h3>
                  <h4 className="text2 price-limit">9000 words per month</h4>

                  <div className="pack-btn-wrap text-center">
                    <a href="#" className="btn btn-secondary pack-btn">
                      Get Started{" "}
                      <img src="/images/arrow-right-icon.png" alt="" />
                    </a>
                  </div>

                  <ul className="list">
                    <li>
                      All of <b>GROW</b> plus
                    </li>
                    <li>Content Distribution</li>
                    <li>Credit for infographics</li>
                    <li>Direct one-to-one communication with writer</li>
                    <li>
                      4 custom royalty-free image + 1 custom illustration per
                      article
                    </li>
                    <li>Direct upload to website</li>
                    <li>
                      3 emails per article - to easily share your content to
                      your list
                    </li>
                    <li>5 custom social post per article</li>
                    <li>Weekly strategy call</li>
                  </ul>
                </div>
              </div>

              <div className="divi-line-or">
                <span>OR</span>
              </div>

              <a href="#" className="btn btn-primary">
                Proceed With Single Order Of $74.40
              </a>
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
