import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Footer(){


    return(
        <footer id="footer">
            <div className="footerContainer">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-3 ">
                        <div className="footerAbout">
                            <h2>درباره ما</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است
                            </p>
                            <div className="footerSocial">
                               <FacebookIcon></FacebookIcon>
                                <TelegramIcon></TelegramIcon>
                               <WhatsAppIcon></WhatsAppIcon>
                               <InstagramIcon></InstagramIcon>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3 ">
                        <div className="footerExplor">
                            <h2>کاوش کنید</h2>
                            <div className="export-uls">
                                <ul>
                                    <li><a href="#">درباره ما</a></li>
                                    <li><a href="#">سریس ها</a></li>
                                    <li><a href="#">گالری</a></li>
                                    <li><a href="#">قیمت ها</a></li>
                                    <li><a href="#">قوانین</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">مطب</a></li>
                                    <li><a href="#">خدمات ما</a></li>
                                    <li><a href="#">پشتیبانی</a></li>
                                    <li><a href="#">تماس با ما</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3 ">
                        <div className="footerNews">
                            <h2>آخرین اخبار</h2>
                            <div className="newsItems">
                                <div className="newsContent">
                                    <img src={"/img/n1.jpg"} alt=""/>
                                        <div className="linkNews">
                                            <p>12 فرووردین </p>
                                            <a href="#">ما به دندان های شما اهمیت میدهیم</a>
                                        </div>
                                </div>
                                <div className="newsContent">
                                    <img src={"/img/n1.jpg"} alt=""/>
                                        <div className="linkNews">
                                            <p>12 فرووردین </p>
                                            <a href="#">ما به دندان های شما اهمیت میدهیم</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-3 ">
                        <div className="footerContact">
                            <h2>ارتباط با ما</h2>
                            <div className="footerItems">
                                <div>
                                    <LocationOnIcon></LocationOnIcon>
                                        <p>شمهد ، بلوار مجد ، محد 26</p>
                                </div>
                                <div>
                                    <AlternateEmailIcon></AlternateEmailIcon>
                                        <p>info@gmail.com</p>
                                </div>
                                <div>
                                    <LocalPhoneIcon></LocalPhoneIcon>
                                        <p>0513-2568-9687</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}