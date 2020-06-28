import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import Modal from "./modal/modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import CustomCard from "./card";
const cineyet_photos=[
    {name:"CineYet 1",
    url:require('./images/cineyet-1.jpg')},
    {name:"CineYet 2",
    url:require('./images/cineyet-2.jpg')},
    {name:"CineYet 3",
    url:require('./images/cineyet-3.jpg')},
    {name:"CineYet 4",
    url:require('./images/cineyet-4.jpg')},
    {name:"CineYet 5",
    url:require('./images/cineyet-5.jpg')},
    {name:"CineYet 6",
    url:require('./images/cineyet-6.jpg')},
    {name:"CineYet 7",
    url:require('./images/cineyet-7.jpg')},
];
const robo_photos=[
    {name:"Robotics 1",
    url:require('./images/robotics-1.jpg')},
    {name:"Robotics 2",
    url:require('./images/robotics-2.jpg')},
    {name:"Robotics 3",
    url:require('./images/robotics-3.jpg')}
]
let slider_settings={
    dots:true,
    fade:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    className:"slides",
    arrows:true 
}
class Projects extends Component{

    constructor(props){
        super(props);
        this.state={activeTab:0,showGrash: false,showFab:false,showLoan:false,z_index:0};  
        this.showGrashModal = e => {
            this.setState({
              showGrash: !this.state.showGrash  
            });
          }; 
          this.showFabModal = e => {
            this.setState({
              showFab: !this.state.showFab 
            });
          }; 
          this.showLoanModal = e => {
            this.setState({
              showLoan: !this.state.showLoan  
            });
          }; 
        //   this.triggerCallback=this.triggerCallback.bind(this);
    }
    // triggerCallback(){
    //     this.props.onTrigger(this.state.z_index);
    // }
    toggleCategories(){
        const grash_img=require('./images/grash.png');
        const grash_img2=require('./images/grash.jpg');
        const not_a_loan_img=require('./images/not-a-loan.png');
        const fabrical_img=require('./images/fabrical.png');
        const portfolio_img=require('./images/yifei.jpg');
        const onion_logo=require('./images/onion.png');
        const star_logo=require('./images/starcatcher.png');
        const cineyet_logo=require('./images/cineyet-logo.png');
        const robotics_logo=require('./images/robotics-3.jpg');
        const pillsafe_logo=require('./images/pillsafe-logo.png');
        let gridClass="project-grid";
        if(this.state.showGrash||this.state.showFab||this.state.showLoan)
            gridClass="project-grid-blur";
        if(this.state.activeTab ===0){
            return(
            <div>

                <Modal onClose={this.showFabModal} animationType="fade" show={this.state.showFab}>
                    <div className="modal-text">
                    <h5> January 2020</h5>

                    <h4> Fabrical - Finalist and Best Fashion Hack</h4>
                    <p>Technologies Used: Python, Google Vision, Heroku, Flask, AWS, MySQL</p>
                    <p>A web application that allows users to customize their clothing choice based on sustainable brands.</p>
                    <ul>
                    <li>Deployed a Flask REST API on Heroku to receive image and user data from the front end </li>
                    <li>Used Google Vision API to extract key fashion features from the user</li>
                    <li>Built a MySQL database hosted on AWS of various clothing items and related features (eg. ID, purchase link, company) </li>
                    <li>Returned a list of recommendations to the frontend</li>
                    </ul>
                    <iframe title="Fabrical" className="video-wrapper" src="https://www.youtube.com/embed/d3qbEo4aYDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </div>
                    <a href='https://github.com/yifei-tang/UofTHacksBackend' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>
                    <a href='https://www.fabrical.me/' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-share"></i>  www.fabrical.me </a>

                </Modal>
                <Modal onClose={this.showLoanModal} animationType="fade" show={this.state.showLoan}>
                <div className="modal-text">
                <h5> September 2019</h5>

                    <h4> Not-A-Loan - $2000 2nd Place Winner</h4>
                    <p>Technologies Used: Python, Flask, jQuery, AJAX</p>
                    <p>A web application that allows banks to provide customized Income Share Agreements for students to pay off their tuition rather than cumbersome student loans. Features I programmed include:</p>
                    <ul>
                    <li>        Deployed a REST API with flask to communicate between front-end and backend </li>
                    <li> Used AJAX and jQuery to post collected user information to the Flask server </li>
                    <li> Determined an individualized ISA repayment rate (fixed) with projected user income (determined with a KNN algorithmn on the input data), displaying it on the website</li>
                    </ul>
                    <iframe title="Not-A-Loan" class="video-wrapper" src="https://www.youtube.com/embed/7UbYGe5VnOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <a href='https://github.com/lmustafa/financefrontend' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>

                </Modal>
                <Modal onClose={this.showGrashModal} animationType="fade" show={this.state.showGrash}>
                <div className="modal-text">
                    <h5> September 2019</h5>
                    <h4> Grash - $2000 TD API Winner</h4>
                    <p>Technologies Used: Python, Azure, Flask, MySQL</p>
                    <p>Grash is an Android Application built to provide university students with advice about the economic and environmental sustainability of their purchase decisions. Some of the features I programmed:</p>
                    <ul>
                    <li>    Used Azure Optical Character Recognition and Python to retrieve and analyze grocery data from a receipt</li>
                    <li>   Deployed a RESTful API server with Flask, receiving image data and POSTing data to the front-end</li>
                    <li> Built a MySQL database to retrieve environmental data from a table based off of the USDA's food food database</li>
                    </ul>
                    <img src={grash_img2} alt="" className="image-wrapper"></img>
                    </div>
                    <a href="https://github.com/IoanaBruj/hack-the-north" className="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>

                </Modal>
            <div className={gridClass}>
            <CustomCard name="Fabrical - Winner" image={fabrical_img} showModal={e=>{this.showFabModal(e);}}/>
            <CustomCard name="Grash - Winner" image={grash_img} showModal={e=>{this.showGrashModal(e);}}/>
            <CustomCard  name="Not A Loan - Winner" image={not_a_loan_img} showModal={e=>{this.showLoanModal(e);}}/>

            </div>
            </div>
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div>
                <Modal onClose={this.showGrashModal} animationType="fade" show={this.state.showGrash}>
                <div className="modal-text">
                    <h4> CineYet - Android Social Media App</h4>
                    <p>Technologies Used: Java, Android Studio, Firebase, IMDB API</p>
                    <p>CineYet is a social media app designed to connect movie lovers. Users can add movies to their watch list, make reviews, recommend movies to friends as well as message them.</p>
                    
                    <Slider {...slider_settings}>
                    {cineyet_photos.map((photo)=>{
                        return(
                            <div>
                                <img width="300px" alt="" style={{padding:"10px"}} src={photo.url}/>
                            </div>
                        )
                    })}
                    </Slider>
                    </div>
                    <a href="https://github.com/yifei-tang/CineYet" class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>

                </Modal>
                <Modal onClose={this.showLoanModal} animationType="fade" show={this.state.showLoan}>
                <div className="modal-text">
                    <h4> Personal Portfolio</h4>
                    <p>Technologies Used: ReactJS</p>
                    <p>I made two versions of this portfolio, the first one using simple HTML, CSS and JavaScript and the second version with React. </p>
                    </div>

                    <a href='https://github.com/yifei-tang/yifei-tang.github.io' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  First Portfolio </a>
                    <a href='https://github.com/yifei-tang/portfolio-v2' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Second Portfolio </a>

                </Modal>
                <Modal onClose={this.showFabModal} animationType="fade" show={this.state.showFab}>
                    <div className="modal-text">

                    <h4> University of Toronto Robotics Association - Sumo and Autonomous Rover</h4>
                    <p>Technologies Used: Python, ROS, OpenCV, Arduino, YOLO</p>
                    <p>I participated in two robotics competitions with UTRA. With Sumo, I was the embedded lead for my team, programming the motion sensors with Arduino C code. 
                        I also soldered the electrical components and built the body of the robot. 
                    </p>
                    <p> On the Autonomous Rover Team, I worked on line and object detection algorithms, training a YOLO model to detect obstacles such as cones. 
                    </p>
                   
                    <Slider {...slider_settings}>
                    {robo_photos.map((photo)=>{
                        return(
                            <div>
                                <img width="100%" alt="" style={{margin:"10px"}} src={photo.url}/>
                            </div>
                        )
                    })}
                    </Slider>
                    </div>
                    <a href='https://github.com/UTRA-ART/' class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>

                </Modal>
                <div className={gridClass}>
            

            <CustomCard name="CineYet - Android App" image={cineyet_logo} showModal={e=>{this.showGrashModal(e);}}/>
            <CustomCard  name="Portfolio" image={portfolio_img} showModal={e=>{this.showLoanModal(e);}}/>
            <CustomCard name="Robotics Competitions" image={robotics_logo} showModal={e=>{this.showFabModal(e);}}/>
    
                </div>
                </div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div>
                    <Modal onClose={this.showGrashModal} animationType="fade" show={this.state.showGrash}>
                <div className="modal-text">
                <h4>PillSafe</h4>
                <p>Technologies Used: Python, OpenCV, Tensorflow, MySQL, PyQt</p>
                <p>PillSafe is an application built to classify medication using computer vision and machine learning techniques. 
                    I developed this as part of a research internship with the National University of Singapore. 
                    Users can enter a pill into the database with a single click of the camera. Users can also remove pills and re-insert them to account for the continually changing nature of medical advances.</p>
                <iframe title="PillSafe" class="video-wrapper" src="https://www.youtube.com/embed/cBi3HyIVfxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            <a href="https://github.com/yifei-tang/Deep-Learning-For-Medication-Recognition" class="project-links"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>
                <a href={require('./images/serius-final-report.pdf')} class="project-links" target="_blank" rel="noopener noreferrer"><i class="fa fa-share"></i>  Read the Final Report </a>

                </Modal>
                <Modal onClose={this.showLoanModal} animationType="fade" show={this.state.showLoan}>
                <div className="modal-text">
                <h4>Onion GIS</h4>
                <p>Technologies Used: C++, GTK, Dark Sky API, Open Street Maps API</p>
                <p>A semester long mapping application dedicated towards assisting tourists in finding their way around a new city. This GIS is designed to be visually appealing and find routes efficiently! We programmed this application in a team of 3 in C++, using GTK for the GUI. Features I programmed specifically include:</p>
                <ul id="%project-list%">
                    <li>Webscrapping live weather data using Dark Sky API and displaying it when the map is loaded.</li>
                    <li>Using Dijkstra's algorithm to find the shortest path between locations in a city.</li>
                    <li>Displaying popular locations such as restaurants, gas stations and schools with icons.</li>
                </ul>
                    <iframe title="Maps" class="video-wrapper" src="https://www.youtube.com/embed/fzdEG83E4oo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </Modal>
                <Modal onClose={this.showFabModal} animationType="fade" show={this.state.showFab}>
                    <div className="modal-text">
                    <h4>Star Catcher</h4>
                <p>Technologies Used: Verilog, PS-2 Controller, DE1-SoC Board</p>
                <p>An arcade game developed in Verilog. Object of the game is to "catch" the stars and "avoid" the asteroids with the spaceship. I worked on this project with a partner for my Digital Systems course as a final project. My role involved creating an algorithm to randomly generate stars and asteroids, as well as writing a Finite State Machine to control game state. </p>
                        <iframe title="StarCatcher" class="video-wrapper" src="https://www.youtube.com/embed/c-0cN4G2e08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                <a href="https://github.com/yifei-tang/Star-Catcher-Project" class="project-links"><i class="fa fa-github"></i>  Click Here To See The Github Repository </a>
                </Modal>
                <div className={gridClass}>
            

            <CustomCard name="PillSafe - Research" image={pillsafe_logo} showModal={e=>{this.showGrashModal(e);}}/>
            <CustomCard name="Onion GIS - Map App" image={onion_logo} showModal={e=>{this.showLoanModal(e);}}/>
            <CustomCard name="Starcatcher - Verilog" image={star_logo} showModal={e=>{this.showFabModal(e);}}/>
            </div>

                </div>
            )
        }
    }
    
    render(){
        return(
            <div className="project-page">
                <Tabs style={{marginLeft:"30px"}} activeTab={this.state.activeTab} onChange={(tabID)=>this.setState({activeTab:tabID})}ripple>
                    <Tab>Hackathons</Tab>
                    <Tab >Personal Projects</Tab>
                    <Tab>Academic Projects</Tab>

                </Tabs>
                    <Grid >
                        <Cell col={12}>
                        <div className="project-wrapper">
                            {this.toggleCategories()}

                        </div>
                        </Cell>
                    </Grid>
                
                   
            </div>
        )
    }
}

export default Projects;