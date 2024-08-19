import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function PropertyType(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        customPaging: i => (
            <div className="dot" />
        ),
        appendDots: dots => (
            <div className="dots-container">
                <ul className="dots-list">{dots}</ul>
            </div>
        ),
    };

    const propertyData = [
        { img: props.DataProp[0], name: props.names[0] },
        { img: props.DataProp[1], name: props.names[1] },
        { img: props.DataProp[2], name: props.names[2] },
        { img: props.DataProp[3], name: props.names[3] },
        { img: props.DataProp[4], name: props.names[4] },
    ];

    return (
        <div className='max-w-screen-xl h-auto mx-auto flex flex-col items-center mt-28'>
            <h1 className='text-2xl sm:text-4xl text-center font-semibold'>{props.heading}</h1>
            <div className='hidden md:flex max-w-screen-xl gap-2 mx-auto justify-between mt-10'>
                {propertyData.map((value, index) => (
                    <div key={index} className='w-32 lg:w-48 h-32 lg:h-32 bg-blue-400 flex-col gap-2 text-white font-medium p-3 flex justify-center rounded-2xl items-center'>
                        <div className='text-2xl'>{value.img}</div>
                        <p>{value.name}</p>
                        <p>{value.soldData}</p>
                    </div>
                ))}
            </div>
            <div className="w-full max-w-screen-md block md:hidden relative p-4 md:p-10">
                <Slider {...settings}>
                    {propertyData.map((image, index) => (
                        <div key={index} className="flex items-center justify-center h-auto p-4">
                            <div className="flex flex-col items-center justify-center text-black text-center">
                                <div className="text-4xl">{image.img}</div>
                                <h1 className="text-xl mt-2">{image.name}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
                <style jsx>{`
                    .dot {
                        width: 10px;
                        height: 10px;
                        background-color: black;
                        border-radius: 50%;
                    }
                    .dots-list {
                        margin-top: 1rem;
                        display: flex;
                        justify-content: center;
                    }
                    .dots-container {
                        position: absolute;
                        bottom: -40px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default PropertyType;
