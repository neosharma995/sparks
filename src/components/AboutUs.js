import React from 'react'
 

export default function AboutUs(props) {
    return (
        <>
      
   
  

            <div className='about-outer'>
                <div className='about-inner'>
                    <div className='about-flex'>
                        <div className='about-left-section' style={{ color: props.theme === 'dark' ? "#fff" : "#000" }}>
                            <h1 style={{ color: props.theme === 'dark' ? "#1E7CC0" : "#F24B74" }}>about us</h1>
                           
                           <p>Hey there! Welcome to Spark Web Solution, the digital ninjas you can trust. We're a team of tech-savvy problem solvers who love nothing more than creating kick-ass websites, apps, graphics, 3D models, and whatever else you can throw our way.</p> 
                                
                           <p> But enough about us, let's talk about you. You're looking for a digital solution that will help take your business to the next level, and that's where we come in. We're here to make sure that your website isn't just functional, but also looks so damn good that your competitors will be green with envy.</p>
                                
                          <p>  Our team is made up of experts who eat, sleep, and breathe all things digital. We'll work with you to understand your needs and deliver a solution that is customized to meet your specific goals. And we'll do it all with a smile on our face (and probably a cup of coffee in our hand).</p>
                                
                          <p>  We take pride in being reliable and delivering projects on time and within budget. But don't worry, we won't bore you with all the technical details. Just know that when you work with us, you're in good hands. We've got your back, and we're not afraid to get a little silly along the way. </p>
                                
                          <p> So, if you're ready to take your digital presence to the next level, give us a shout. We promise to make it a fun ride!   </p>            
                            </div>
                        <div className='about-right-section'>
                            <div className="about-first-img">
                                <img src='my-images/frame-second.png' alt="img"/>
                            </div>
                            <div className="about-second-img">
                                <img src='my-images/frame-first.png' alt="img"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
            
        </>
    )
}



