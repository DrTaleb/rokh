import {Button} from "@mui/material";
import bg from "./bg/rokhLogo.png"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Footer(){


    return(


    <div className="container-fluid">
        <div className="wraper">
            <div className="logo-box" id="logoBox" style={{
                background: `url(${bg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize : "cover"
            }}></div>


            <div className="phon-box " id="phonBox">
                <a href="" className="text-center">
                    <i className="fas fa-phone"></i>
                    Phone number
                </a>
            </div>

            <div className="loction-box" id="loctionBox">
                <a href="" className="text-center">
                    <i className="fas fa-location-dot"></i>
                    Address
                </a>
            </div>

            <div className="web-box" id="webBox">
                <a href="" className="text-center">
                    <i className="fas fa-globe"></i>
                    hanousa.ir
                </a>
            </div>

            <div className="insta-ID" id="instaID">
                <a href="" className="text-center">
                    <i className="fab fa-instagram"></i>
                    @rokh_dental
                </a>
            </div>
        </div>
    </div>
    )
}