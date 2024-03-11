import { ReactNode } from "react"
import Sidebar from "../components/sidebar"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
      <main>
          <Sidebar />

          <div className="ml-[300px] p-10">
            {children}
          </div>
      </main>
    )
}

export default Layout