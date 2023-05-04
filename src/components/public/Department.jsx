import {Button} from "@mui/material";

export default function Department(){



    return(
        <section id="depertment" className="reveal">
            <div className="depContainer">
                <div className="depTitle">
                    <h2>بخش های ما</h2>
                    <img src={"/img/title-icon.png"} alt=""/>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده <br/> از طراحان گرافیک
                            است
                            چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                </div>
                <div className="depContent">
                    <div className="row">
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep1.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>ایمپلنت دندان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep2.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>روکش دندان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep3.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>جراحی کودکان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep3.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>جراحی کودکان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep2.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>ایمپلنت دندان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>
                        <div className="col-4 depRow">
                            <div className="depItems">
                                <div>
                                    <img src={"/img/dep1.jpg"} alt=""/>
                                        <div className="hoverBox"></div>
                                </div>
                                <h4>روکش دندان</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است

                                </p>
                                <Button>بیشتر بدانید</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}