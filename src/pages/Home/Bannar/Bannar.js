import React from 'react';
import { Carousel } from 'react-bootstrap';


const Bannar = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/wyVGzD9/healthcare-slide1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="position-absolute start-0 end-50 top-50 bottom-50">
                    <h3 className="h1">Welcome To <br /> SF <span className='highlight'>Health</span>care</h3>
                    <p>We take care of your healthy health.<br />Take care your health.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/1qNVXBJ/healthcare-slide-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="position-absolute start-0 end-50 bottom-50">
                    <h3 className='h1'>We Provide <br /> Best <span className="highlight">Health</span>care</h3>
                    <p>The other name of health is wealth. <br /> So don't give up caring your health.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/QQm0PMs/hero-doctor-1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="position-absolute start-50 end-0 bottom-50">
                    <h3 className="h1">Better <span className="highlight">Health</span>,<br /> Better Life</h3>
                    <p>Take fresh food and <br /> keep your health fit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;
