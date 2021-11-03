import Image from "next/image";
import Link from "next/link";

export const Headline = () => {
  return (
    <header>
      <span>
        <Image src="/1.png" alt="4Animater logo" width={30} height={30} />
      </span>
      <Link href="/">
        <a>4animater</a>
      </Link>
      <div>
        <a href="https://animap.vercel.app/">AniMap</a>
      </div>
    </header>
  );
};
