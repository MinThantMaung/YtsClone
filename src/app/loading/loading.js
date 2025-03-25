import React from 'react';
import loading from '../../../public/loading.gif';
import Image from "next/image";


const Loading = () => {
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
            <Image src={loading} alt=""/>
        </div>
    );
};

export default Loading;