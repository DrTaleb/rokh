export default function Features() {


    return (
        <section className="my-5 pt-4">
            <div className="container">
                <section className="section-boxes mt-5">
                    <div className="container mt-5">
                        <div
                            className="d-flex flex-md-row flex-column justify-content-around px-5 align-items-center gap-4 gap-md-3">
                            <a href="" className="text-decoration-none col-md col-12">
                                <div
                                    className="section-box-card d-flex flex-column align-items-center justify-content-center gap-4 box">
                                    <img className="col-3" src={"/img/static/Frame.svg"}/>
                                    <span className="fw-bolder text-dark">کامپوزیت ونیز</span>
                                </div>
                            </a>
                            <a href="" className="text-decoration-none col-md col-12">
                                <div
                                    className="section-box-card col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
                                    <img className="col-3" src={"/img/static/Group.svg"}/>
                                    <span className="fw-bolder text-dark">سرامیک ونیز</span>
                                </div>
                            </a>
                            <a href="" className="text-decoration-none col-md col-12">
                                <div
                                    className="section-box-card col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
                                    <img className="col-3" src={"/img/static/Frame 513.svg"}/>
                                    <span className="fw-bolder text-dark">ایمپلنت</span>
                                </div>
                            </a>
                            <a href="" className="text-decoration-none col-md col-12">
                                <div
                                    className="section-box-card col-md d-flex flex-column align-items-center justify-content-center gap-4 box">
                                    <img className="col-3" src={"/img/static/Vector.svg"}/>
                                    <span className="fw-bolder text-dark">بوتاکس</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}