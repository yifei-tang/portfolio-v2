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
                        <div className="about-me">
                        <p> Hello! My name is YiFei and I am a Software Engineer II at <strong>Amazon Web Services</strong></p> 
                        <p> This portfolio showcases some of my experiences, side projects and hackathons! </p>
                        <p> I am currently seeking full time opportunities. Feel free to reach out to me if you like what you see! My email is yifei1tang@gmail.com</p>
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