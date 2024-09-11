import React from 'react';

const Footer = () => {
  return (
    <>
    
      <footer>
      <div className="footer-banner">
        <p>Final Frontend</p>
      </div>

        <div className="footer-content">
          <div className="left">
            <p>Powered by</p>
            <img src="./images/DH.png" alt='DH-logo' />
          </div>
          <div className="right">
            <img src="./images/ico-facebook.png" alt="Facebook" />
            <img src="./images/ico-instagram.png" alt="Instagram" />
            <img src="./images/ico-tiktok.png" alt="TikTok" />
            <img src="./images/ico-whatsapp.png" alt="WhatsApp" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
