import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavLink, Media, Row, Col, Label, Button, Container, Input } from 'reactstrap';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faTrashAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
library.add(faMapMarkerAlt, faTrashAlt, faAngleDown);

class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const { mainNav, navAbove, logo } = this.props;
        return (
            <div className='mega-menu'>
                <Menu className='d-xl-none dropdown' 
                    right 
                    width='500px' 
                    isOpen={ this.state.isOpen } 
                    customBurgerIcon={ false } >
                    <Nav className='mr-auto' navbar>
                        { mainNav && mainNav.map((i, ix) => (
                            <NavItem key={ ix }>
                                <div className='nav-link level-one'><a href='/'>{ i.title }</a>
                                    <Button className='angle-down' 
                                        onClick={ (e) => this.showDropdown(e, 'level-one') }>
                                        &#10092;</Button>
                                </div>
                                <Row>
                                    { i.content.map((c, ind) => (
                                        <Col key={ ind } className='dropdown-level'>
                                            <div className='nav-link level-two'><a href='/'>{ c.subTitle }</a>
                                                <Button 
                                                    className='angle-down'
                                                    onClick={ (e) => this.showDropdown(e, 'level-two') }>
                                                    &#10092;</Button></div>
                                            <Nav navbar>
                                                { c.subContent.map((s, index) => (
                                                    <NavItem key={ index }><NavLink>{ s }</NavLink></NavItem>
                                                )) }
                                            </Nav>           
                                        </Col>
                                    )) } 
                                </Row>
                            </NavItem>)) }
                        { navAbove && navAbove.map((i, index) => (
                            <NavItem className='nav-above' key={ index }>
                                <NavLink href={ i.href } title={ i.title }>{ i.title }</NavLink>
                            </NavItem>
                        )) }
                        <NavItem className='socials'>
                            <NavLink href='/' title='Dealer Locator'>
                                <FontAwesomeIcon icon='map-marker-alt' />
                                <span>Dealer Locator</span>
                            </NavLink>
                        </NavItem>
                        <Navbar expand='xs' className='socials'>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <NavLink href='/' className='instagram' title='Instagram'>
                                        <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='pinterest' title='Pinterest'>
                                        <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='twitter' title='Twitter'>
                                        <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='facebook' title='Facebook'>
                                        <FontAwesomeIcon icon='map-marker-alt' /></NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Nav>
                </Menu>
                <div className='top-nav d-none d-xl-block'>
                    <Navbar expand='xs'>
                        <Nav className='mr-auto' navbar>
                            <NavItem>
                                <NavLink href='/' className='instagram' title='Instagram'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink></NavItem>
                            <NavItem>
                                <NavLink href='/' className='pinterest' title='Pinterest'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink></NavItem>
                            <NavItem>
                                <NavLink href='/' className='twitter' title='Twitter'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink></NavItem>
                            <NavItem>
                                <NavLink href='/' className='facebook' title='Facebook'>
                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink></NavItem>
                            <NavItem>
                                <NavLink href='/' title='Dealer Locator'>
                                    <FontAwesomeIcon icon='map-marker-alt' /><span>Dealer Locator</span></NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/' title='Login'>
                                    <FontAwesomeIcon icon='map-marker-alt' /><span>Login</span></NavLink></NavItem>
                            <NavItem><NavLink href='/' title='Sign Up'><span>Sign Up</span></NavLink></NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <Container>
                    <Row>
                        <Col xl={ 12 } className='nav'>
                            <Media>
                                <Media left className='logo'  title='Theodore Alexander'>
                                    <img src={ logo } alt='' /></Media>
                                <Media body className='nav-bar nav-above'>
                                    <Navbar expand='xs'>
                                        <Nav className='mr-auto d-none d-xl-flex' navbar>
                                            { navAbove && navAbove.map((i, index) => (
                                                <NavItem key={ index }>
                                                    <NavLink href={ i.href } title={ i.title }>{ i.title }</NavLink>
                                                </NavItem>
                                            )) }
                                        </Nav>
                                        <Nav className='ml-auto' navbar>
                                            <NavItem className='d-xl-none'>
                                                <NavLink href='' title='Login'>
                                                    <FontAwesomeIcon icon='map-marker-alt' /></NavLink></NavItem>
                                            <NavItem>
                                                <NavLink href=''>
                                                    <FontAwesomeIcon icon='map-marker-alt' />
                                                    <span className='wish-text d-none d-xl-inline'>Wish List</span>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className='search-container'>
                                                    <Input 
                                                        className='search expand-right' 
                                                        id='search-right' 
                                                        type='search' 
                                                        placeholder='Search' />
                                                    <Label className='button search-button' for='search-right'>
                                                        <Button className='icon-delete'>
                                                            <FontAwesomeIcon icon='trash-alt' /></Button>
                                                        <span className='icon-search'>
                                                            <FontAwesomeIcon icon='map-marker-alt' /></span>
                                                    </Label>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='d-xl-none'>
                                                <Button onClick={ this.changeOpen }>
                                                    <FontAwesomeIcon icon='map-marker-alt' />
                                                </Button>
                                            </NavItem>
                                        </Nav>
                                    </Navbar>
                                    <div className='nav-main d-none d-xl-block'>
                                        <Navbar expand='xs'>
                                            <Nav className='main-nav' navbar>
                                                { mainNav && mainNav.map((i, ix) => (
                                                    <NavItem className='top-level-link' key={ ix }>
                                                        <NavLink href=''>{ i.title }</NavLink>
                                                        <div className='sub-menu-block'>
                                                            <Row>
                                                                { i.content.map((c, ind) => (
                                                                    <Col xs={ 2 } className='categories' key={ ind }>
                                                                        <NavLink href='' className='sub-menu-head'>
                                                                            <img 
                                                                                src={ c.imageUrl } 
                                                                                alt='' 
                                                                                width='100%' />
                                                                            { c.subTitle }</NavLink>
                                                                        <Nav className='sub-menu-lists' navbar>
                                                                            { c.subContent.map((s, index) => (
                                                                                <NavItem key={ index }>
                                                                                    <NavLink>{ s }</NavLink>
                                                                                </NavItem>
                                                                            )) }
                                                                        </Nav>           
                                                                    </Col>
                                                                )) } 
                                                            </Row>
                                                        </div>   
                                                    </NavItem>)) }
                                            </Nav> 
                                        </Navbar>
                                    </div>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    changeOpen = () => {
        this.setState({ isOpen: true });
    }
    showDropdown = (e, className) => {
        const buttons = ReactDOM.findDOMNode(this).getElementsByClassName(className);
        let current = [];
        if (e.target.parentNode.className.indexOf('active') > -1) {
            e.target.parentNode.className = e.target.parentNode.className.replace(' active', '');
            e.target.parentNode.classList.add('again');
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].className.indexOf('active') > -1) {
                    current.push(buttons[i]);
                }
            }
            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
            }
            e.target.parentNode.className = e.target.parentNode.className.replace(' again', '');
            e.target.parentNode.classList.add('active');
        }
    }
}

MegaMenu.propTypes = {
    mainNav: PropTypes.array.isRequired,
    navAbove: PropTypes.array.isRequired,
    logo: PropTypes.string
};

MegaMenu.defaultProps = {
    logo: ''

};

export default MegaMenu;
