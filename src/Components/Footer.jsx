import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube} from 'react-icons/ai';

export const Footer = () => {
    
    return (
       <div id="footer">
          <div className="footer_info">
          <div className="left">
           
            <div className="left_1">
              <h2>SUPPORT</h2>
              <div className="footer_links">
                <ul>
                  <li><a href="#">CONTACT US</a></li>
                  <li><a href="#">FAQS</a></li>
                  <li><a href="#">PROMOTIONS & SALE</a></li>
                  <li><a href="#">MY ACCOUNT</a></li>
                  <li><a href="#">TRACK ORDER</a></li>
                </ul>
                <ul>
                  <li><a href="#">RETURN POLICY</a></li>
                  <li><a href="#">PRIVACY POLICY</a></li>
                  <li><a href="#">TERMS & CONSITIONS</a></li>
                  <li><a href="#">INITATE RETURNS</a></li>
                </ul>
              </div>
            </div>
               
            <div className="left_2">
              <h2>ABOUT PUMA</h2>
              <div className="footer_links">
                <ul>
                  <li><a href="">COMPANY</a></li>
                  <li><a href="">CORPORATE NEWS</a></li>
                  <li><a href="">PRESS CENTER</a></li>
                </ul>
                <ul>
                  <li><a href="">INVESTORES</a></li>
                  <li><a href="">SUSTAINBLITY</a></li>
                  <li><a href="">CAREESRS</a></li>
                  <li><a href="">STORE FINDER</a></li>
                </ul>
              </div>
            </div>
          </div>
             
          <div className="right">
            <h2>STAY UP TO DATE</h2>
            <div className="social_icons">
              <a href=""><AiFillFacebook></AiFillFacebook></a>
              <a href=""><FaTwitter></FaTwitter></a>
              <a href=""><AiFillInstagram></AiFillInstagram></a>
              <a href=""><AiFillYoutube></AiFillYoutube></a>
            </div>
            <br />
            <br />
                
            <div className="company d-flex">
              <div className="company_logo">
                <img
                  src="https://in.puma.com/on/demandware.static/-/Sites-IN-Library/default/dwe13dbf96/web-components/pumatrac-logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
            </div>
        </div>
    )
  }
  export default Footer;


