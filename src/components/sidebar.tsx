import { ChevronDown, Clapperboard, Film, Home, IconNode } from "lucide-react"
import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface Menus {
    name:string,
    link:string,
    icon:ReactNode,
}

const navMenus: Menus[] = [
  {
    name:'Home',
    link:'/',
    icon:<Home />
  },
  {
    name:'Recommended',
    link:'/recommended',
    icon:<Film />
  },
  {
    name:'Genres',
    link:'/genres',
    icon:<Clapperboard />,
  }
]

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className="p-3 bg-blue-200 h-full fixed left-0 w-[300px]">
      <h1 className="mb-4 p-3 text-2xl font-bold">FILMAPP</h1>
      <ul className="flex flex-col gap-y-2">
        {navMenus.map(menu => (
          <li 
            className="flex items-center gap-x-3 cursor-pointer hover:bg-gray-500/20 px-3 py-2 rounded-md" 
            onClick={() => navigate(menu.link)}
          >
            {menu.icon}
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar