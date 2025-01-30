export function ServiceCard({img,name,text}){
    return (
        <>
            <div className=" w-52 flex flex-col gap-6 text-fontColor mx-6 ">
                <img src={img} alt="ui logo" className="w-12 h-12 self-center" />
                <div className="text-center">{name}</div>
                <div className="text-center">{text}</div>
            </div>
        </>
    )
}