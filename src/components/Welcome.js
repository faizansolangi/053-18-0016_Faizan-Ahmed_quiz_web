import React from 'react';
import { Button } from 'react-bootstrap';
import welcomeImg from '../assets/images/div.png';
import ToolsImg from '../assets/images/div (1).png';
import ArrowImg from '../assets/images/a_after.png';

function Welcome() {
  return (
    <div className='welcome' style={{ backgroundColor: '#FFF0EC' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Brainstorm</h1>
            <h2>Your Book Easily.</h2>
            <p style={{ color: 'gray' }}>World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.</p>
            <Button size="lg" style={{ backgroundColor: '#FFF0EC', color: 'black', borderColor: 'black', borderRadius: '30px', marginTop: '10px' }}>
              <b>Request a Demo</b>
            </Button>
            <Button size="lg" style={{ backgroundColor: '#EB7A65', color: 'white', borderColor: 'black', borderRadius: '30px', marginTop: '10px', marginLeft: '10px' }}>
              <b>Try for Free</b>
            </Button>
          </div>

          <div className="col-md-6 text-center">
            <img src={welcomeImg} alt='welcomeimage' className="img-fluid" />
            <p style={{ marginTop: '10px' }}><b>Watch the product overview</b> 3 min</p>
          </div>
        </div>

        <div className='services' style={{ backgroundColor: '#EB7A65', paddingTop: '30px', paddingBottom: '30px', textAlign: 'center', marginTop: '30px' }}>
          <p><b>The world’s most effective content teams use Writer</b> <img src={ArrowImg} alt='welcomeimage' style={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: '50%' }} width={30} height={30} /></p>
          <img src={ToolsImg} alt="providedtools" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
