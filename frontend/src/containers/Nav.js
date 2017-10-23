import React from 'react';
import {Link} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Pro Spelling</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavLink tag={Link} to="/lessonone" activeclassname="active">
                Lesson One
                </NavLink>
                <NavLink tag={Link} to="/lessontwo" activeclassname="active">
                Lesson Two
                </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}