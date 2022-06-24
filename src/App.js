import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHandsHoldingCircle, faHandHoldingDollar, faHouse, faNewspaper, faReceipt, faTableList, faChalkboardUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import example from './example.jpg'


function App() {
  return (
    <div className="App">
      <div className='Left'>
          <div className='Left-Main-Heading'>
            <h1>Big D's House</h1>
          </div>
          <div className='Left-Main-Menu'>
            <ul className= 'Left-Main-Menu-Icon-List'>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li><FontAwesomeIcon icon={faTableList} /></li>
                <li><FontAwesomeIcon icon={faNewspaper} /></li>
                <li><FontAwesomeIcon icon={faHandHoldingDollar} /></li>
                <li><FontAwesomeIcon icon={faReceipt} /></li>
              </ul>

              <ul className= 'Left-Main-Menu-List'>
                <li>Home</li>
                <li>Resources</li>
                <li>News  Events</li>
                <li>Donate</li>
                <li>Orders</li>
              </ul>
          </div>
          <div className='Left-Social-Menu'>
          <ul className='Left-Social-Menu-List'>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
            
          </div>
      </div>

      <div className='Right'>
          <div className='Top-Right'>
            <img src={example} alt="world" />
          </div>
          <div className='Bottom-Right'>
          <div className='info'>
              <h2>Lorem ipsum dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus
                  dolor. Etiam tempor orci eu lobortis.</p>
             </div>


            <div className='help-icons-div'>
              <div className='icon-div hands'>
                <FontAwesomeIcon className='hands-icon' icon={faHandsHoldingCircle} />
                <p>How You Can Help</p>
              </div>

              <div className='icon-div user'>
                <FontAwesomeIcon className='user-icon' icon={ faChalkboardUser } />
                <p>Learn More</p>
              </div>

              <div className='icon-div days'>
                <FontAwesomeIcon className='days-icon' icon={faCalendarDays} />
                <p>Events</p>
              </div>
            </div>
            
          </div>

      </div>
    </div>
  );
}


export default App;
