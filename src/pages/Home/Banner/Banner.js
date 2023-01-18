import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import {images} from '../../../Data/BannerData'
import img1 from '../../../assest/images/banner1.jpg'
import img2 from '../../../assest/images/banner2.jpg'
import img3 from '../../../assest/images/banner3.jpg'


const Banner = () => {

    const images = [
        {
            img: img1,
            id:1
        },
        {
            img: img2,
            id:2
        },
        {
            img: img3,
            id:3    },
    ];
    return (
        <div className=' w-full shadow '>
        
        <Carousel autoPlay infiniteLoop showThumbs={false} stopOnHover={false} >
            {images.map((img) => (
                        <div key={img.id}>
                        <img className='rounded' src={img.img} alt='' />
                       
                    </div>
                    ))}
            </Carousel>
        </div>
    );
};

export default Banner;