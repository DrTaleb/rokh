import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import {Button} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Blogs() {


    return (
        <section id="news" className="reveal">
            <div className="newsContainer">
                <div className="newstitle">
                    <h3>آخرین اخبار</h3>
                    <img src={"/img/title-icon.png"} alt=""/>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
                <div className="newsContent">
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
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={60}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper w-100 mt-5 p-3"
                    >
                        <SwiperSlide>
                            <div className="newsSlide shadow">
                                <div className="slideItems">
                                    <div className="newsImg">
                                        <img src={"/img/news2.jpg"} alt=""/>
                                        <div className="newsBox"></div>
                                    </div>
                                    <div className="newsComment">
                                        <div>
                                            <CalendarMonthIcon sx={{fontSize: "15px"}}></CalendarMonthIcon>
                                            <p>24 فروردین</p>
                                        </div>
                                        <div>
                                            <ChatBubbleIcon sx={{fontSize: "15px"}}></ChatBubbleIcon>
                                            <p>248</p>
                                        </div>
                                    </div>
                                    <div className="newsBody">
                                        <h4>این یک کامنت با یک عکس میباشد</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                            برای
                                            شرایط
                                            فعلی
                                            تکنولوژی مورد نیاز
                                        </p>
                                    </div>
                                    <div className="newsBtn">
                                        <Button>بیشتر بدانید</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="newsSlide shadow">
                                <div className="slideItems">
                                    <div className="newsImg">
                                        <img src={"/img/news2.jpg"} alt=""/>
                                        <div className="newsBox"></div>
                                    </div>
                                    <div className="newsComment">
                                        <div>
                                            <CalendarMonthIcon sx={{fontSize: "15px"}}></CalendarMonthIcon>
                                            <p>24 فروردین</p>
                                        </div>
                                        <div>
                                            <ChatBubbleIcon sx={{fontSize: "15px"}}></ChatBubbleIcon>
                                            <p>248</p>
                                        </div>
                                    </div>
                                    <div className="newsBody">
                                        <h4>این یک کامنت با یک عکس میباشد</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                            برای
                                            شرایط
                                            فعلی
                                            تکنولوژی مورد نیاز
                                        </p>
                                    </div>
                                    <div className="newsBtn">
                                        <Button>بیشتر بدانید</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="newsSlide shadow">
                                <div className="slideItems">
                                    <div className="newsImg">
                                        <img src={"/img/news2.jpg"} alt=""/>
                                        <div className="newsBox"></div>
                                    </div>
                                    <div className="newsComment">
                                        <div>
                                            <CalendarMonthIcon sx={{fontSize: "15px"}}></CalendarMonthIcon>
                                            <p>24 فروردین</p>
                                        </div>
                                        <div>
                                            <ChatBubbleIcon sx={{fontSize: "15px"}}></ChatBubbleIcon>
                                            <p>248</p>
                                        </div>
                                    </div>
                                    <div className="newsBody">
                                        <h4>این یک کامنت با یک عکس میباشد</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                            برای
                                            شرایط
                                            فعلی
                                            تکنولوژی مورد نیاز
                                        </p>
                                    </div>
                                    <div className="newsBtn">
                                        <Button>بیشتر بدانید</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="newsSlide shadow">
                                <div className="slideItems">
                                    <div className="newsImg">
                                        <img src={"/img/news2.jpg"} alt=""/>
                                        <div className="newsBox"></div>
                                    </div>
                                    <div className="newsComment">
                                        <div>
                                            <CalendarMonthIcon sx={{fontSize: "15px"}}></CalendarMonthIcon>
                                            <p>24 فروردین</p>
                                        </div>
                                        <div>
                                            <ChatBubbleIcon sx={{fontSize: "15px"}}></ChatBubbleIcon>
                                            <p>248</p>
                                        </div>
                                    </div>
                                    <div className="newsBody">
                                        <h4>این یک کامنت با یک عکس میباشد</h4>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                            برای
                                            شرایط
                                            فعلی
                                            تکنولوژی مورد نیاز
                                        </p>
                                    </div>
                                    <div className="newsBtn">
                                        <Button>بیشتر بدانید</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}