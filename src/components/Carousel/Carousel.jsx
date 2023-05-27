import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./Carousel.css";

export default function Carousel() {
  return (
    <MDBCarousel showControls interval={4000} className="main-carousel">
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement src="img\cutlery25.jpg" alt="..." />
          {/* <MDBCarouselCaption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="/img/cutlery17.jpg" alt="..." />
          {/* <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src="/img/cutlery19.jpg" alt="..." />
          {/* <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption> */}
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

//E:\vip_cutlery\frontend\build\
