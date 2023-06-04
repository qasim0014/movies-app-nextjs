import React from "react";
import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=eb76436ca5c3b8a4eef6cbe636ce84f2`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="my-10">
        <h2 className="text-4xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime}</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
