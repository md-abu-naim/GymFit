"use client"
import Image from "next/image";
import { useState } from "react";

const Videos = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-[url('/videos.jpg')] bg-fixed flex items-center justify-center h-[500px]">
            <div  onClick={() => setShowModal(true)} className="flex flex-col items-center justify-center">
                <Image src={'/play.webp'} className="hover:opacity-80 transition duration-300s" width={102} height={102} alt="Play" />
                <h2 className="text-3xl my-4 font-bold">Explore Fitness Complex</h2>
                <h2 className="text-3xl font-bold text-[#EE6C0C] hover:text-[#de6006] transition-colors duration-300">Watch now</h2>
            </div>

            {/* modal */}
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#252322] outline-none focus:outline-none">
                                {/* Modal header */}
                                <div className="flex items-start justify-end rounded-lg">
                                    <button
                                        className="text-black bg-transparent border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-[#252322] text-white h-9 w-9 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="relative w-[700px] flex-auto">
                                    <iframe className="w-full" width="610" height="315" src="https://www.youtube.com/embed/HQfF5XRVXjU?si=kvKSViQvGAjBCJby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    );
};

export default Videos;