import place from '/pro2.png'
import github from '/github.webp'
import external from '/external.png'


export function ProjectDiv({name,link,linkGit,img}){
    return (
        <>
            <div className="text-fontColor border-fontColor border w-8/12 mt-16 self-center">
                <div className="flex justify-between text-center font-nunito py-4 px-1">
                    <div className="">
                    {name}
                    </div>    
                    <div className="flex gap-3">

                        {/* GITHUB */}
                        <a href={linkGit} target="_blank" >
                            <img src={github} alt="" className="w-5 h-5" />
                        </a>

                        {/* LIVE LINK*/}
                        <a href={link} target="_blank" >
                            <img src={external} alt="" className="w-5 h-5" />
                        </a>
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