import Image from "next/image";

const Videos = () => {
    return (
        <div className="bg-[url('/videos.jpg')]">
            <Image src={'/play.webp'} width={150} height={150} alt="Play" />
        </div>
    );
};

export default Videos;