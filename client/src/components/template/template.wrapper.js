import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import NavbarComponent from '../navbar/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../../actions/setView';
import Filter from '../Filter';
import { showButtons } from '../../actions/showButtons';


class Template extends Component {


  componentWillMount() {
    this.props.showButtons(true);
  }

  handleChangeView = () => {
    console.log('setting view');
    this.props.setView();
  }

  render() {
    const {handleViewChange, handleFilter, filterOrg} = this.props
    return (
      <div>
        <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg"
        style={{marginBottom: 80}}>
            <Navbar.Brand href="#home"><h4>LaunchVue</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavbarComponent />
                </Nav>{
                this.props.appState.showButtons ? <Button onClick={()=>this.handleChangeView()}>Toggle View</Button> : ''
                }
            </Navbar.Collapse>
        </Navbar>
        <Container className="wrapper">{ this.props.appState.showButtons ?
        <Filter handleFilter={handleFilter} filterOrg={filterOrg} /> : ''
        }
          <section className="list-wrapper">
            {this.props.children}
          </section>
         </Container>
        <footer className="text-center">
          <Navbar 
          bg="light" 
          variant="dark" 
          expand="lg" 
          fixed="bottom"
          className="text-center"
          >
            
              <span>LaunchVue © 2019</span>
        
          </Navbar>
        </footer>
      </div>
    )
  }
}


const mapStateToProps = state => ({appState: state});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setView, showButtons }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);