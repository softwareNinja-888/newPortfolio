import { SkillItem } from "./SkillItem"
import Skilldata from "../assets/data/Skilldata"

export function Skills(){


    return(
        <>
            <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">Skills</div>
            <div className="text-fontColor w-12/12 text-center p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum possimus quidem hic magnam esse. Earum aliquam accusantium, at eos eveniet necessitatibus ipsa vero perspiciatis suscipit facere et saepe inventore!
            </div>
            <div className="flex flex-col">
                {/* <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">Main Skills</div> */}
                {Skilldata.MainSkills.list.map((skill, index) =>{
                    return <SkillItem key={index} skill={skill} />
                })}

                <div className="text-fontColor text-3xl text-center font-poppins mt-20 underline">Other Skills</div>
                {Skilldata.otherSkills.list.map((skill, index) =>{
                    return <SkillItem key={index} skill={skill} />
                })}
            </div>
        </>
    )
}