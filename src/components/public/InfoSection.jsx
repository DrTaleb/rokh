export default function InfoSection() {

    return (
        <section id="info">
            <div className="info">
                <div className="row rowInfo gap-2">
                    <div className="col-sm-12 col-lg-6 col-xl rounded-3 shadow-lg topDoc">
                        <h3>پزشکان برتر</h3>
                        <p>بهترین ها</p>
                        <p className="bodyText">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                            از طراحان
                            گرافیک است

                        </p>
                        <button>درباره ما</button>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl wt rounded-3 shadow-lg shadow-sm">
                        <h4>ساعات کار</h4>
                        <div className="workOut">
                            <div className="workItems bb">
                                <div className="week">
                                    <p>دوشنبه</p>
                                </div>
                                <div className="times">
                                    <p>8:00am - 12:00pm</p>
                                </div>
                            </div>
                            <div className="workItems bb">
                                <div className="week">
                                    <p>پنجشنبه</p>
                                </div>
                                <div className="times">
                                    <p>8:00am - 12:00pm</p>
                                </div>
                            </div>
                            <div className="workItems">
                                <div className="week">
                                    <p>جمعه</p>
                                </div>
                                <div className="times">
                                    <p>8:00am - 12:00pm</p>
                                </div>
                            </div>
                        </div>
                        <button>نوبت پزشک</button>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl rounded-3 shadow-lg service">
                        <h4>پشتیبانی 24 ساعته</h4>
                        <p>سرویس ها</p>
                        <p className="bodyText">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                        <button>بیشتر بدانید</button>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl rounded-3 shadow-lg contact">
                        <div>
                            <h4>گرفتن نوبت</h4>
                            <p>راحت ترین</p>
                        </div>
                        <h3>0513-242-5698</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ

                        </p>
                        <button>تماس با ما</button>
                    </div>

                </div>
            </div>
        </section>
        // <div className={"info-section d-flex flex-column align-items-center"}>
        //     <div className={"info-inner shadow-sm d-flex flex-column align-items-center"}>
        //         <section className="section-boxes">
        //             <div className="container mt-5">
        //                 <div className={"w-100"}>
        //                     <div className="seven">
        //                         <h1>کلینیک زیبایی رخ</h1>
        //                     </div>
        //                 </div>
        //                 <div
        //                     className="d-flex flex-md-row flex-column justify-content-around px-5 align-items-center gap-4 gap-md-3">
        //                     <a href="" className="text-decoration-none col-md col-12">
        //                         <div
        //                             className="section-box-card bg-white d-flex flex-column align-items-center justify-content-center gap-4 box">
        //                             <img className="col-3" src={"/img/tooth.png"}/>
        //                             <span className="fw-bolder text-dark">کامپوزیت ونیز</span>
        //                         </div>
        //                     </a>
        //                     <a href="" className="text-decoration-none col-md col-12">
        //                         <div
        //                             className="section-box-card bg-white col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
        //                             <img className="col-3" src={"/img/tooth.png"}/>
        //                             <span className="fw-bolder text-dark">سرامیک ونیز</span>
        //                         </div>
        //                     </a>
        //                     <a href="" className="text-decoration-none col-md col-12">
        //                         <div
        //                             className="section-box-card bg-white col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
        //                             <img className="col-3" src={"/img/tooth.png"}/>
        //                             <span className="fw-bolder text-dark">ایمپلنت</span>
        //                         </div>
        //                     </a>
        //                     <a href="" className="text-decoration-none col-md col-12">
        //                         <div
        //                             className="section-box-card bg-white col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
        //                             <img className="col-3" src={"/img/tooth.png"}/>
        //                             <span className="fw-bolder text-dark">بوتاکس</span>
        //                         </div>
        //                     </a>
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        //
        // </div>
    )
}