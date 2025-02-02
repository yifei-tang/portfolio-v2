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
                        <p> Hello! My name is YiFei and I am a software engineer with almost 3 years of experience building large scale services. </p>

                        <p> I am currently a Software Engineer II at <strong>Amazon Web Services</strong> working on the RabbitMQ team. My focus is on
                            creating new features for the customer, leading operational load reduction projects and effectively scaling the service. </p>

                        <p> This portfolio showcases some of my work experiences, internships, and side projects! Feel free to reach out to 
                            me at yifei1tang@gmail.com. </p>
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
                            <a href="mailto: yifei1tang@gmail.com" rel="noopener noreferrer" target="_blank">
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