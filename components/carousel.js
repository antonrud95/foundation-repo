import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBody = ({children, slideritems}) => {
    const settings = {
        customPaging: function(i) {
            return (
                <div>
                    <div key={slideritems[i].id} className='flex pt-30 transition duration-500 ease-in-out border-t-3 border-transparent hover:border-purple focus:border-purple'>
                        <div className='w-50 h-50 mr-xs'>
                          <img src={slideritems[i].photo.url} className='w-full h-full'/>
                        </div>
                        <div className='hidden md:flex md:flex-col text-left'>
                          <h4 className='text-18-30'>{slideritems[i].name}</h4>
                          <p className='text-15-28'>{slideritems[i].position}</p>
                        </div>
                    </div>
                </div>
            )
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          {children}
        </Slider>
      );
}
export default CarouselBody