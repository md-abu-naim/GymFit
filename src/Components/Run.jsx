import Link from "next/link";

const Run = () => {
    return (
        <div className="bg-black">
            <div>
                <h1>Run an Extra
                    Mile Easily</h1>
                <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.</p>
                <Link href='/courses' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> Read MORE</Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Run;