interface BlogCardprops {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content, 
    publishedDate,
}: BlogCardprops) => {
    return (
        <div className="flex justify-center pt-5 ">
            <div className="flex max-w-2xl p-4 border-b-2 shadow-md	shadow-slate-200	 ">
                <div>
                    <div className="">
                        <div className="flex items-center">
                            <div >
                                <Avatar name={authorName}></Avatar>
                            </div>
                            <div className="flex font-light items-center">
                                <div className="pl-3  font-medium text-sm">{authorName}</div>

                                <div className="pl-2  text-slate-900 font-semibold text-xs">{publishedDate}</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-black  text-2xl py-3	text-slate-800 font-sans">{title}</div>
                    <div className="font-serif font-light text-slate-700 pb-8">{`${content.slice(0, 200)} ....`}</div>
                    <div className=" text-slate-600 text-sm">{`${Math.ceil(content.length / 200)} min Read`}</div>
                </div>
            </div>
        </div>
    );
};

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full dark:bg-gray-600">
            <span className="font-medium text-black-600 dark:text-gray-300">
                {name[0]}
            </span>
        </div>
    );
}
