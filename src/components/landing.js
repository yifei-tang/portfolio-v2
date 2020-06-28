import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    constructor(props){
        super(props);
        this.state={z_index:10};
    }
  
    render(){
        return(
            <div style={{width: '100%'}}>
                <Grid className="landing-grid">
                    <Cell col={3}>
                        <img src={require('./images/yifei.jpg')}
                            alt="avatar"
                            className="avatar-img"/>
                    
                    </Cell>
                    <Cell col={9}>
                    <div className="banner-text">
                        {/* <h1>YiFei Tang</h1>
                        <hr/> */}
                        <div className="about-me">
                        <p> Hello! My name is YiFei and I am a fourth year Computer Engineering student at the University of Toronto.
                            My primary interests are: backend programming, cloud computing and android development. </p>
                        <p> I am currently a software development intern at <strong>Amazon Web Services</strong> on the Amazon MQ team. Previously, I did a research internship at the <strong>National University of Singapore</strong>, using machine learning and computer vision to recognize user's medication. </p>
                        <p>An avid programmer, I enjoy building fun side projects and going to Hackathons. I am currently working on a social media app for movie lovers. In the past, I have competed and won at Hack the North, RBC AmpHacks, and UofTHacks.
                            </p>
                            <p> I am currently seeking full time opportunities. Feel free to reach out to me if you like what you see! My email is yifeit.tang@mail.utoronto.ca</p>
                        </div>
                        
                        <div className="social-media">
                            {/* Github */}
                            <a href="https://github.com/yifei-tang" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/yifei-tang99/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* Email */}
                            <a href="mailto: yifeit.tang@mail.utoronto.ca" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Landing;