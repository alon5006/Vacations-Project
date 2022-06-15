import { Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
        <header></header>
        <div className="main"><Outlet/></div>
    </div>
}

export default Layout;
