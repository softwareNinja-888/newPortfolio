import { TopProject } from "./TopProject"
import { Services } from "./Services"
export function Main(){
    return (
        <div className="mt-10 flex flex-col">
            <TopProject/>
            <Services/>
        </div>
    )
}