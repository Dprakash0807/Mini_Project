import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="foterpadd">
            <div className="footerlink">
                <div className="footer-link-div">
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
                <div className="fotter-link-div">
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
                
            </div>
        </div>
    </div>
  )
}

export default Footer
