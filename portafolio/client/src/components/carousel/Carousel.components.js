import React from 'react';

import Card from '../card/Card.components';

import img1 from '../../assets/imagen/image1.jpg';
import img2 from '../../assets/imagen/image2.jpg';
import img3 from '../../assets/imagen/image3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev',
                    subTitle: 'The developers',
                    imgSrc: img2,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Mauro',
                    subTitle: 'Development',
                    imgSrc: img3,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Note',
                    subTitle: 'A social network for developers',
                    imgSrc: img1,
                    link: 'https://github.com/mauro-pixel',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;