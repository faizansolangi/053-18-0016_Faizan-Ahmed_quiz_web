import React from 'react';
import Card from 'react-bootstrap/Card';
import Image1 from '../assets/images/cardimg1.png';
import Imagetext1 from '../assets/images/cardtext1.png';
import Image2 from '../assets/images/cardimg2.png';
import Imagetext2 from '../assets/images/cardtext2.png';
import Image3 from '../assets/images/cardimg3.png';
import Imagetext3 from '../assets/images/cardtext3.png';
import Image4 from '../assets/images/cardimg4.png';
import Imagetext4 from '../assets/images/cardtext4.png';
import Image5 from '../assets/images/cardimg5.png';
import Imagetext5 from '../assets/images/cardtext5.png';
import Image6 from '../assets/images/cardimg6.png';
import Imagetext6 from '../assets/images/cardtext6.png';
import UseCaseImage from '../assets/images/play-use-cases.svg.png';
import DarkArrowImage from '../assets/images/span.png';
import DivImg14 from '../assets/images/div (14).png';
import BenefitImg1 from '../assets/images/benefitImg1.png';
import BenefitImg2 from '../assets/images/benefitImg2.png';
import BenefitImg3 from '../assets/images/benefitImg3.png';
import BenefitImg4 from '../assets/images/benefitImg4.png';
import Icons from '../assets/images/icons.png';

