import Button from "../../components/button/button"
import Image from "next/image"

export default function Pros() {
  return (
    <section className='w-full bg-[#C4C4C4] relative'>
        <div className='w-full max-w-c-full h-fit 2lg:flex-col m-auto flex items-center 2lg:items-start justify-between z-10 relative px-6 py-16 lg:px-10'>
            <div className='max-w-[550px] 2lg:max-w-none 2lg:order-2 2lg:mt-[50px]'>
                <h2 className='font-title sm:text-xl ss:text-lg text-2xl font-bold text-[black]'>Профессионалы в траспортировке</h2>
                <p className='font-text text-[#6C6C6C] mt-9'>Мы предоставляем комплексные услуги по транспортировке для наших партнеров по всему миру и всегда предлагаем инновационные решения для сложных логистических задач.</p>
                <Button className="py-3 px-4 min-w-[194px] mt-[80px]"><div className="font-title font-semibold text-center">О нас</div></Button>
            </div>
            <div className="max-w-[602px] sm:h-fit sm:max-w-none 2lg:w-[100%] 2lg:flex-[0_0_auto] 2lg:self-center flex-1 h-[444px] relative 2lg:order-1 sm:grid sm:grid-cols-[1fr] sm:gap-3">
                <div className="h-[212px] w-[321px] sm:w-auto flex flex-col items-center justify-center rounded-md bg-[black] absolute left-0 top-[120px] sm:static">
                    <div className=" font-bold font-title text-[48px]">
                        <div className="flex items-center">
                            <Image src='/car2.svg' alt="" width={44} height={44} className="mr-4" />
                            950
                        </div>
                        <div className="mt-[15px] font-title font-semibold text-[18px]">Совершено перевозок</div>
                    </div>
                </div>
                <div className="h-[212px] w-[321px] sm:w-auto flex flex-col items-center justify-center rounded-md bg-[white] shadow-md absolute top-0 right-0 sm:static">
                    <div className=" font-bold font-title text-[48px] text-[black]">
                        <div className="flex items-center">
                            <Image src='/Group.svg' alt="" width={44} height={44} className="mr-4" />
                            1250
                        </div>
                        <div className="mt-[15px] font-title font-semibold text-[18px] text-[black]">Довольных клиентов</div>
                    </div>
                </div>
                <div className="h-[212px] w-[321px] sm:w-auto flex flex-col items-center justify-center rounded-md bg-[white] shadow-md absolute bottom-0 right-0 sm:static">
                    <div className=" font-bold font-title text-[48px] text-[black] ">
                        <div className="flex items-center">
                            <Image src='/people.svg' alt="" width={44} height={44} className="mr-4" />
                            120 
                        </div>
                        <div className="mt-[15px] font-title font-semibold text-[18px] text-[black]">Членов команды</div>
                    </div>
                </div>

            </div>
        </div>
        <div className='absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,1)0%,rgba(255,255,255,0.5)100%)]'>
        
        </div>
    </section>
  )
}
