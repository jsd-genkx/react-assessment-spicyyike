import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="w-full">
        <div className="w-full">
        <nav>
            <ul className="flex flex-row justify-end border-b">
                <li className="p-4 font-bold"><Link to="/">Home</Link></li>
                <li className="p-4 font-bold mx-4"><Link to="/owner">Owner</Link></li>
            </ul>
        </nav>
        </div>
        <div className="p-6 w-full">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout