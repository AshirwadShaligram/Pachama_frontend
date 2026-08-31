import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <Image src={"/icon2.png"} alt="Pachama" width={32} height={32} priority />
      <span className="text-lg font-semibold tracking-tight">Pachama</span>
    </Link>
  );
};

export default Logo;
