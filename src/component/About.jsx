import react from "react"
import image1 from "../assets/aboutme.jpeg"
export default function About(){
    return <section id="about"  className="py-5">
    <div className="border-b border-neutral-900 lg:pb-4">
        <h1 className="my-20 text-center text-4xl">About Me</h1>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
            <div className="flex items-center justify-center shadow">
                <img src={image1} className="shadow-2xl shadow-blue-500/20"></img>
                
            </div>
        </div>

    </div>
    </div>
    </section>
}
