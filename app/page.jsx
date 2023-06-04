"use client";

import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=eb76436ca5c3b8a4eef6cbe636ce84f2&language=en-US`
  );

  const res = await data.json();
  // console.log(res.results);

  return (
    <>
      <main>
        <div className="grid gap-16 grid-cols-fluid">
          {res.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.name}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </main>
    </>
  );
}
