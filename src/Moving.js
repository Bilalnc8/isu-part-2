import React from 'react'

const Moving = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item interval={1000}>
        <img
        className="d-block w-100"
        src="https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/thumbimg_25361957thumbejpg.jpg"
       
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <img id="hi"
        className="d-block"
        src="https://t4.ftcdn.net/jpg/04/71/87/67/360_F_471876773_fNr0kHe2MkDH7g2qlOL6LdsQj2AJUkkZ.jpg"/>
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="src\green-1.png"
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Moving