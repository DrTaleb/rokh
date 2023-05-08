import bg from "./bg/smile.jpg"
import GroupIcon from '@mui/icons-material/Group';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import PersonIcon from '@mui/icons-material/Person';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export default function Smile() {


    return (
        <>
            <img className="wave-img w-100 bg-light" src={"img/Vector%20(1)%20(1).webp"} alt=""/>
        <section id="smile"  style={{
            background: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize : "cover"
        }}>
            <div className="smileContainer">
                <div className="smileContent">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 rowItems">
                            <GroupIcon style={{fontSize : "40px"}} className={"text-white"}></GroupIcon>
                            <h2 className="counter">248</h2>
                            <p>کاربران فعال</p>
                        </div>
                        <div className="col-sm-6 col-lg-3 rowItems">
                            <DownloadDoneIcon style={{fontSize : "40px"}} className={"text-white"}></DownloadDoneIcon>
                            <h2 className="counter">640</h2>
                            <p>خدمات انجام شده</p>
                        </div>
                        <div className="col-sm-6 col-lg-3 rowItems">
                            <PersonIcon style={{fontSize : "40px"}} className={"text-white"}></PersonIcon>
                            <h2 className="counter">240</h2>
                            <p>پزشکان ما</p>
                        </div>
                        <div className="col-sm-6 col-lg-3 rowItems">
                            <StarBorderIcon style={{fontSize : "40px"}} className={"text-white"}></StarBorderIcon>
                            <h2 className="counter">24</h2>
                            <p>امتیاز خدمات</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}