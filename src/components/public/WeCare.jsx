import {useEffect} from "react";
import {Button} from "@mui/material";

export default function WeCare(){

    useEffect(()=>{
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
    },[])

    return(
        <section id="weCare" className="reveal">
            <div className="weCareContainer">
                <div className="row weCareContent">
                    <div className="col-6 weCareImg">
                        <img src={"/img/2.jpg"} alt=""/>
                    </div>
                    <div className="col-6 weCareText">
                        <h1>ما به دندان های شما <span>اهمیت</span> میدهیم</h1>
                        <p>ما صمیمانه معتقدیم که مراجعه به دندانپزشک نباید یک تجربه ترسناک یا استرس زا باشد! ما برای همه
                            مشتریان جوان و بزرگسال خود که به دندانپزشک مراجعه می کنند، یک تجربه آرامش یکسان راحت ارائه
                            می دهیم!
                        </p>
                        <div className="hologram">
                            <img src={"/img/1.png"} alt=""/>
                                <img src={"/img/2.png"} alt=""/>
                                    <img src={"/img/3.png"} alt=""/>
                        </div>
                        {/*<button></button>*/}
                        <Button>گرفتن نوبت از پزشک</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}