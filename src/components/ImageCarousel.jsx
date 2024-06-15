import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../image.js';

const ImageSlider = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }; 
    return (
        <>
        <div className="carousel">
            <Slider {...settings}>
                {images.map ((item)=> (
                    <div key={item.id}>
                        <img className = "carouselImages" src={item.src} alt={item.alt}/>
                    </div>
                ))}
            </Slider>
        </div>
        
        </>
    );
};

export default ImageSlider;