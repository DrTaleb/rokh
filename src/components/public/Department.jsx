import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import Carousel from "react-bootstrap/Carousel";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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
                <Carousel slide={true} className={"w-100"}>
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
                                            یکی از مسائل مهم در پرورش قارچ کنترل دقیق دما و رطوبت سالن ها می باشد. برای
                                            بازدهی بیشتر در تولید انواع قارچ باید این مولفه را در نظر گرفت. بنابراین عملکرد
                                            صحیح و به موقع تجهیزات گرمایشی و سرمایشی و تولید رطوبت کافی شرایط را برای برداشت
                                            موفق فراهم می کند. به همین دلیل، پرورش دهندگان حرفه ای قارچ معتقدند که دما
                                            مهمترین عامل در پرورش قارچ است.
                                        </p>
                                        <div
                                            className="col-12 d-flex flex-row justify-content-center justify-content-lg-end mb-4">
                                            <a href="https://paya360.ir/landing/salone-gharch"
                                               className="col-md-4 col-5 btn my-btn-blue mt-4 shadow"> جزئیات
                                                محصول </a>
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
                       <div className={"container"}>
                           <div className="row d-flex justify-content-around align-items-center m-0 p-0">
                               <div className="col-12 col-lg-4  order-1 order-lg-0">
                                   <div className="d-flex flex-column justify-content-center">
                                       <div className="col-12 me-5">
                                           <h3 className="fw-bolder text-center text-lg-start my-3">
                                               سالن قارچ
                                           </h3>
                                       </div>
                                       <p className="text-justify">
                                           یکی از مسائل مهم در پرورش قارچ کنترل دقیق دما و رطوبت سالن ها می باشد. برای
                                           بازدهی بیشتر در تولید انواع قارچ باید این مولفه را در نظر گرفت. بنابراین عملکرد
                                           صحیح و به موقع تجهیزات گرمایشی و سرمایشی و تولید رطوبت کافی شرایط را برای برداشت
                                           موفق فراهم می کند. به همین دلیل، پرورش دهندگان حرفه ای قارچ معتقدند که دما
                                           مهمترین عامل در پرورش قارچ است.
                                       </p>
                                       <div
                                           className="col-12 d-flex flex-row justify-content-center justify-content-lg-end mb-4">
                                           <a href="https://paya360.ir/landing/salone-gharch"
                                              className="col-md-4 col-5 btn my-btn-blue mt-4 shadow"> جزئیات
                                               محصول </a>
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