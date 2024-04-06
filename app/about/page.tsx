import Vision from "@/app/about/vision/vision";
import Image from "next/image";
import Advantages from "@/app/components/advantages/advantages";

const About = () => {
    return (
        <div>
            <div className="h-full flex flex-auto flex-col relative">
                <div className="max-w-c-full w-full mx-auto p-6 lg:px-8 flex flex-auto justify-between lg:flex-col">
                    <div className="w-1/2 pr-8 flex flex-col justify-between lg:w-full">
                        <div>
                            <span className="text-plus font-title font-semibold text-black">О компании</span>
                            <h1 className="text-xl font-title font-bold max-w-[450px] pt-5 pb-4 text-black sm:text-xl ss:text-lg">Ведущий мировой бизнес</h1>
                            <p className="text-h-grey text-base font-text max-w-[520px] lg:max-w-none pb-7">Мы сформировали команду
                                сотрудников, прошедших профессиональное обучение, которые готовы
                                эффективно справляться с любыми возникающими ситуациями, обеспечивая спокойствие наших
                                клиентов.</p>
                            <span className="text-plus text-black font-semibold">CEO Zhang Xiaowey</span>
                        </div>
                        <div>
                            <Vision></Vision>
                        </div>
                    </div>
                    <div>
                        <Image src={"/about/cargo-ship.png"} alt={"ship"} width={630} height={847} className="lg:w-full lg:h-[400px] object-cover object-center"/>
                    </div>
                    <div className="absolute bg-bg-grey max-w-screen w-full h-3/5 -z-10 bottom-0 left-0 lg:bg-white"/>
                </div>
            </div>
            <Advantages></Advantages>
            <div className="h-[80vh]">
                <iframe src="https://s3.timeweb.com/2b62ef54-neva-sport/Kage%20no%20Jitsuryokusha%20ni%20Naritakute%21/1.mp4" frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
            </div>
        </div>
    )
}
export default About
