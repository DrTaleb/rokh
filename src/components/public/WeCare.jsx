import {useEffect} from "react";
import {Button} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function WeCare() {

    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active-r");

                } else {
                    reveals[i].classList.remove("active-r");
                }
            }
        }

        window.addEventListener("scroll", reveal);
    }, [])

    return (
        <section className="bg-light mt-custom" id={"reveal"}>
            <img className="w-100 pb-5" src={"/img/wave.webp"} alt="#"/>
            <div className="container">
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="d-flex flex-column px-2 gap-3">
                            <h3 className="box text-center text-md-start border-start border-4 border-danger ps-3">ما به دندان های شما اهمیت میدهیم</h3>
                            <p className="text-secondary  pe-2 mt-3 text-justify">
                                ما صمیمانه معتقدیم که مراجعه به دندانپزشک نباید یک تجربه ترسناک یا استرس زا باشد! ما
                                برای همه مشتریان جوان و بزرگسال خود که به دندانپزشک مراجعه می کنند، یک تجربه آرامش یکسان
                                راحت ارائه می دهیم!
                            </p>
                            <div className="d-flex flex-row justify-content-between ">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex flex-row gap-3 align-items-center">
                                        <CheckCircleIcon className={"text-main-yellow"}></CheckCircleIcon>
                                        <span className="small mt-1 fw-bold">مشاوره</span>
                                    </div>
                                    <div className="py-3 border-start border-1 ms-2"></div>
                                    <div className="d-flex flex-row gap-3 align-items-center">
                                        <CheckCircleIcon className={"text-main-yellow"}></CheckCircleIcon>
                                        <span className="small mt-1">امکان سنجی</span>
                                    </div>
                                    <div className="py-3 border-start border-1 ms-2"></div>
                                    <div className="d-flex flex-row gap-3 align-items-center">
                                        <CheckCircleIcon className={"text-main-yellow"}></CheckCircleIcon>
                                        <span className="small mt-1">برآورد هزینه</span>
                                    </div>
                                    <div className="py-3 border-start border-1 ms-2"></div>
                                    <div className="d-flex flex-row gap-3 align-items-center">
                                        <CheckCircleIcon className={"text-main-yellow"}></CheckCircleIcon>
                                        <span className="small mt-1">جراحی</span>
                                    </div>
                                    <div className="py-3 border-start border-1 ms-2"></div>
                                    <div className="d-flex flex-row gap-3 align-items-center">
                                        <CheckCircleIcon className={"text-main-red"}></CheckCircleIcon>
                                        <span className="small mt-1">مراقبت های بعد عمل</span>
                                    </div>
                                </div>
                            </div>
                            <Button className={"col-4 align-self-end bg-main-red"} variant={"contained"}>تماس با ما</Button>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex flex-column align-items-center mt-5 mt-md-0">
                        <img className="col-9 rounded-3 d-none d-md-block" src={"/img/dentist4.jpg"} alt=""/>
                    </div>
                </div>
            </div>
            <img className="wave-img w-100" src={"img/Vector%20(1)%20(1).webp"} alt=""/>
        </section>
    )
}