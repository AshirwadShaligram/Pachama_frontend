import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/icon2.png"
              alt="Pachama"
              width={32}
              height={32}
              priority
            />

            <span className="font-semibold text-gray-800">Pachama</span>
          </div>

          <p className="text-center text-xs text-gray-500 md:text-left">
            © 2026 PACHAMA TECH ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Footer items */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-700 md:justify-end">
          <span className="cursor-pointer transition-colors hover:text-emerald-600">
            Support
          </span>

          <span className="cursor-pointer transition-colors hover:text-emerald-600">
            Privacy
          </span>

          <span className="cursor-pointer transition-colors hover:text-emerald-600">
            Terms
          </span>

          <span className="cursor-pointer transition-colors hover:text-emerald-600">
            Shipping
          </span>

          <span className="cursor-pointer transition-colors hover:text-emerald-600">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
