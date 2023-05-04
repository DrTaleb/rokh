import Carousel from 'react-bootstrap/Carousel';


export default function MainPageSlider({data}) {
    return (
        <Carousel fade className={"w-100"}>
            {data.length ? data.map(item =>
                <Carousel.Item key={item.id}>
                    <img src={item.image_url} className={"w-100"} alt="slider-img"/>
                </Carousel.Item>) :
                <Carousel.Item>
                    <img src={"/img/slider2.jpg"} className={"w-100"} alt="slider-img"/>
                </Carousel.Item>
            }
        </Carousel>
    );
}