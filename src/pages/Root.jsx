import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export function Root() {
    return (
        <>
            <div className="flex justify-center">
                <Navbar/>
            </div>

            <div className="flex justify-center">
                <Outlet/>
            </div>
        </>
    )
}
