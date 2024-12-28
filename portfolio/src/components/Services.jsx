import ui from '/ui.png'
import dev from '/dev.png'
import reponsive from '/responsive.png'
export function Services(){
    return (
        <>
            <div className="text-fontColor text-3xl text-center font-poppins mt-16">Services</div>
            <div className="flex mt-16 font-roboto">
                <div className=" w-52 flex flex-col gap-6 text-fontColor mx-6">
                    <img src={reponsive} alt="ui logo" className="w-12" />
                    <div className="">Responsive Design</div>
                    <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className=" w-52 flex flex-col gap-6 text-fontColor mx-6">
                    <img src={dev} alt="ui logo" className="w-12" />
                    <div className="">Development </div>
                    <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
    
        </>    
    )
}