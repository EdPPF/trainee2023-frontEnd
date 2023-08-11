import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { PostsIndex } from "./pages/PostsIndex";
import { AnimeIndex } from "./pages/AnimeIndex";
import { UserContextProvider } from "./utils/UserContext";
import { CreateUser } from "./pages/CreateUser";
import { DailyIndex } from "./pages/DailyIndex";
import { GamesIndex } from "./pages/GamesIndex";
import { CreatePost } from "./pages/CreatePost";
import { Post } from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/create",
        element: <CreateUser/>
      },
      {
        path: "/posts",
        element: <PostsIndex/>
      },
      {
        path: "/post/:id",
        element: <Post/>
      },
      {
        path: "/daily",
        element: <DailyIndex/>
      },
      {
        path: "/anime",
        element: <AnimeIndex/>
      },
      {
        path: "/games",
        element: <GamesIndex/>
      },
      {
        path:"/newpost",
        element: <CreatePost/>
      }
    ]
  }
])

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  )
}

export default App;
