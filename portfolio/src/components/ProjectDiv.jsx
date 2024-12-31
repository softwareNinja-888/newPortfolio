import place from '/pro2.png'
import github from '/github.webp'

export function ProjectDiv(){
    return (
        <>
            <div className="text-fontColor border-fontColor border w-8/12 mt-16 self-center">
                <div className="flex justify-between text-center font-nunito py-4 px-1">
                    <div className="">
                    Project Title
                    </div>    
                    <div className="flex gap-3">
                        <img src={github} alt="" className="w-5 h-5" />
                        <img src={github} alt="" className="w-5 h-5" />
                    </div>
                </div>  
                <div className="">
                    <img src={place} alt="project image" className=''/>
                </div>  
                <div className="text-sm px-2 py-4 font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque atque error odit? Omnis nesciunt minima, amet error aliquid fugiat explicabo expedita voluptas sapiente ipsam tempore dolorum inventore voluptate perspiciatis!</div>
               
            </div> 
        </>
    )
}