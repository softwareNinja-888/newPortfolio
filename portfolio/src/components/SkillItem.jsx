

export function SkillItem({skill}){

    return(
        <>
            {/* <div className="text-fontColor">
                <div className="">
                    <img src={skill.img} alt={`${skill.id} logo`} className="" />
                </div>
                <div className="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel eveniet veniam! !</div>
            </div>   */}



            {/*  */}

            <div className="text-fontColor border-fontColor border w-8/12 h-44 mt-16 self-center items-center flex justify-center">
                <div className="flex flex-col justify-between items-center text-center font-nunito py-4 px-1">

                <div className="">
                    <img src={skill.img} alt={`${skill.id} logo`} className="w-16" />
                </div>  
                <div className="flex justify-between text-center font-nunito py-4 px-1">
                    <div className="">
                    {/* {skill.id} */}
                    </div>    
                </div>  
                <div className="text-sm px-2 py-4 font-roboto hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque atque error odit? Omnis nesciunt minima, amet error aliquid fugiat explicabo expedita voluptas sapiente ipsam tempore dolorum inventore voluptate perspiciatis!</div>
               </div>
            </div> 
        </>

        
    )
}