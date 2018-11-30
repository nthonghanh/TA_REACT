import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Container, Row, Col } from 'reactstrap';
// import { ImageZoom, ImageZoomDesigner, ProductItem, MegaMenu } from 'views/Components';
import { MegaMenu } from 'views/Components';
import * as homeActions from './actions';
import './style.scss';

class Home extends React.Component {
    render() {
        const imageUrl = 'http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg';
        const logo = `https://livecd.theodorealexander.com/-/media/Images/Theodore/Logo/` +
            `TA_logo_with_text_underneath_IB-01.svg`;
        const mainNav = [
            {
                title: 'living',
                content: [
                    {
                        imageUrl,
                        subTitle: 'Upholstery',
                        subContent: [ 'Sofas', 'Settees', 'Sectionals',
                            'Ottomans, Stools & Benches', 'Accent Chairs',
                            'Upholstered Chairs' ]
                    },
                    {
                        imageUrl,
                        subTitle: 'tables',
                        subContent: [ 'Cocktail tables', 'Console & Sofa tables', 'Nests of tables',
                            'Games Tables', 'Accent & Occasional Tables', 'Centre Tables' ]
                    },
                    {
                        imageUrl,
                        subTitle: 'Cabinets & selving',
                        subContent: [ 'TV Cabinets', 'Tall Bookcases & Cabinets', 'Low Bookcases',
                            'Etageres', 'Corner Cabinets', 'Buffets & Side Cabinets', 'Bar & Curio Cabinets' ]
                    },
                    {
                        imageUrl,
                        subTitle: 'lighting',
                        subContent: [ 'Table Lamps', 'Floor Lamps', 'Chandeliers', 'Wall Lights & Accessories' ]
                    }
                ]
            },
            {
                title: 'dining',
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
                title: 'bed ',
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
            },
            {
                title: 'office ',
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
            },
            {
                title: 'lighting ',
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
            },
            {
                title: 'decor ',
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
            },
            {
                title: 'accent furniture ',
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
            <div>
                <MegaMenu 
                    logo={ logo }
                    mainNav={ mainNav }
                    navAbove={ navAbove } />
                {/*<TestMega imageUrl='http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg' />*/}
                {/*<Container fluid className='ta-home'>
                    <Row>
                        <Col xs='12'>
                            <ImageZoom 
                                imageUrl='https://media.timeout.com/images/101602611/image.jpg' 
                                title='THEODORE ALEXANDER' 
                                subTitle='Unmatched craftsmanship, exquisite finishes and extraordinary design'
                                buttonName='See brand' />
                            <ImageZoomDesigner 
                                imageUrl='https://media.timeout.com/images/101602611/image.jpg' 
                                designerName='Michael Berman' />
                            <ProductItem
                                imageUrl='https://media.timeout.com/images/101602611/image.jpg'
                                imageCustomUrl={ `https://livecd.theodorealexander.com/-/media/Images/Theodore/Logo/
                                    custom.png?mh=20&mw=20&hash=69B79CCC330763911BAC973CE198DAD34B859F68` } />
                            <MegaMenu />
                        </Col>
                    </Row>
                </Container>*/}
            </div>
        );
    }
}

// Home.propTypes = {
// };
// Home.defaultProps = {
// };

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
