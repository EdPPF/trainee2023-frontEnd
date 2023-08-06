import { useEffect, useState } from "react";
import { api } from "../utils/api"

export function AnimeIndex() {
    const [animes, setAnime] = useState([]);
    // const [post, setPost] = useState([]);

    useEffect(() => {
        api.get("/v1/post_categories/show/3")
        .then((res) => {
            setAnime(res.data);
        });
    }, []);

    // useEffect(() => {
    //     api.get("/v1/posts/index")
    //     .then((res) => {
    //         setPost(res.data.id);
    //     });
    // }, []);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Posts coma a tag Anime</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                {animes.map((anime) => {
                    return (
                        <div className="bg-gray-400 m-3 rounded-sm grid">
                            <h2 className="m-2 text-2xl">{anime.post_id}</h2>
                            <p className="mx-1">{anime.category_id}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
