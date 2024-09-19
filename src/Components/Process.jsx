import Image from "next/image";

const Process = () => {
    return (
        <div>
            <div className="border-l-2 border-[#EE6C0C] pl-6">
                <h4 className="font-medium text-xl">Awsome Process</h4>
                <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Our Process</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                <div>
                    <div className="bg-[#EE6C0C] rounded-full w-32 h-32 flex items-center justify-center">
                        <Image src={'/icon1.png'} width={50} height={50} alt="icon" />
                    </div>
                    <h3>Analyse your Goal</h3>
                </div>
            </div>
        </div>
    );
};

export default Process;