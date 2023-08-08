import { useEffect, useState } from "react";
import { api } from "../utils/api"

export function AnimeIndex() {
    const [animes, setAnime] = useState([]);

    useEffect(() => {
        api.get("/v1/posts/get_posts_by_categ/2")
        .then((res) => {
            setAnime(res.data);
        });
    }, []);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Posts coma a tag Anime</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                {animes.map((anime) => {
                    return (
                        <div className="bg-gray-400 m-3 rounded-sm grid">
                            <h2 className="m-2 text-2xl">{anime.title}</h2>
                            <p className="mx-1">{anime.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
