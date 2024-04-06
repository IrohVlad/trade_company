import Hero from "./home/hero/hero"
import ServiceList from "./home/serviceList/serviceList"
import Panoram from "./home/panoram/panoram"
import Pros from "./home/pros/pros"
import Processes from "./home/processes/processes"
import Blog from "./home/blog/blog"
import FormSection from "./home/formSection/formSection"

export default function Home() {
  return (
    <main className=" flex flex-col flex-auto text-white">
      <Hero/>
      <ServiceList/>
      <Panoram/>
      <Pros/>
      <Processes/>
      <Blog/>
      <FormSection/>
    </main>
  )
}
