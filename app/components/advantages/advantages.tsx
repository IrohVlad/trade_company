import Image from "next/image";

interface IAdvantagesProps{
    className?: string
}

export default function Advantages({className}: IAdvantagesProps ) {
    return (
        <section className={ ' px-6 lg:px-8' +className}>
            <div className="flex items-center justify-center h-[332px] max-w-c-full w-full mx-auto gap-44 lg:gap-10 lg:justify-between md:flex-col md:py-6 md:h-fit md:gap-[60px]">
                <div className="md:flex md:flex-col md:items-center">
                    <div className="flex items-center mb-[15px]">
                        <div className="mr-4">
                            <Image src='/car2.svg' alt="" width={44} height={44} className="mr-4" />
                        </div>
                        <div className="text-2xl font-bold text-black">
                            950
                        </div>
                    </div>
                    <div className="text-[#6C6C6C] text-lg font-semibold">
                        Завершенных доставок
                    </div>
                </div>
                <div className="md:flex md:flex-col md:items-center">
                    <div className="flex items-center mb-[15px]">
                        <div className="mr-4">
                            <Image src='/Group.svg' alt="" width={44} height={44} className="mr-4" />
                        </div>
                        <div className="text-2xl font-bold text-black">
                            1250
                        </div>
                    </div>
                    <div className="text-[#6C6C6C] text-lg font-semibold">
                        Довольных клиентов
                    </div>
                </div>
                <div className="md:flex md:flex-col md:items-center">
                    <div className="flex items-center mb-[15px]">
                        <div className="mr-4">
                            <Image src='/people.svg' alt="" width={44} height={44} className="mr-4" />
                        </div>
                        <div className="text-2xl font-bold text-black">
                            120
                        </div>
                    </div>
                    <div className="text-[#6C6C6C] text-lg font-semibold">
                        Членов команды
                    </div>
                </div>
            </div>
        </section>
)
}