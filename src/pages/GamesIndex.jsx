import { useEffect, useState } from "react";
import { api } from "../utils/api"

export function GamesIndex() {
    const [games, setGame] = useState([]);

    useEffect(() => {
        api.get("/v1/posts/get_posts_by_categ/3")
        .then((res) => {
            setGame(res.data);
        });
    }, []);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Posts coma a tag Games</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                {games.map((game) => {
                    return (
                        <div className="bg-gray-400 m-3 rounded-sm grid">
                            <h2 className="m-2 text-2xl">{game.title}</h2>
                            <p className="mx-1">{game.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
