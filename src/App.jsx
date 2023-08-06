import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { PostsIndex } from "./pages/PostsIndex";
import { AnimeIndex } from "./pages/AnimeIndex";

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
        children:[
          {
            path: "/profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/posts",
        element: <PostsIndex/>
      },
      {
        path: "/anime",
        element: <AnimeIndex/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
