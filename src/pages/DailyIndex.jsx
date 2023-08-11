import { useEffect, useState } from "react";
import { api } from "../utils/api"
import { Link } from "react-router-dom";

export function DailyIndex() {
    const [dailys, setDaily] = useState([]);

    useEffect(() => {
        api.get("/v1/posts/get_posts_by_categ/1")
        .then((res) => {
            setDaily(res.data);
        });
    }, []);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Posts coma a tag Daily</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                {dailys.map((daily) => {
                    return (
                        <li key={daily.id} className="bg-gray-400 m-3 h-52 rounded-sm grid overflow-scroll">
                            <Link to={`/post/${daily.id}`} className="m-2 text-2xl hover:text-cyan-800 duration-200">
                                {daily.title}
                            </Link>
                            <p className="mx-1">{daily.content}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    )
}
