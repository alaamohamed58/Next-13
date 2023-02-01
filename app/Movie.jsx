import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, release_date, poster_path }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link href={`/${id}`}>
        <Image
          src={imgPath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
      <h1> {title} </h1>
      <h2>{release_date} </h2>
    </div>
  );
}
