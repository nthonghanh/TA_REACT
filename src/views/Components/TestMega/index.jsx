import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Container, Label, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faTrashAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
library.add(faMapMarkerAlt, faTrashAlt, faAngleDown);

class TestMega extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const { imageUrl } = this.props;
        const mainNav = [
            {
                title: '@fortawesom',
                content: [
                    {
                        imageUrl,
                        subTitle: '@fortawesom @fortawesom',
                        subContent: [ '0a1', '0a2', '0a3' ]
                    },
                    {
                        imageUrl,
                        subTitle: 'fortawe',
                        subContent: [ '1b', '2b', '3b' ]
                    },
                    {
                        imageUrl,
                        subTitle: '@fortawesom',
                        subContent: [ '1c', '2c', '3c' ]
                    }
                ]
            },
            {
                title: '@fortawesom @fortawesom',
                content: [
                    {
                        imageUrl,
                        subTitle: '@fortawesom',
                        subContent: [ '1', '2', '3' ]
                    },
                    {
                        imageUrl,
                        subTitle: '@fortawesom 2222',
                        subContent: [ '1', '2', '3' ]
                    },
                    {
                        imageUrl,
                        subTitle: '@fortawesom 3333',
                        subContent: [ '1', '2', '3' ]
                    }
                ]
            },
            {
                title: '@fortawesomfortawesom ',
                content: [
                    {
                        imageUrl,
                        subTitle: '11fortawesom11',
                        subContent: [ '1', '2', '3' ]
                    },
                    {
                        imageUrl,
                        subTitle: '22fortawesom22',
                        subContent: [ '1', '2', '3' ]
                    },
                    {
                        imageUrl,
                        subTitle: '33fortawesom33',
                        subContent: [ '1', '2', '3' ]
                    }
                ]
            }
        ];
        const navAbove = [
            {
                href: '',
                title: 'New Arrivals'
            },
            {
                href: '',
                title: 'Custom Finishes'
            },
            {
                href: '',
                title: 'Upholstery'
            },
            {
                href: '',
                title: 'Brands & Designers'
            },
            {
                href: '',
                title: 'Lifestyles'
            }
        ];
        return (
            <div className='nav-mega'>
                <div className='top-nav d-none d-xl-block'>
                    <Navbar expand='xs'>
                        <Nav className='mr-auto' navbar>
                            <NavItem>
                                <NavLink href='/' className='instagram'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='pinterest'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='twitter'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='facebook'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>
                                    <FontAwesomeIcon icon='map-marker-alt' />
                                    <span>Dealer Locator</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/'>
                                    <FontAwesomeIcon icon='map-marker-alt' />
                                    <span>Login</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>
                                    <span>Sign Up</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <Container className='nav-container'>
                    <Navbar light expand='xl' className='nav-main'>
                        <NavbarBrand href='/' className='logo' title='Theodore Alexander'>
                            <img alt='TA_logo_with_text_underneath_IB-01'
                                src={ `https://livecd.theodorealexander.com/-/media/Images` +
                                    `/Theodore/Logo/TA_logo_with_text_underneath_IB-01.svg` } />
                        </NavbarBrand>
                        <NavbarToggler onClick={ this.toggle } />
                        <Collapse isOpen={ this.state.isOpen } navbar className='nav-collapse'>
                            <Nav className='ml-auto'>
                                <Navbar className='nav-above'>
                                    <Nav navbar>
                                        { navAbove && navAbove.map(i => (
                                            <NavItem>
                                                <NavLink href={ i.href }>{ i.title }</NavLink>
                                            </NavItem>
                                        )) }
                                    </Nav>
                                    <Nav className='ml-auto' navbar>
                                        <NavItem>
                                            <NavLink href='/components/'>
                                                <FontAwesomeIcon icon='map-marker-alt' />
                                                <span className='wish-text d-none d-xl-inline'>Wish List</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink>
                                                <div className='search-container'>
                                                    <input 
                                                        className='search expand-right' 
                                                        id='searchright' 
                                                        type='search' 
                                                        placeholder='Search' />
                                                    <Label className='button search-button' for='searchright'>
                                                        <Button className='icon-delete'>
                                                            <FontAwesomeIcon icon='trash-alt' /></Button>
                                                        <span className='icon-search'>
                                                            <FontAwesomeIcon icon='map-marker-alt' /></span>
                                                    </Label>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='d-xl-none'>
                                            <Button onClick={ this.changeOpen }>
                                                <FontAwesomeIcon icon='map-marker-alt' />
                                            </Button>
                                        </NavItem>
                                    </Nav>
                                </Navbar>
                                <Navbar expand='xs'>
                                    <Nav className='main-nav' navbar>
                                        { mainNav && mainNav.map(i => {
                                            return (
                                                <UncontrolledDropdown nav inNavbar>
                                                    <DropdownToggle nav caret>{ i.title }</DropdownToggle>
                                                    <DropdownMenu right>
                                                        { i.content.map(c => (
                                                            <UncontrolledDropdown nav inNavbar>
                                                                <DropdownToggle nav caret>
                                                                    <NavLink>
                                                                        <img 
                                                                            src={ c.imageUrl } 
                                                                            alt='' 
                                                                            width='100%' />
                                                                        { c.subTitle }</NavLink>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    { c.subContent.map(s => (
                                                                        <DropdownItem>
                                                                            { s }
                                                                        </DropdownItem>
                                                                    )) }
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        )) } 
                                                    </DropdownMenu>  
                                                </UncontrolledDropdown>
                                            );
                                        }) }
                                    </Nav> 
                                </Navbar>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

TestMega.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

TestMega.defaultProps = {
};

export default TestMega;
