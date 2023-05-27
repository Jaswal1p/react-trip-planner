import React, { useState }from "react";
import "../App.css";
import slide1 from "../assets/images/highrise.jpg"
import slide2 from "../assets/images/night-sky.jpg"
import slide3 from "../assets/images/snow_mount1.jpg"
// import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

// import {Navbar, Nav, Container, NavDropdown}  from 'react-bootstrap';
// import Typed from "typed.js"
// import { useEffect, useRef } from "react";
// import Typed from "typed.js"



function About() {

    // create ref element

    // const el = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: ["Think", "Learn", "Work", "Create", "Inspire", "Share"],
    //         startDelay: 300,
    //         typeSpeed: 150,
    //         backDelay: 150,
    //         backSpeed: 150,
    //         smartBackSpace:true,
    //         showCursor: false,
    //         loop: true,
    //     })

    //         // destroying

    //     return() => {
    //             typed.destroy();
    //         };

    // }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div>
             
        <>
                
            <Carousel style={{ padding: 10 }} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item  style={{ height: 600 }}>
                    <img
                    // className="d-block w-100"
                    src={slide1}
                    className='img-fluid shadow-2-strong'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 600 }}>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: 600 }}>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    </div>
  );    

               




}



export default About;