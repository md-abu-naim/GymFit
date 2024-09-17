import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="flex mt-10 items-center justify-center">
            <div className="">
                <Image src='/devider.png' width={50} height={80} alt="devider" />
                <div className="flex flex-col gap-5 ml-4">
                    <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank"><FaLinkedinIn /></a>
                    <a href="" target="_blank"><FaFacebookF /></a>
                    <a href="" target="_blank"><FaTwitter /></a>
                </div>
                <Image src='/devider.png' width={50} height={80} alt="devider" />
            </div>
            <div className="flex w-full items-center relative text-center justify-center flex-col">
                <Image className="" src={'/banner.png'} width={507} height={400} alt="banner" />
                <div className="absolute top-48 space-y-6">
                    <h1 className=" uppercase text-7xl leading-[70px] font-extrabold"><span className="text-[#EE6C0C]">Hard Rock Game</span> <br /> Time to Change</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi obcaecati sint sit totam sed! Lorem, <br /> ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/about' className="btn rounded-3xl px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white">KNOW MORE</Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;