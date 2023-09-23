import React, { Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import LandingPage from "./components/landing";
import Projects from "./components/projects";
import {Switch, Route} from 'react-router-dom'


class App extends Component { 
    constructor(props){
        super(props);
        this.state = { zIndex: 4 };
      }
     
    render (){
        return(
        <div className="demo-big-content">
        <Layout>
            <Drawer className="drawer" title="YiFei Tang" >
                <Navigation >
                    <Link to="/" onClick={()=>{this.setState({zIndex:4})}}>About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <a href={require('./components/images/resume.pdf')} target="_blank" rel="noopener noreferrer">Resume</a>
                </Navigation>
            </Drawer>
            <Header className="nav-color" title="YiFei Tang Portfolio" scroll style={{zIndex:this.state.zIndex}}>
                <Navigation>
                    <Link to="/" onClick={()=>{this.setState({zIndex:4})}} >About Me</Link>
                    <Link to="/projects" onClick={()=>{this.setState({zIndex:1})}} >Projects</Link>
                    <a href={require('./components/images/resume.pdf')} target="_blank" rel="noopener noreferrer">Resume</a>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Switch>
        <Route exact path="/" render={props => (
            <LandingPage />
        )}/>
        <Route  path='/projects'
        render={props => (
            <Projects onClick={this.handleTrigger} />
        )}/>
    </Switch>
            </Content>
        </Layout>
    </div>
        );
}
   
}

export default App;
