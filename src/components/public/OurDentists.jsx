import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import {Button} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function OurDentists(){



    return(
        <section id="dentist" className="reveal">
            <div className="dentistContainer w-100">
                <div className="dentistTitle">
                    <h3>پزشکان ما</h3>
                    <img src="assets/img/title-icon.png" alt=""/>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                </div>
                <div>
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
                                <div className="dentistSlide">
                                    <div className="img">
                                        <img src={"/img/dentis1.jpg"} alt=""/>
                                        <div className="dentBox"></div>
                                    </div>
                                    <h4>Dr.William</h4>
                                    <p>دندان پزشک</p>
                                    <div className="dent-social">
                                        <Button variant="contained" endIcon={<InfoIcon />}>
                                            پروفایل کاربری
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        <SwiperSlide>
                            <div className="dentistSlide">
                                <div className="img">
                                    <img src={"/img/dentis1.jpg"} alt=""/>
                                    <div className="dentBox"></div>
                                </div>
                                <h4>Dr.William</h4>
                                <p>دندان پزشک</p>
                                <div className="dent-social">
                                    <Button variant="contained" endIcon={<InfoIcon />}>
                                        پروفایل کاربری
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dentistSlide">
                                <div className="img">
                                    <img src={"/img/dentis1.jpg"} alt=""/>
                                    <div className="dentBox"></div>
                                </div>
                                <h4>Dr.William</h4>
                                <p>دندان پزشک</p>
                                <div className="dent-social">
                                    <Button variant="contained" endIcon={<InfoIcon />}>
                                        پروفایل کاربری
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="dentistSlide">
                                <div className="img">
                                    <img src={"/img/dentis1.jpg"} alt=""/>
                                    <div className="dentBox"></div>
                                </div>
                                <h4>Dr.William</h4>
                                <p>دندان پزشک</p>
                                <div className="dent-social">
                                    <Button variant="contained" endIcon={<InfoIcon />}>
                                        پروفایل کاربری
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="dentistContent">
                    <div className="swiper dentistSwiper">
                        <div className="swiper-wrapper">

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}