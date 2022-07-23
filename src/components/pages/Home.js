import React from 'react';
import '../../styles/home.css';
import { Carousel } from 'react-carousel-minimal';
// import Slider1 from 'Slider1.jpg'

export default function Home() {
    const data = [
        {
            image:"/Slider1.jpg",
        },
        {
            image:"/TinyHome18.png",
        },
        {
            image:"/TinyHome20.jpg",
        },
        {
            image:"/TinyHome19.png",
        },
        {
            image:"/TinyHome21.jpg",
        }
    ]
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return(
        <div className="App">
        <div style={{ textAlign: "center" }}>
          {/* <h2>React Carousel Minimal</h2>
          <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="85vw"
              height="80vh"
              radius="10px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
            //   captionPosition="bottom"
              automatic={true}
              dots={true}
            //   pauseIconColor="white"
            //   pauseIconSize="40px"
              slideBackgroundColor="black"
              slideImageFit="contain"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "68vw",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>

    )
}