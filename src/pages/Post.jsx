import { useEffect, useState } from "react"
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

export function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get(`/v1/posts/show/${id}`)
           .then((res) => {
                setPost(res.data);
           })
    }, [id]);

    useEffect(() => {
        api.get(`/v1/commentaries/get_comment_by_post/${id}`)
           .then((res) => {
                setComments(res.data);
           })
    }, [id]);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">{post.title}</h1>
            <div className="m-5 h-fit rounded-md bg-gray-300 shadow-lg grid text-xl">
                <p className="m-2">{post.content}</p>
            </div>
            <div className="bg-blue-500 m-5 rounded-3xl h-fit w-fit">
                <p className="m-1 text-gray-100">feedback</p>
            </div>
            <div className="bg-neutral-700 rounded-lg m-1">
                {comments.map(comment => {
                    return (
                        <div>
                            <p className="ml-5">
                                #{comment.user_id}
                            </p>
                            <div className="bg-neutral-600 rounded-md mx-5 mb-5">
                                <p className="m-2 text-slate-300 underline">{comment.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
