import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'



function Footer(){
    return (
        <div>
                    <div className="Top-Footer">
                        <h1>
                            Join Big D's House and help save a life today.
                        </h1>
                        <button class="button-3">Learn More</button>
                    </div>
                    <div className='Footer'>
                        <div className='Footer-Left'>
                        <h5>Stay Connected</h5>
                        <p>Sign up for email notifications about our newsletter and events </p>
                        <form>
                            <input placeholder='enter your email' />
                        </form>
                    </div>
                    <div className='Footer-Right'>
                        <div className='Social-Footer-Heading'>Connect With Us On Social Media</div>
                        <ul className='Footer-Social-Menu'>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faYoutube} /></li>
                        </ul>
                    </div>
                        <div className='copyright'>
                            <h1>Copyright 2022 Asor Development INC</h1>
                        </div>
                    </div>
        </div>

    );
}

export default Footer;