import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      links: {
        1: '/app/home',
        2: '/app/account',
        3: '/app/kids',
        4: '/app/logout',
      },
    };

    this.handleLink = this.handleLink.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLink(eventKey) {
    browserHistory.push(this.state.links[eventKey]);
  }

  handleBrandLink(e) {
    browserHistory.push('/app/home');
  }

  handleLogout() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('amazon-token');
    amazon.Login.logout();
    window.location = ('/');
  }

  render() {
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand onClick={this.handleBrandLink.bind(this)}>
            myNanny
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onSelect={this.handleLink}>Home</NavItem>
            <NavItem eventKey={3} onSelect={this.handleLink}>Kids</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title='Account' id='account-nav-dropdown'>
              <MenuItem eventKey={2} onSelect={this.handleLink}>Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4} onSelect={this.handleLogout}>Log Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default Navigation;
