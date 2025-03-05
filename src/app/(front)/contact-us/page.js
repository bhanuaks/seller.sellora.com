import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="navigator-breadcrumb-wrapper">
            About
            <i className="fa-regular fa-chevron-right" />
            <Link className="current" href="#">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-seperator">
    <div className="container">
      <hr className="section-seperator" />
    </div>
  </div>
  <div className="rts-map-contact-area rts-section-gap2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact-left-area-main-wrapper">
            <h2 className="title">You can ask us questions !</h2>
            <p className="disc">
              Contact us for all your questions and opinions, or you can solve
              your problems in a shorter time with our contact offices.
            </p>
            <div className="location-single-card">
              <div className="icon">
                <i className="fa-light fa-location-dot" />
              </div>
              <div className="information">
                <h3 className="title">India Address</h3>
                <p>Lorem Ipsum is simply dummy text rinting.</p>
                <Link href="#" className="number">
                  +91 0000000000
                </Link>
                <Link href="#" className="email">
                  info@example.com
                </Link>
              </div>
            </div>
            <div className="location-single-card">
              <div className="icon">
                <i className="fa-light fa-location-dot" />
              </div>
              <div className="information">
                <h3 className="title">Frankfurt Germany Store</h3>
                <p>Lorem Ipsum is simply dummy text of.</p>
                <Link href="#" className="number">
                  +91 0000000000
                </Link>
                <Link href="#" className="email">
                  info@example.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 pl--50 pl_sm--5 pl_md--5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716725338558!5m2!1sen!2sbd"
            width={600}
            height={540}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page