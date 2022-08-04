import Carousel from "react-bootstrap/Carousel";
import slider1 from './Images/breakfast.jfif';
import slider2 from './Images/homemade.jpg';
import slider3 from './Images/liters.jpg';
const CarouselComponent = () => {
    return ( 
        <div>
            <Carousel>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3  className="sliderText">BREAKFAST</h3>
          <p  className="sliderText">You can choose from our breakfast menu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">HOME MADE</h3>
          <p className="sliderText"> We do Homemade delicacies. Correct African dish </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText"> PPACKAGES</h3>
          <p className="sliderText">
            Are you lazy to cook, name the dish, we're just a dm away
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
     );
}
 
export default CarouselComponent;