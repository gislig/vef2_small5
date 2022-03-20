import React from 'react'
import propTypes from "prop-types";
import styles from "./carousel.css";
import FontAwesome from "react-fontawesome";

class Carousel extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = {currentImage: 0};
    };

    // Renders new picture (next or previous picture) based on event and idx and set the state.
    changePicture(event, idx) {
        let newImage = this.state.currentImage;
        if (event === "next") {
            newImage = this.state.currentImage + 1;
        } else if (event === "previous") {
            newImage = this.state.currentImage - 1;
        } else {
            newImage = idx;
        }
        this.setState({currentImage: newImage});
    };

    render() {

        const {images} = this.props;

        // Creates the carousel squares based on the images array.
        if (images) {
            images.map((image, idx) => {
                return (
                    <div className={styles.square} key={idx}>
                        <img src={image} alt="carousel"/>
                    </div>
                );
            });
        }

        const {currentImage} = this.state;
        return (

            <div className={`${styles.carousel} ${styles[`arrow-${this.props.size}`]} `}>
                <div style={{backgroundImage: `url(${images[currentImage]})`}}
                     className={`${(styles.imageContainer)} ${styles[`image-${this.props.size}`]}`}>
                    <FontAwesome className={`${(styles.arrow)} ${(styles['arrow-left'])}`} aria-hidden='false' size='3x'
                                 name='chevron-circle-left' onClick={() => {
                        if (currentImage > 0) {
                            this.setState({currentImage: currentImage - 1})
                        }
                    }}/>
                    <FontAwesome className={`${(styles.arrow)} ${(styles['arrow-right'])}`} aria-hidden='false'
                                 size='3x' name='chevron-circle-right' onClick={() => {
                        if (currentImage < images.length - 1) {
                            this.setState({currentImage: currentImage + 1})
                        }
                    }}/>
                </div>

            </div>
        );
    };

}

// Props that the carousel needs to function
// images: array of images to display in carousel
// size: size of carousel (small, medium, large)
Carousel.propTypes = {
    images: propTypes.array.isRequired,
    size: propTypes.oneOf(['small', 'medium', 'large']).isRequired
};

// Default for props
Carousel.defaultProps = {
    size: 'medium'
};


export default Carousel;