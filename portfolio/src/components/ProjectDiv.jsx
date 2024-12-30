import place from '/pro2.png'
export function ProjectDiv(){
    return (
        <>
            <div className="text-fontColor border-fontColor border w-5/12 mt-16 ">
                <div className="text-center font-nunito">Project Title</div>  
                <div className="">
                    <img src={place} alt="project image" className=''/>
                </div>  
                <div className="text-xs px-2 py-4 font-roboto">Lorem ipsum dolor sit, amet .</div>
            </div> 
        </>
    )
}