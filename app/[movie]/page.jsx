import Image from "next/image";
export default async function MovieDetail({ params }) {
  const { movie } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  const imgPath = "https://image.tmdb.org/t/p/original";
  console.log(data);

  return (
    <div>
      <div>
        <h2 className="text-2xl"> {data.title} </h2>
        <h2 className="text-lg"> {data.release_date} </h2>
        <h2> runtime : {data.runtime} minutes </h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
          {data.status}
        </h2>

        <Image
          className="my-2 w-full"
          src={imgPath + data.backdrop_path}
          alt={data.title}
          width={800}
          height={800}
          priority
        />
        <p> {data.overview} </p>
      </div>
    </div>
  );
}
