import { FilmList } from "../data/filmList"

interface FilmData {
    data: FilmList[]
}

const Filmcard = ({data} : FilmData) => {
    return (
        <>
            {data.map(d => (
                <div className="border rounded-md p-4">
                    <h2 className="text-lg font-medium">{d.title}</h2>
                    <p className="flex gap-x-2 text-xs">
                        Genres: 
                        {d.genres.join(", ")}
                    </p>
                </div>
            ))}
        </>
    )
}

export default Filmcard