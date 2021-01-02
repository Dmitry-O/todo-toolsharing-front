import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    FormGroup, Form, Input, Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                <div className="contrainer">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="ml-5 pl-5">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="DCC"/>
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/tools">
                                    <span className="fa fa-info fa-lg"></span> Tools
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg"></span> About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contacts">
                                    <span className="fa fa-info fa-lg"></span> Contacts
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <br/>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;