import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Button} from "@mui/material";
export default function Header(){



    return(
       <>
           <section id="title">
               <div className="d-flex flex-row align-items-center justify-content-between px-2 px-md-5 py-sm-2">
                   <div className="d-flex flex-sm-row flex-column align-items-center gap-sm-5 gap-2">
                       <div className="d-flex flex-row align-items-center gap-3">
                           <LocalPhoneIcon className={"text-white"}></LocalPhoneIcon>
                           <span className={"text-white"}>تلفن : 05137662666</span>
                       </div>
                       <div className="d-flex flex-row align-items-center gap-3">
                           <LocationOnIcon className={"text-white"}></LocationOnIcon>
                           <span className={"text-white"}>آدرس : مشهد ، بوار مجد </span>
                       </div>
                   </div>
                   <div className="social mt-sm-0">
                       <div className="appoint">
                           {/*<a href="sub_page/takeTurn.html">گرفتن نوبت پزشک</a>*/}
                           <Button size={"large"} className={"py-3 my-1"} color={"error"} variant={"contained"}>گرفتن نوبت پزشک</Button>
                       </div>
                   </div>
               </div>
           </section>
           <nav id="navigation">
               <div className="navContainer">
                   <div className="nav">
                       <div className="bars">
                           <button id="barBtn" className="barBtn">
                               <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                   <path
                                       d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h42C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                               </svg>
                           </button>
                           {/*<div className="searchBar">*/}
                           {/*    <a id="s-btn" href="">*/}
                           {/*        <img src="plugins/font-awesome/icons/magnifying-glass-solid.svg" alt="">*/}
                           {/*    </a>*/}
                           {/*</div>*/}
                       </div>
                       <ul id="navUl" className="nav-ul nav-ul-respons">
                           <li className="li-respons"><a className="active-a" href="#">صفحه اصلی</a></li>
                           <li className="li-respons"><a href="">درباره ما</a></li>
                           <li className="li-respons"><a href="">بلاگ</a></li>
                           <li className="li-respons"><a href="">تماس با ما</a></li>
                       </ul>
                   </div>
                   <div className="logo">
                       <img src={"/img/static/logo copy.png"} alt=""/>
                   </div>
               </div>
               <div id="search-box" className="search-box">
                   <CloseIcon id="clse-btn"></CloseIcon>
                   <input type="text" name="" id="searches" placeholder="جستوجو کنید"/>
               </div>

           </nav>

       </>
    )
}