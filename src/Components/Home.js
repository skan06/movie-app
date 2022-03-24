import React from 'react';
import {Carousel} from "react-bootstrap";
import slide1 from '../Components/Image/slide1.jpg';
import slide2 from '../Components/Image/slide2.jpg';
import slide3 from '../Components/Image/slide3.webp';


export default function Home() {
    return (
        <>
    
    <div className='crs'>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </div>
    <div className='intro'>
    <h2>General Idea</h2>
    <p>MovieX is an American subscription streaming service and production company. Launched on July 20, 1996, it offers a library of films and television series through distribution deals as well as its own productions.
        MovieX can be accessed via internet browser on computers, or via application software installed on smart TVs, set-top boxes connected to televisions, tablet computers, smartphones, digital media players, Blu-ray Disc players, video game consoles and virtual reality headsets on the list of MovieX-compatible devices. It is available in 4K resolution.In the United States, the company provides DVD and Blu-ray rentals delivered individually via the United States Postal Service from regional warehouses</p>
    </div>
    </>
    )
}
