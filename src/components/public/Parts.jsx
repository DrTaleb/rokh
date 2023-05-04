export default function Parts() {


    return (
        <div className={"container"}>
            <div className={"title-parent w-100"}>
                <h2 className={"main-title header-title my-3"} id="history-main-title">
                    The history of BMW 3 series
                </h2>
            </div>
            <div className={"container"}>
                <div className="history-section d-flex flex-column flex-wrap w-100">
                    <div className="inner-history-div d-flex flex-column flex-md-row mt-3 flex-wrap">
                        <div className="col-md-12 col-12 order-0 order-md-0 box">
                            <h3 className="border-start border-4 ps-1">خدمات کامپوزیت</h3>
                        </div>
                        <div className="col-md-5 col-12 order-2 order-md-1 box">
                            <p className="lead text-justify">The first generation of BMW 3 series introduced about 40 years
                                ago
                                with
                                code E21
                            </p>
                        </div>
                        <div className="col-md-6 offset-md-1 col-12 order-1 order-md-2 box">
                                <img className="w-100 rounded" src={"/img/dep1.jpg"}/>
                        </div>
                    </div>
                    <div className="inner-history-div d-flex flex-column flex-md-row flex-wrap mt-5">
                        <div className="col-md-5 order-1 order-md-1 box">
                            <img className="img-fluid rounded" src={"/img/dep2"}/>
                        </div>
                        <div className="col-md-6 offset-md-1 order-2 order-md-2 box">
                            <p className="lead text-justify">The first models of E21 was slow and heavy but after that BMW
                                produced
                                them with 6 cylinder injector engines
                                and they had very special options like Limited slip differential and Gearbox with close
                                ratios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}