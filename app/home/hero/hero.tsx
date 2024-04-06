import Image from "next/image"
import Button from "../../components/button/button"

export default function Hero() {
  return (
    <section className="w-full relative">
        <div className="max-w-c-full m-auto h-[calc(100vh-64px)] short:h-fit flex flex-col justify-center z-10 relative p-6 lg:px-10">
          <div className=" font-title text-sm after:block after:h-[1px] after:max-w-[216px] after:w-auto after:bg-red">
            Доставка груза: без границ и ограничений
          </div>
          <h1 className="mt-[28px] sm:text-xl font-title font-bold text-3xl max-w-[729px]">
            ASIAFY - ваш ключ к простой и быстрой логистике.
          </h1>
          <p className="font-base font-text mt-[20px] max-w-[559px]">Доверьте нам свои отправления, и мы гарантируем их своевременную и надежную доставку. Все ваши потребности - наш приоритет!</p>
          <Button className="mt-[100px]"><div className="px-[20px] py-4 font-semibold font-title">Наши сервисы</div></Button>
        </div>
        <div className=" absolute top-0 left-0 h-full w-full">
          <Image src='/home/main-banner.png' fill={true} alt="Main Banner" objectFit="cover" className="md:object-[70%]" />
        </div>
        <div className="md:bg-[rgba(0,0,0,1)] absolute top-0 left-0 h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)-20%,rgba(255,255,255,0)80%)] opacity-70"></div>
    </section>
  )
}
