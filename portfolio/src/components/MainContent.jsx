import { TopProject } from "./TopProject"
import { Services } from "./Services"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
export function Main(){
    return (
        <div className="flex flex-col">
            <TopProject/>
            <Services/>
            <Projects/>
            <Skills/>
        </div>
    )
}