import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Button} from "@mui/material";

export default function Aboutus() {


    return (
        <>
            <section className="bg-light">
                <img className="w-100 pb-5" src={"/img/wave.webp"}/>
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div className="col-lg-6">
                            <div className="d-flex flex-column">
                                <h1 className="mt-3">آشنایی با ما</h1>
                                <p className="text-secondary pe-5 mt-3 text-justify">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <div className="d-flex flex-row justify-content-between ">
                                    <div className="d-flex flex-column align-items-start">
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <CheckCircleIcon></CheckCircleIcon>
                                            <span className="small mt-1 fw-bold">مشاوره</span>
                                        </div>
                                        <div className="py-3 border-start border-1 ms-2"></div>
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <CheckCircleIcon></CheckCircleIcon>
                                            <span className="small mt-1">امکان سنجی</span>
                                        </div>
                                        <div className="py-3 border-start border-1 ms-2"></div>
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <CheckCircleIcon></CheckCircleIcon>
                                            <span className="small mt-1">برآورد هزینه</span>
                                        </div>
                                        <div className="py-3 border-start border-1 ms-2"></div>
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <CheckCircleIcon></CheckCircleIcon>
                                            <span className="small mt-1">جراحی</span>
                                        </div>
                                        <div className="py-3 border-start border-1 ms-2"></div>
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <CheckCircleIcon className={"text-warning"}></CheckCircleIcon>
                                            <span className="small mt-1">مراقبت های بعد عمل</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className={"col-4 align-self-end bg-danger"} variant={"contained"}>تماس با ما</Button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 d-flex flex-column align-items-center mt-5 mt-md-0">
                            <img className="col-9 col-md-8 rounded-4" src={"/img/dentist3.jpg"}/>
                        </div>
                    </div>
                </div>
                <img className="w-100" src={"img/Vector%20(1)%20(1).webp"}/>
            </section>
            <section className="bg-light">
                <img className="w-100 pb-5" src={"/img/wave.webp"}/>
                <div
                    className="container row flex-wrap text-center align-items-center justify-content-center mx-auto more-contact-us">
                    <h2 className="text-center mb-5">تماس با ما</h2>
                    <a href="#" className="col-6 col-sm-5 col-md-3 col-xl-2 mx-2 mb-2 text-decoration-none border-2 border rounded-3 py-4 border-secondary text-secondary">
                        <i className="fa-solid fa-phone"></i>
                        <h2>تلفن</h2>
                        <p>۰21-28425066</p>
                    </a>
                    <a href="#" className="col-6 col-sm-5 col-md-3 col-xl-2 mx-2 mb-2 text-decoration-none border-2 border rounded-3 py-4 border-warning text-warning">
                        <i className="fa-solid fa-headset"></i>
                        <h2>پشتیبانی</h2>
                        <p>info@paya360.ir</p>
                    </a>
                    <a href="#" className="col-6 col-sm-5 col-md-3 col-xl-2 mx-2 mb-2 text-decoration-none border-2 border rounded-3 py-4 border-danger text-danger">
                        <i className="fa-regular fa-envelope"></i>
                        <h2>ایمیل</h2>
                        <p>info@paya360.ir</p>
                    </a>
                </div>
                <img className="w-100" src={"img/Vector%20(1)%20(1).webp"}/>
            </section>
        </>
    )
}