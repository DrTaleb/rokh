import {Button} from "@mui/material";
import bg from "./bg/smile.jpg"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Contact(){


    return(
        <section id="contact" className="reveal" style={{
            background: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize : "cover"
        }}>
            <div className="conactContainer">
                <div className="contact-content">
                    <div className="call">
                        <h2>0513-245-6952</h2>
                        <LocalPhoneIcon fontSize={"large"}></LocalPhoneIcon>
                    </div>
                    <h2>برای موارد اورژانسی می توانید با ما در ارتباط باشید</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و<br/> برای شرایط فعلی تکنولوژی مورد
                            نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                    <Button>با ما تماس بگیرید</Button>
                </div>
            </div>
        </section>
    )
}