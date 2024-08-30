import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="wrapper">
      <footer
        className="footer"
        style={{  }}
      >
        <div className="leftFoot">
          <div className="about">
            <h2 className="fH">About</h2>
            <p className="fP">Contact Us</p>
            <p className="fP">About Us</p>
            <p className="fP">Careers</p>
          </div>
          <div className="help">
            <h2 className="fH">Help</h2>
            <p className="fP">Shipping Us</p>
            <p className="fP">Cancellation & Returns</p>
            <p className="fP">FAQ</p>
          </div>
        </div>
        <div className="midFoot">
          <div className="consumerPolicy">
            <h2 className="fH">Consumer Policy</h2>
            <p className="fP">Terms & Use Us</p>
            <p className="fP">Security</p>
            <p className="fP">Privacy</p>
            <p className="fP">SiteMap</p>
            <p className="fP">Grievance Redressal</p>
          </div>{' '}
          <div className="social">
            <h2 className="fH">Social</h2>
            <p className="fP">Facebook</p>
            <p className="fP">Twitter</p>
            <p className="fP">YouTube</p>
          </div>
        </div>
        <div className="rightFoot">
          <div className="box">
            <h2 className="fH">Mail Us</h2>
            <p className="fP">
              Fashniii Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </div>

          <div className="box">
            <h2 className="fH">Registered Office Address:</h2>
            <p className="fP">
              Fashniii Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
