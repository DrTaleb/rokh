import {useEffect} from "react";
import {Button} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "react-bootstrap/Container";

export default function WeCare() {

    useEffect(() => {


    }, [])

    return (
        <div className={"px-md-5"}>
            <div className={"d-flex flex-column flex-sm-row justify-content-between"}>
                <div className="container-card d-flex flex-column align-items-center gap-5">

                    <img className={"w-50"} src={"/img/static/image 1.png"} alt=""/>
                    <div className="moshakhasat">
                        <p>مشخصات پزشک</p><br/>
                        <p>شماره پزشکی</p><br/>
                        <p>شماره پزشکی</p><br/>
                    </div>

                </div>
                {/*<div className="container">*/}
                {/*    /!*<div className="out" onMouseLeave="myFunction1()"></div>*!/*/}
                {/*    /!*<div className="ron" onMouseOver="myFunction()"></div>*!/*/}
                {/*    <img src={"/img/Frame.png"} width={"230px"} alt=""/>*/}
                {/*    <div className="cont">*/}
                {/*        <div className="left" id="left">*/}
                {/*            <div className="col col3">*/}
                {/*                <img src={"/img/left-t.png"} width="118px" height="135px" alt=""/>*/}
                {/*                    <span>مشاوره </span>*/}
                {/*            </div>*/}
                {/*            <div className="col col4">*/}
                {/*                <img src={"/img/left-b.png"} width="118px" height="105px" alt=""/>*/}
                {/*                    <span>ارتباط</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="right" id="right">*/}
                {/*            <div className="col col1">*/}
                {/*                <img src={"/img/right-t.png"} width="118px" height="135px" alt=""/>*/}
                {/*                    <span>نوبت دهی</span>*/}
                {/*            </div>*/}
                {/*            <div className="col col2">*/}
                {/*                <img src={"/img/right-b.png"} width="118px" height="105px" alt=""/>*/}
                {/*                    <span>مقاله</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*    </div>*/}
                <div className="container-card">

                    <a href="#">دریافت نوبت</a>


                    <div className="moshakhasat">
                        <p>کاربران آنلاین</p><span>5</span><br/>
                        <p>خدمات ارائه شده</p><span>5</span><br/>
                        <p>رضایت مندی</p><span>5</span><br/>
                        <div className="stars">
                            <img src={"/img/static/Frame 458.png"} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

)
}