const Offering = () => {
  return (
    <>
    <div className="main" style={{backgroundColor:'#FFF0EC', paddingTop:'30px', paddingBottom:'10px'}}>
      <div className="offerings container">
      <h2 style={{textAlign:'center'}}>People who has published their books using writealy</h2>
              <div className="row" style={{ margin: '20px' }}>

                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem', paddingBottom:'25px' }}>
                        <img src={Imagetext1} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image1} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body style={{fontSize:'14px'}}>
                        <Card.Title style={{fontSize:'45px'}}>2x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Increase in search <p>traffic in 4 weeks</p></Card.Title>
                            <Card.Text>
                            “No other competitors were able to mimic our voice and tone like Writer. 
                            With it, we increased our publication cadence dramatically.”
                            </Card.Text>
                            <p><b>Ty Magnin</b></p>
                            <p>Vp of Marketing</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <img src={Imagetext2} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image2} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>18x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>ROI on Writer <p>investment</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “Having AI write some stuff under good guidance and under good frameworks frees us up to write the really important stuff. 
                            We’ve had an incredible ROI with Writer.”
                            </Card.Text>
                            <p><b>Tina O'Shea</b></p>
                            <p>Director, Content Design</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <img src={Imagetext3} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image3} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>5x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Increase in <p>content output</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “A tool like Writer is exactly what we needed. It empowers our authors to get writing suggestions on the fly, 
                            and it doesn’t require them to remember all of these rules.”
                            </Card.Text>
                            <p><b>Karl Gabbey</b></p>
                            <p>Head of Knowledge</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row" style={{ margin: '20px' }}>
                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem' }}>
                    <img src={Imagetext4} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image4} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>100%</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Brand <p>compliance</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “As our company quickly grew, Writer helped us scale content without sacrificing our brand voice. It would have taken us hundreds 
                            of hours of copyediting cycles to do what we can do with Writer automatically."
                            </Card.Text>
                            <p><b>Brooke Burdge</b></p>
                            <p>SVP of Brand Marketing</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem', paddingBottom:'20px' }}>
                        <img src={Imagetext5} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image5} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>23%</Card.Title>
                            <Card.Title style={{fontSize:'20px'}}>Increase in CTRs <p> with better copy</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “Writer solves real business problems for us, and it was the only AI tool we tried that could do so. 
                            It really did deliver on the promise of freeing up our writers to work on creative strategy.”
                            </Card.Text>
                            <p><b>Ranjan Roy</b></p>
                            <p>Vp of Strategy</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem', paddingBottom:'20px'}}>
                <img src={Imagetext6} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image6} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body style={{fontSize:'14px'}}>
                            <Card.Title style={{fontSize:'45px'}}>70%</Card.Title>
                            <Card.Title style={{fontSize:'20px'}}>Reduction in <p>editing time</p></Card.Title>
                            <Card.Text>
                            “Being able to present a tool that could literally pay for itself in the amount of time that 
                            it was saving our team and our editors, even by a very conservative estimate — it was a no-brainer.”
                            </Card.Text>
                            <p><b>Deedi Brown</b></p>
                            <p>Senior Editor</p>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    </div>

    <div className="use-cases" style={{backgroundColor:'#FFEEFC', textAlign:'center', paddingTop:'30px'}}>
            <img src={UseCaseImage} alt="playbutton" width={30} height={40}/>
            <p className="use-case-title"><b>USE CASES</b></p>
            <h2> Automate what’s automatable in </h2> <h2> content</h2>
            <p> Writer accelerates your writing workflow, from </p>
            <p> Writing <img src={DarkArrowImage} alt='arrow' width={20} height={20} style={{marginLeft:'5px', marginRight:'5px'}}/>
                Ideation <img src={DarkArrowImage} alt='arrow' width={20} height={20} style={{marginLeft:'5px', marginRight:'5px'}}/>
                Illustrating </p>

            <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
            <div className="col col-sm-12 col-md-8 col-lg-8" style={{textAlign:'center'}}>
                <img src={DivImg14} alt='welcomeimage' width={600} height={350}/>
            </div>

            <div className="col col-sm-12 col-md-4 col-lg-4" style={{ paddingLeft:'100px', textAlign:'start'}}> 
                <h4 style={{paddingLeft:'80px'}}> Ideate Faster </h4>
                <p style={{color:'gray', paddingLeft:'80px'}}> Use AI as your  </p>
                <p style={{color:'gray', paddingLeft:'80px'}}>brainstorming partner </p>

                <h4 style={{paddingLeft:'80px'}}> Write Faster </h4>
                <p style={{color:'gray', paddingLeft:'80px'}}>Generate first drafts in seconds</p>

                <h4 style={{paddingLeft:'80px'}}> Ideate Faster </h4>
                <p style={{color:'gray', paddingLeft:'80px'}}> AI writing platform to unlock </p>
                <p style={{color:'gray', paddingLeft:'80px'}}>brainstorming for publishing a book. </p>

                <h4 style={{paddingLeft:'80px'}}> Ideate Faster </h4>
                <p style={{color:'gray', paddingLeft:'80px'}}> AI writing platform to unlock </p>
                <p style={{color:'gray', paddingLeft:'80px'}}>brainstorming for publishing a book. </p>
            </div>
    
            </div>    
        </div>

        <div className='welcome' style={{backgroundColor:'#FFF0EC', paddingTop:'30px'}}>
            <h2 style={{textAlign:'center'}}> B E N E F I T S </h2>
            <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{ paddingLeft:'100px'}}> 
                <h1 style={{paddingLeft:'80px'}}> Create content in </h1>
                <h1 style={{paddingLeft:'80px'}}> minutes, not months </h1>
                <p style={{color:'gray', paddingLeft:'80px'}}> Create original content that actually sounds </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> like your company wrote it. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> Writer is the only AI writing platform that can be </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> trained on your own best-performing content </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> and brand guidelines. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> It's <b style={{backgroundColor:'#9BFFE1', color:'black'}}> your own AI,</b> specifically tuned for your team’s </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> unique use cases. </p>
            </div>
        
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{textAlign:'center'}}>
                <img src={BenefitImg1} alt='benefitimage' width={480} height={430}/>    
            </div>
            </div>

        <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{ paddingLeft:'100px', marginTop:'40px'}}> 
                <h1 style={{paddingLeft:'80px'}}> Build a brand that is </h1>
                <h1 style={{paddingLeft:'80px'}}> consistent — everywhere </h1>
                <p style={{color:'gray', paddingLeft:'80px'}}> Generic ad copy. Outdated messaging on your </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> website. Poorly-written docs. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> All of this can kill a buyer’s journey — and your </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> brand. Writer gives you all the tools you need to </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> <b style={{backgroundColor:'#9BFFE1', color:'black'}}> build a consistent brand,</b> across every customer </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> touchpoint, and do it efficiently. </p>
            </div>
        
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{textAlign:'center'}}>
                <img src={BenefitImg2} alt='benefitimage' width={480} height={430}/>    
            </div>
        </div>

        <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{ paddingLeft:'100px', marginTop:'40px'}}> 
                <h1 style={{paddingLeft:'80px'}}> Drive revenue, not </h1>
                <h1 style={{paddingLeft:'80px'}}> review cycles </h1>
                <p style={{color:'gray', paddingLeft:'80px'}}> ‘Let’s be a media company,’ they say — but </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> without the required headcount or budget. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> Do it anyway. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> <b style={{backgroundColor:'#9BFFE1', color:'black'}}> 10x the productivity</b> of your best writers, and  </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> make it so everyone else in the company can </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> contribute on-brand content, too — without the </p>                
                <p style={{color:'gray', paddingLeft:'80px'}}> rewrites. </p>

            </div>
        
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{textAlign:'center'}}>
                <img src={BenefitImg3} alt='benefitimage' width={480} height={430}/>    
            </div>
        </div>

        <div className="row" style={{paddingTop:'30px', paddingBottom:'40px'}}>
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{ paddingLeft:'100px', marginTop:'40px'}}> 
                <h1 style={{paddingLeft:'80px'}}> Be secure with </h1>
                <h1 style={{paddingLeft:'80px'}}> enterprise features </h1>
                <p style={{color:'gray', paddingLeft:'80px'}}> What you write will never make it into our models. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> Your data is analyzed transiently, so what you </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> edit or generate isn’t collected or used by Writer. </p>
                <p style={{color:'gray', paddingLeft:'80px'}}> Writer is the only AI writing platform that both </p>                
                <p style={{color:'gray', paddingLeft:'80px'}}> users and infosec teams love. </p>
                <img src={Icons} alt='benefitimage' width={480} height={80} style={{paddingLeft:'65px'}}/>
            </div>
        
            <div className="col col-sm-12 col-md-6 col-lg-6" style={{textAlign:'center'}}>
                <img src={BenefitImg4} alt='benefitimage' width={480} height={430}/>    
            </div>
        </div>

        <div className="" style={{backgroundColor:'#FFF0EC', paddingTop:'30px', paddingBottom:'10px'}}>

        </div>

    </div>
    </>
  );
}

export default Offering;