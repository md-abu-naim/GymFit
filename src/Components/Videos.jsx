"use client"
import Image from "next/image";

const Videos = () => {
    return (
        <div className="bg-[url('/videos.jpg')] flex items-center justify-center h-screen">
            <div onClick={() => document.getElementById('my_modal_4').showModal()} className="flex flex-col items-center justify-center">
                <Image src={'/play.webp'} className="hover:opacity-80 transition duration-300s" width={102} height={102} alt="Play" />
                <h2 className="text-3xl font-bold">Explore Fitness Complex</h2>
                <h2 className="text-3xl font-bold text-[#EE6C0C] hover:text-[#de6006] transition-colors duration-300">Watch now</h2>
            </div>


            <dialog id="my_modal_4" className="modal">
                <div className="modal-box max-w-2xl bg-black">
                <iframe className="w-full" width="610" height="315" src="https://www.youtube.com/embed/HQfF5XRVXjU?si=kvKSViQvGAjBCJby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Videos;