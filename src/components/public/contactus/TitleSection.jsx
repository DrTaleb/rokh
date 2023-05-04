import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function TitleSection(){


    return(
        <div className="contactContainer">
            <div className="contactText-header">
                <h3>تماس با ما</h3>
            </div>
            <div className="contactText-detail">
                <p>برای شروع با ما تماس بگیرید</p>
            </div>
            <span className="line"></span>
            <div className="contactContent">
                <div className="contentForm">
                    <form action="#">
                        <div className="user">
                            <div className="userItem">
                                <label className="labelUser" htmlFor="fName">نام کاربری</label><br/>
                                <input className="inputUser" type="text" id="fName" placeholder="نام کاربری"/>
                            </div>
                            <div className="userItem">
                                <label className="labelUser" htmlFor="email">ایمیل</label><br/>
                                <input className="inputUser" type="email" id="email" placeholder="ایمل"/>
                            </div>
                        </div>
                        <label className="labelUser" htmlFor="sub">موضوع</label><br/>
                        <input type="text" className="Subject" id="sub" placeholder="موضوع"/>
                            <label className="labelUser" htmlFor="message">پیام</label><br/>
                            <textarea className="message" name="message" id="" cols="30" rows="8"></textarea>
                            <div>
                                <button className="send">ارسال پیام</button>
                            </div>
                    </form>
                </div>
                <div className="contentAddress">
                    <div className="location">
                        <img src="plugins/font-awesome/icons/location-dot-solid.svg" alt=""/>
                            <div className="locationText">
                                <h4>موقیعت:</h4>
                                <p>مشهد،خیابان شریعنی،شریعتی 59</p>
                            </div>
                    </div>
                    <div className="location">
                        <img src="plugins/font-awesome/icons/envelope-solid.svg" alt=""/>
                            <div className="locationText">
                                <h4>ایمیل:</h4>
                                <p>workout.oj@gmail.com</p>
                            </div>
                    </div>
                    <div className="location">
                        <img src="plugins/font-awesome/icons/phone-solid.svg" alt=""/>
                            <div className="locationText">
                                <h4>تماس:</h4>
                                <p>09123456789</p>
                            </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.1899391460825!2d59.50557869008213!3d36.356177916408235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd02af337b3cde416!2zMzbCsDIxJzIyLjIiTiA1OcKwMzAnMzYuMiJF!5e0!3m2!1sen!2snl!4v1674729748135!5m2!1sen!2snl"
                        frameBorder="0"
                        // style="border:0; width: 100%; height: 290px; box-shadow: 0 0 20px 5px rgb(214, 214, 214);"
                        allowFullScreen>
                    </iframe>

                </div>
            </div>
        </div>
    )
}