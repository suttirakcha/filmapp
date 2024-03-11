export interface FilmList {
  title: string,
  year: number,
  genres: string[],
  rating: string
}

export const filmList: FilmList[] = [
  {
    title:"Titanic",
    year:1997,
    genres:['Drama', 'Romance'],
    rating:"PG-13"
  },
  {
    title:"Ratatouile",
    year:2007,
    genres:["Animation", "Comedy", "Family"],
    rating:"G"
  },
  {
    title:"Despicable Me",
    year:2007,
    genres:["Animation", "Adventure", "Comedy"],
    rating:"PG"
  },
  {
    title:"Inception",
    year:2010,
    genres:["Action", "Adventure", "Sci-Fi"],
    rating:"PG-13"
  },
  {
    title:"Annabelle",
    year:2014,
    genres:["Horror", "Thriller"],
    rating:"R"
  },
  {
    title:"San Andreas",
    year:2015,
    genres:["Action", "Adventure", "Thriller"],
    rating:"PG-13"
  },
  {
    title:"Skyscraper",
    year:2018,
    genres:["Action", "Thriller"],
    rating:"PG-13"
  },
  {
    title:"Mulan",
    year:2020,
    genres:["Action", "Adventure", "Fantasy"],
    rating:"PG-13"
  }
]