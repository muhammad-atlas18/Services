import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  showName?: boolean;
};

export function BrandLogo({ className = "", priority = false, showName = true }: BrandLogoProps) {
  return <span className={`brandIdentity ${className}`.trim()}>
    <span className="brandLogoImage"><Image src="/gharmahir-logo.png" alt="" width={64} height={64} priority={priority} sizes="64px" /></span>
    {showName && <span className="brandName">GharMahir</span>}
  </span>;
}
