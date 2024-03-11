import { Search, X } from "lucide-react"
import { SetStateAction, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Layout from "../layout"
import { filmList } from "../data/filmList"
import Filmcard from "../components/filmcard"

const SearchPage = () => {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState<string>("")

  const handleSearch = (e: {target: {value: SetStateAction<string>}}) => {
    setSearchValue(e.target.value)
  }

  const searchResult = filmList.filter(film => film.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Layout>
      <main className="flex flex-col gap-y-4">
        <div className="flex items-center relative">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border-2 px-3 py-2 rounded-lg w-full" 
                onChange={handleSearch}
                value={searchValue}
            />

            <X className="absolute right-2 cursor-pointer" onClick={() => navigate(-1)}/>
        </div>

        <div className="grid grid-cols-3 gap-3">
            {searchValue !== "" ? (
                <>
                    {searchResult.length > 0 ? (
                        <Filmcard data={searchResult}/>
                    ) : (
                        <p>No search results</p>
                    )}
                </>
            ) : (
                <p>Please search the film...</p>
            )}
        </div>
      </main>
    </Layout>
  )
}

export default SearchPage