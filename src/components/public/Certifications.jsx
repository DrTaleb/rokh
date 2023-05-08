import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

export default function Certifications({data}){


    return(
        <div className={"bg-light pb-5"}>
            <img className="w-100 pb-2" src={"/img/wave.webp"} alt="#"/>
            <div  className={"container"}>
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

                    <SwiperSlide>
                        <img className={"img-fluid"} src={"/img/b1.jpg"} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"img-fluid"} src={"/img/b1.jpg"} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"img-fluid"} src={"/img/b1.jpg"} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"img-fluid"} src={"/img/b1.jpg"} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={"img-fluid"} src={"/img/b1.jpg"} alt=""/>
                    </SwiperSlide>


                </Swiper>
            </div>
            {/*<img className="wave-img w-100" src={"img/Vector%20(1)%20(1).webp"} alt=""/>*/}
        </div>
    )
}