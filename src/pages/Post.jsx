import { useEffect, useState } from "react"
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

export function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

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

    useEffect(() => {
        api.get(`/v1/feedbacks/get_feedback_by_post/${id}`)
           .then((res) => {
                setFeedbacks(res.data);
           })
    }, [id]);

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">{post.title}</h1>
            <div className="m-5 h-fit rounded-md bg-gray-300 shadow-lg grid text-xl">
                <p className="m-2">{post.content}</p>
            </div>
            {feedbacks.map(feedback => {
                return (
                    <div className="flex space-x-5">
                        <div className="bg-blue-500 items-center flex m-5 rounded-3xl h-fit w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                            </svg>
                            <p className="mr-5 text-gray-100">
                                {feedback.upvotes}
                            </p>
                        </div>

                        <div className="bg-red-500 flex items-center m-5 rounded-3xl h-fit w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <p className="mr-5 text-gray-100">
                                {feedback.downvotes}
                            </p>
                        </div>
                    </div>
                )
            })}
            <div className="bg-neutral-700 rounded-lg m-1 h-80 overflow-scroll">
                {comments.map(comment => {
                    return (
                        <div>
                            <p className="ml-5 text-slate-300">
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
