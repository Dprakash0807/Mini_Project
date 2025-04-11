import React from 'react'
import './Footer.css';
import fb from '../footeri/facebook.png';
import tw from '../footeri/twitter.png';
import yt from '../footeri/youtube.png';
import gram from '../footeri/instagram.png';
import wp from '../footeri/whatsapp.png';
import lin from '../footeri/linkedin.png';
import commingsoon from '../Footers/coming soon.txt';



const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>For Bussiness</h4>
                    <a href="/employer">
                    <p>Employee</p>
                    </a>
                    <a href="/healthplan">
                    <p>healthplan</p>
                    </a>
                    <a href="/individual">
                    <p>Employee</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Resources</h4>
                    <a href="/resources">
                    <p>Resource center</p>
                    </a>
                    <a href="/resource">
                    <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                    <p>STV</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Partners</h4>
                    <a href="/employer">
                    <p>swing tech</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Company</h4>
                    <a href="/about">
                    <p>About</p>
                    </a>
                    <a href="/press">
                    <p>Press</p>
                    </a>
                    <a href="/career">
                    <p>Career</p>
                    </a>
                    <a href="/contact">
                    <p>Contact</p>
                    </a>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Join us to</h4>
                    <div className="socialmedia">
                    <p><a href="https://www.facebook.com/divyaprakash.pandey.792"><img src={fb} alt="" /></a></p>
                        <p><a href={commingsoon}><img src={tw} alt="" /></a></p>
                        <p><a href="https://www.youtube.com/@divyaprakash.pandey.792"><img src={yt} alt="" /></a></p>
                        <p><a href={commingsoon}><img src={gram} alt="" /></a></p>
                        <p>
  <a href="https://wa.me/+919909833201" target="_blank" rel="noopener noreferrer">
    <img src={wp} alt="WhatsApp" />
  </a>
</p>
                        <p><a href= "https://www.linkedin.com/in/divyaprakash-pandey-639483261/"><img src={lin} alt=""   /></a></p>

                    </div>
                </div>
            </div>

            <hr />
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} divyapraksh. All rights reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><div><p>Terms & conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>security</p></div></a>
                <a href="/cookie"><div><p>cookie Declartion</p></div></a>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
