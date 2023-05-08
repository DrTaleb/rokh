import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import Carousel from "react-bootstrap/Carousel";
import {Button} from "@mui/material";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className={"bg-light"}>
            <img className="w-100 pb-2" src={"/img/wave.webp"} alt="#"/>
            <div>
                <Carousel slide={true} className={"w-100 pt-3"}>
                    <Carousel.Item>
                        <div className={"container"}>
                            <div className="row d-flex justify-content-around align-items-center m-0 p-0">
                                <div className="col-12 col-lg-4  order-1 order-lg-0">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="col-12 me-5">
                                            <h3 className="fw-bolder text-center text-lg-start my-3">
                                                سرامیک ونیز
                                            </h3>
                                        </div>
                                        <p className="text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                                        </p>
                                        <div
                                            className="col-12 d-flex flex-row justify-content-center justify-content-lg-end mb-4">
                                            <Button variant={"contained"} color={"error"}
                                                    className="col-md-4 col-5 mt-4 shadow">مشاوره رایگان</Button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-12 col-lg-5 d-flex flex-row justify-content-start img-product order-0 order-lg-1"
                                    data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <img className="rounded-4 w-100 mb-4"
                                         src={"/img/dep3.jpg"}/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={"container my-4"}>
                            <div className="row d-flex justify-content-around align-items-center m-0 p-0">
                                <div className="col-12 col-lg-4  order-1 order-lg-0">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="col-12 me-5">
                                            <h3 className="fw-bolder text-center text-lg-start my-3">
                                                ایمپلنت ونیز
                                            </h3>
                                        </div>
                                        <p className="text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                                        </p>
                                        <div
                                            className="col-12 d-flex flex-row justify-content-center justify-content-lg-end mb-4">
                                            <Button variant={"contained"} color={"error"}
                                                    className="col-md-4 col-5 mt-4 shadow">مشاوره رایگان</Button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-12 col-lg-5 d-flex flex-row justify-content-start img-product order-0 order-lg-1"
                                    data-aos="fade-up"
                                    data-aos-duration="1000">
                                    <img className="rounded-4 w-100 mb-4"
                                         src={"/img/dep3.jpg"}/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <img className="wave-img w-100" src={"img/Vector%20(1)%20(1).webp"} alt=""/>
        </section>
    );
}