import { useEffect, useState } from "react"
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

export function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        api.get(`/v1/posts/show/${id}`)
           .then((res) => {
                setPost(res.data);
           })
    }, [id]);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">{post.title}</h1>
            <div className="m-5 h-fit rounded-md bg-gray-300 shadow-lg grid text-xl">
                {post.content}
            </div>
            <div className="bg-blue-500 m-5 rounded-3xl h-fit w-fit">
                <p className="m-1 text-gray-100">feedback</p>
            </div>
            <div className="bg-neutral-700">
                Aqui vão os comentários
            </div>
        </div>
    )
}
