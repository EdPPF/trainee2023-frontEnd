import { useEffect, useState } from "react";
import { api } from "../utils/api"

export function PostsIndex() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get("/v1/posts/index")
        .then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <div className="h-screen bg-gray-100 grid text-xl">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Todos os Posts!</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce dignissim eleifend tincidunt.
                Mauris ut imperdiet dui.
                Aliquam in mauris vel enim pretium volutpat.
                Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce dignissim eleifend tincidunt.
                Mauris ut imperdiet dui.
                Aliquam in mauris vel enim pretium volutpat.
                Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce dignissim eleifend tincidunt.
                Mauris ut imperdiet dui.
                Aliquam in mauris vel enim pretium volutpat.
                Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
                {posts.map((post) => {
                    return (
                        <div className="bg-gray-400 m-3 rounded-sm grid">
                            <h2 className="m-2 text-2xl">{post.title}</h2>
                            <p className="mx-1">{post.content}</p>
                        </div>
                    );
                })}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce dignissim eleifend tincidunt.
                Mauris ut imperdiet dui.
                Aliquam in mauris vel enim pretium volutpat.
                Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
            </div>
        </div>
    )
}
