import { Avatar } from "./BlogCard"


export const AppBar=({name}:{name:string})=>{
    return(
        <div className="flex border-b justify-between px-10 py-4 shadow shadow-slate-400">
           <div className="font-bold font-serif flex flex-col justify-center text-2xl ">Medium</div>
           <div >
             <Avatar name={name}/>
           </div>
        </div>
    )
}