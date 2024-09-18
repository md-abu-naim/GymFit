import Image from "next/image";
import Link from "next/link";

const Run = () => {
    return (
        <div className="bg-black rounded-xl p-10 mt-16 flex items-center justify-between">
            <div className="">
                <h1 className="text-3xl font-extrabold pb-2">Run an Extra <br />
                    Mile Easily</h1>
                <p className="w-[473px]">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.</p>
                <Link href='/courses' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> Read MORE</Link>
            </div>
            <div>
                <Image src={'/run.jpg'} className="rounded-2xl" width={400} height={350} alt="run" />
            </div>
        </div>
    );
};

export default Run;