import React from 'react'
import { Carousel } from "react-bootstrap"

export const move = () => {
  return (
    <div>
        <Carousel>
    <Carousel.Item interval={1000}>
        <img
        className="d-block w-100"
        src="C:\Users\aadil\OneDrive\Pictures\Saved Pictures\Flag_of_Libya_(1977–2011,_3-2).svg.png"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <img
        className="d-block w-100"
        src="C:\Users\aadil\OneDrive\Pictures\Saved Pictures\Flag_of_Libya_(1977–2011,_3-2).svg.png"
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="C:\Users\aadil\OneDrive\Pictures\Saved Pictures\Flag_of_Libya_(1977–2011,_3-2).svg.png"
        alt="Third slide"
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
