import React, { useState, useEffect } from 'react';

const ImageSlider = (props) => {
    const images = [
        'https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1705863607493.webp&w=828&q=75',
        'https://content.jdmagicbox.com/comp/pondicherry/u2/0413px413.x413.220302161749.j5u2/catalogue/-awxba6ogqk-250.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/10/350327019/NU/WB/TZ/38215148/7-a-side-football-turf.jpg',
        'https://turftown.s3.ap-south-1.amazonaws.com/super_admin/tt-1738650204021.webp',
        'https://trackandturf.com/wp-content/uploads/2023/10/soccer-ball-in-center-of-turf-field.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9O22x3XOqFIaurrJktKvQj2b_vHWX_sPyAQ&s',
        // Add more image URLs as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Images */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            {/* Previous and Next Buttons */}
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 z-30">
                &#10094;
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 z-30">
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;
