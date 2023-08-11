import { useEffect, useState } from "react";
import { api } from "../utils/api"
import { Link } from "react-router-dom";

export function PostsIndex() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("/v1/posts/index")
        .then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Todos os Posts!</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                {posts.map(post => {
                    return (
                        <li key={post.id} className="bg-gray-400 m-3 rounded-sm grid h-28 overflow-scroll">
                            <Link to={`/post/${post.id}`} className="m-2 text-2xl hover:text-cyan-800 duration-200">
                                {post.title}
                            </Link>
                            <p className="mx-1">{post.content}</p>
                        </li>
                    );
                })}
            </div>
        </div>
    )
}
