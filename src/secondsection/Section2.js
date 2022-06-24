import React from 'react';
import example from '../example.jpg'



function Section2(){
    return (
        <div className='Section2'>
            <div className='Section2-Top-One'>
                <h5>Who we Are</h5> 
                    <p>Pellentesque sit amet diam at 
                    sem ultricies finibus ut in libero. Nullam viverra rhoncus tincidunt. Curabitur in 
                    viverra orci, non dignissim lacus. In aliquam in arcu a molestie. Sed purus ipsum, 
                    imperdiet eu nunc a, ultricies maximus risus.</p>
                    <button class="button-2">Learn More</button>
            </div>
            <div className='Section2-Top-Two'>
                <div className='Section2-Second Section2-Top-Two-One'>
                    <h5>30%</h5>
                    <p>In aliquam in arcu a molestie. Sed purus ipsum, 
                    imperdiet eu nunc a, ultricies maximus risus.</p>
                </div>
                <div className='Section2-Second Section2-Top-Two-Two'>
                    <h5>5M</h5>
                    <p>In aliquam in arcu a molestie. Sed purus ipsum, 
                    imperdiet eu nunc a, ultricies maximus risus.</p>
                </div>
                <div className='Section2-Second Section2-Top-Two-Three'>
                    <h5>3X</h5>
                    <p>In aliquam in arcu a molestie. Sed purus ipsum, 
                    imperdiet eu nunc a, ultricies maximus risus.</p>
                </div>
            </div>
               
            <div className='Section2-Front'>
                <div className='Section2-Front1'>
                    <img className='section2-img' src={example} alt="world"/>
                    <div className='Section2-Front1-Bottom'>
                        <h5>Our Goal</h5> 
                        <p>Pellentesque sit amet diam at 
                        sem ultricies finibus ut in libero. Nullam viverra rhoncus tincidunt. Curabitur in 
                        viverra orci, non dignissim lacus. In aliquam in arcu a molestie. Sed purus ipsum, 
                        imperdiet eu nunc a, ultricies maximus risus.</p>
                    </div>
                </div>
                
                <div className='Section2-Front2'>
                    <div className='Section2-Front2-Inside'>
                        <h5>Get Involved</h5> 
                        <p>Pellentesque sit amet diam at 
                        sem ultricies finibus ut in libero. Nullam viverra rhoncus tincidunt. Curabitur in 
                        viverra orci, non dignissim lacus. In aliquam in arcu a molestie. Sed purus ipsum, 
                        imperdiet eu nunc a, ultricies maximus risus.</p>
                    </div>

                    <div className='Section2-Bottom'>
                    <img className='section2-bottom-img' src={example} alt="world"/>
                </div>
                </div>
            </div>
        </div>

    );
}

export default Section2;