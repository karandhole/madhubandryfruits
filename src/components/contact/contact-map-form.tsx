import React from 'react';
import ContactForm from '../form/contact-form';

const ContactMapForm = () => {
  return (
    <section className="map-area tpmap__box">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 z-index-1">
            <div className="col-lg-6 col-md-6 order-2 order-md-1 z-index-1">
              <div className="tpmap__wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1983842340185!2d72.80288717502907!3d19.082197987018476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63e20d2f5e5%3A0x62e6f833f6b5f9ff!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1695798471234!5m2!1sen!2sin"
                  style={{ border: 0, width: '100%', height: '500px' }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>


          </div>
          <div className="col-lg-6 col-md-6 order-1 order-md-2">
            <div className="tpform__wrapper pt-120 pb-80 ml-60">
              <h4 className="tpform__title">Leave a Review / Comment</h4>
              <p>Share your thoughts about our premium dry fruits. Your email will remain private. Required fields are marked *</p>

              <div className="tpform__box">
                {/* contact form */}
                <ContactForm />
                {/* contact form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapForm;