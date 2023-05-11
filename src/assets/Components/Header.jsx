import { data } from "../constants/data"

function Header() {
    return (
        <div className='relative h-[87%] px-48 pt-7 text-xl'>
            <div className="border absolute -z-10 w-[70%] bg-[url('/Ellipse.png')] h-[80%] bg-no-repeat bg-contain bg-[left_-1rem] filter blur-[25px]"></div>
            <div className="space-y-4">
                <h1 className="text-2xl flex font-bold gap-3">
                    EDFLING
                    <p className="text-[#f42053] ">BENEFITS</p>
                </h1>

                <div className='flex justify-between text-[14px]'>
                    {/* <ul className=''>
                    <div className="text-[#f42053] font-bold">Counselling</div>
                    {counselling.map((item) => <div className="text-black font-semibold">{item}</div>)}
                </ul>
                <ul>
                    <li className="text-[#f42053] font-bold">Expert Locations</li>
                    {expertLocations.map((item) => (
                        <li className="text-black font-semibold">{item}</li>
                    ))}
                </ul>

                <ul>
                    <li className="text-[#f42053] font-bold">Useful Links</li>
                    {usefulLinks.map((item) => (
                        <li className="text-black font-semibold">{item}</li>
                    ))}
                </ul>

                <ul>
                    <li className="text-[#f42053] font-bold ">About Us</li>
                    {aboutUs.map((item) => (
                        <li className="text-black font-semibold">{item}</li>
                    ))}
                </ul> */}

                    {Object.entries(data).map(([Title, Titlearray], idx) => {
                        return (
                            <ul key={idx} className="-space-y-[7px]">
                                <li className="text-[#f42053] text-[16px] font-bold ">{Title}</li>
                                {Titlearray.map((item) => (
                                    <li className="text-black font-semibold">{item}</li>
                                ))}
                            </ul>
                        )
                    })}

                </div>
            </div>
            <div>
                <div className="text-[#f42053] text-[15px] -space-y-2 font-semibold">
                    <h1>FOLLOW US</h1>
                    <h1>About EDFLING</h1>
                </div>
                <p className="text-sm tracking-tight font-semibold">At EDFLING, we provide an online counseling and emotional support platform designed to foster mental wellness. It anonymously connects you with the right expert from our panel consisting of psychologists, psychotherapists, counselors, life coaches and career coaches, who understand you and guide you through completely confidential individual sessions.</p>
            </div>
            <div className="mt-12 flex items-center justify-between">
                <div>
                    <h1 className="text-[15px] font-semibold -mb-2">BECOME AN EXPERT</h1>
                    <span className="text-sm tracking-tight font-semibold">
                        <span>Meanwhile, know more about:</span>
                        <span className="border-b border-black mx-1">Anxiety</span>|
                        <span className="border-b border-black mx-1">Counselling</span>|
                        <span className="border-b border-black mx-1">Stress</span>|
                        <span className="border-b border-black mx-1">Depression </span>|
                        <span className="border-b border-black mx-1"> Addiction</span>
                    </span>
                </div>
                <div className="">
                    <button className="bg-[#f42053] text-sm font-semibold text-white w-[12rem] py-2 rounded-md flex items-center justify-center gap-2">
                        <img src="/Buttonimg.jpg" alt=""
                            className="rounded-full object-contain h-8 border-[1.8px] border-white" />
                        <p>Need help?</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header

{/*          
          {
            Object.entries(data).map(([key, value]) => {
                return (
                    <ul>
                        < className="text-[#f42053] font-bold ">{value}</li>
                        {key}.map((item) => (
                        <li className="text-black font-semibold">{item}</li>
                    ))
                </ul>
          }
 */}
