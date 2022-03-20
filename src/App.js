import React from 'react';
import styles from './index.css';
import Modal from './components/Modal/index';
import Row from './components/Row/index';
import Col from './components/Col/index';
import Carousel from './components/Carousel/index';
import DatePicker from './components/DatePicker/index';
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/index';


class App extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            isOpen: false,
            date: "select date"
        };
    }

    render() {

        return (
            <div className="container">
                <div className="header">
                    <h1>Small Assignment 5</h1>
                </div>
                <div className="item">
                    <h2>Modal</h2>
                    <div>
                        <button onClick={() => this.setState({isOpen: true})}>Show Modal</button>
                        <Modal
                            isOpen={this.state.isOpen}
                            onClose={() => this.setState({isOpen: false})}>
                            <Modal.Title>My Modal Title</Modal.Title>
                            <Modal.Body>My Modal Body</Modal.Body>
                            <Modal.Footer>My Modal Footer</Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className="carousel">
                    <h2>Carousel</h2>
                    <div>
                        <h3>Small</h3>
                        <Carousel className="item"
                                  images={["https://tinypng.com/images/social/website.jpg", "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"]}
                                  size={"small"}/>
                        <h3>Medium</h3>
                        <Carousel className="item"
                                  images={["https://tinypng.com/images/social/website.jpg", "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"]}
                                  size={"medium"}/>
                        <h3>Large</h3>
                        <Carousel className="item"
                                  images={["https://tinypng.com/images/social/website.jpg", "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg", "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg"]}
                                  size={"large"}/>
                    </div>
                </div>
                <div className="item">
                    <h2>Cols</h2>
                    <Row>
                        <Col size={1}>One</Col>
                    </Row>
                    <Row className="lines">
                        <Col size={2}>Two</Col>
                        <Col size={3}>Three</Col>
                        <Col size={4}>Four</Col>
                        <Col size={1}>One</Col>
                        <Col size={5}>Five</Col>
                        <Col size={6}>Six</Col>
                    </Row>
                </div>
                <div className="item">
                    <h2>DatePicker</h2>
                    <h3>DatePicker with is-IS locale</h3>
                    <DatePicker onDatePick={date => this.setState({date: date})} locale={"is-IS"}/>
                    <h3>DatePicker with en-EN locale</h3>
                    <DatePicker onDatePick={date => this.setState({date: date})} locale={"en-En"}/>

                </div>
                <div className={`${styles["container-item"]}`}>
                    <h2>10. CartoonNetworkSpinner Component Demo</h2>
                    {this.CartoonNetworkSpinnerTest(4)}
                </div>
            </div>
        );
    }


    datePickerTest(onDatePick, locale) {
        return (
            <DatePicker
                onDatePick={onDatePick}
                locale={locale}
            />
        );
    }

    CartoonNetworkSpinnerTest(interval) {
        return (
            <CartoonNetworkSpinner interval={interval}/>
        )
    }
}

export default App;
