import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

export default function Certifications({data}){


    return(
        <div id={"certificate"}>
            <Swiper
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={60}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-100 mt-5"
            >
                {data.map(item =>
                    <SwiperSlide key={item.id}>
                        <img src={item.image_url} alt=""/>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}