import { Search } from "lucide-react"
import Layout from "../layout"
import { Link } from "react-router-dom"
import { filmList } from "../data/filmList"
import Filmcard from "../components/filmcard"

const Home = () => {
  return (
    <Layout>
        <Link to="/search">
          <Search />
        </Link>

        <h1 className="text-2xl font-semibold">Hello, what would you like to watch?</h1>

        <div className="grid grid-cols-3 gap-3">
            <Filmcard data={filmList}/>
        </div>
    </Layout>
  )
}

export default Home