import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Button, TextField} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
export default function ContactusSection(){


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
                        <div className="user mt-5">
                            <div className="userItem px-2">
                                <TextField
                                    className={"col-12 content h-100"}
                                    label="نام و نام خانوادگی"
                                    // value={title}
                                    // onChange={titleHandler}
                                    variant="outlined"/>
                            </div>
                            <div className="userItem px-2">
                                <TextField
                                    className={"col-12 content h-100"}
                                    label="ایمیل"
                                    // value={title}
                                    // onChange={titleHandler}
                                    variant="outlined"/>
                            </div>
                        </div>
                        <TextField
                            className={"col-12 content h-100 px-2 mt-4"}
                            label="عنوان"
                            // value={title}
                            // onChange={titleHandler}
                            variant="outlined"/>
                        <TextField
                            className={"col-12 content h-100 px-2 mt-4"}
                            label="پیام"
                            multiline
                            rows={10}
                            // value={title}
                            // onChange={titleHandler}
                            variant="outlined"/>
                            <div>
                                <Button className="send mt-3">ارسال پیام</Button>
                            </div>
                    </form>
                </div>
                <div className="contentAddress">
                    <div className="location">
                        <LocationOnIcon></LocationOnIcon>
                            <div className="locationText">
                                <h4>موقعیت:</h4>
                                <p>مشهد،خیابان شریعنی،شریعتی 59</p>
                            </div>
                    </div>
                    <div className="location">
                        <AlternateEmailIcon></AlternateEmailIcon>
                            <div className="locationText">
                                <h4>ایمیل:</h4>
                                <p>workout.oj@gmail.com</p>
                            </div>
                    </div>
                    <div className="location">
                        <LocalPhoneIcon></LocalPhoneIcon>
                            <div className="locationText">
                                <h4>تماس:</h4>
                                <p>09123456789</p>
                            </div>
                    </div>
                    <iframe
                        className={"w-100 h290px shadow"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.1899391460825!2d59.50557869008213!3d36.356177916408235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd02af337b3cde416!2zMzbCsDIxJzIyLjIiTiA1OcKwMzAnMzYuMiJF!5e0!3m2!1sen!2snl!4v1674729748135!5m2!1sen!2snl"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>

                </div>
            </div>
        </div>
    )
}