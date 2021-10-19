import React, { useEffect, useState } from 'react';
import Image from './Image/Image';

const Gallary = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('./gallary.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='container py-5 mt-5'>
            <div>
                <div className="text-center">
                    <h1>Our Gallary</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        images.map(image => <Image key={image.id} image={image}></Image>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallary;